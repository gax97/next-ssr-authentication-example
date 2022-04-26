// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import prisma from '@/lib/prisma';

export default async function handler(req, res) {
  const user = await prisma.user.create({
    data: req.body,
  });

  res.status(200).json(user);
}
