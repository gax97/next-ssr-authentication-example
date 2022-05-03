import { NextApiRequest, NextApiResponse } from 'next';
import { authenticate } from '@/lib/authenticate';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  return authenticate(req)
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((err) => {
      res.status(err.status || 500).end(err.message);
    });
}
