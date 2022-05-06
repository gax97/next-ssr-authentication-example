import { serialize } from 'cookie';
import { NextApiRequest, NextApiResponse } from 'next';
import { handleRequestMethod } from '@/lib/handle-request-method';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  handleRequestMethod(req, `POST`, `PUT`, `DELETE`);
  return res
    .setHeader(`Set-Cookie`, serialize(`token`, ``, { path: `/`, maxAge: 0 }))
    .status(200)
    .json({ message: `Logged out` });
}
