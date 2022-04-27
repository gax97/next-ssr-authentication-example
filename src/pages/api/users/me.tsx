import { NextApiRequest, NextApiResponse } from 'next';
import { authenticate } from '@/lib/authenticate';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  return authenticate(req, res);
}
