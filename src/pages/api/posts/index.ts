import { NextApiRequest, NextApiResponse } from 'next';
import { authenticate } from '@/lib/authenticate';
import { getAllPosts, getFreePosts } from '@/lib/posts';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const user = await authenticate(req);
    if (user.subscribed) {
      return res.status(200).json(getAllPosts());
    }
    return res.status(200).json(getFreePosts());
  } catch (error) {
    res.status(200).json(getFreePosts());
  }
}
