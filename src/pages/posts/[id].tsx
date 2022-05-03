import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';
import { authenticate } from '@/lib/authenticate';
import { getPostForUser } from '@/lib/posts';
import Link from 'next/link';

const Post = ({ post }) => {
  const router = useRouter();
  const { id } = router.query;

  if (!post) {
    return <p>Post not found</p>;
  }
  return (
    <div>
      <p>
        {post.premium ? `Premium` : ``} Post: {id}
      </p>
      <article key={post.id}>
        <h2>{post.title}</h2>
        <p>{post.content}</p>
        <Link href={`/posts/${post.id}`}>
          <a>Read more</a>
        </Link>
      </article>
    </div>
  );
};

export default Post;

export const getServerSideProps: GetServerSideProps = async ({
  req,
  params,
}) => {
  let post = null;

  try {
    const user = await authenticate(req);
    post = await getPostForUser(params.id as string, user);
  } catch (e) {
    post = await getPostForUser(params.id as string, null);
  }

  return {
    props: {
      post,
    },
  };
};
