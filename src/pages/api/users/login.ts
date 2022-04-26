import * as jwt from 'jsonwebtoken';
import { serialize } from 'cookie';
import prisma from '@/lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { email, password } = req.body;

  const user = await prisma.user.findFirst({ where: { email } });

  if (!user || user.password !== password) {
    return res.status(401).json({ error: `Invalid credentials` });
  }
  const token = jwt.sign({ sub: user.id }, process.env.JWT_SECRET, {
    expiresIn: `7d`,
  });

  return res
    .setHeader(`Set-Cookie`, serialize(`token`, token, { path: `/` }))
    .status(200)
    .json(user);
}
