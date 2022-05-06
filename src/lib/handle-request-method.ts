import { NextApiRequest, NextApiResponse } from 'next';

export const handleRequestMethod = (
  req: NextApiRequest,
  ...methods: string[]
) => {
  if (methods.includes(req.method)) {
    return true;
  }
  throw new Error(`Method not allowed`);
};
