import { serialize } from 'cookie';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  return res
    .setHeader(`Set-Cookie`, serialize(`token`, ``, { path: `/`, maxAge: 0 }))
    .status(200)
    .json({ message: `Logged out` });
}
