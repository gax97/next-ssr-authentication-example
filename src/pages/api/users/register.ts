// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import prisma from '@/lib/prisma';
import { handleRequestMethod } from '@/lib/handle-request-method';

export default async function handler(req, res) {
  handleRequestMethod(req, `POST`);
  const user = await prisma.user.create({
    data: req.body,
  });

  res.status(200).json(user);
}
