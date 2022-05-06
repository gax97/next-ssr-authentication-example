import { NextApiRequest, NextApiResponse } from 'next';
import { authenticate } from '@/lib/authenticate';
import { getAllPosts, getFreePosts } from '@/lib/posts';
import { handleRequestMethod } from '@/lib/handle-request-method';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  handleRequestMethod(req, `GET`);
  try {
    const user = await authenticate(req);
    if (user.subscribed) {
      const posts = await getAllPosts();
      return res.status(200).json(posts);
    }
    const posts = await getFreePosts();
    return res.status(200).json(posts);
  } catch (error) {
    const posts = await getFreePosts();
    res.status(200).json(posts);
  }
}
