import Link from 'next/link';

import styles from '@/styles/Home.module.css';
import { GetServerSideProps } from 'next';
import { authenticate } from '@/lib/authenticate';
import { getAllPosts, getFreePosts } from '@/lib/posts';

export default function Home({ posts, user }) {
  return (
    <div className={styles.container}>
      {user ? (
        <h1 style={{ textAlign: `center` }}>
          User: {user.email}.
          <br />
          Premium{` `}
          {user.subscribed ? <span>&#10003;</span> : <span>&#88;</span>}
        </h1>
      ) : (
        <h1>Guest user</h1>
      )}
      {user ? (
        <button
          onClick={() =>
            fetch(`/api/users/logout`, {
              method: `DELETE`,
            }).then(() => {
              window.location.reload();
            })
          }
        >
          Logout
        </button>
      ) : (
        <Link href="/login">
          <a>Login</a>
        </Link>
      )}
      <main className={styles.main}>
        {posts.map((post) => {
          return (
            <article key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.content}</p>
              <Link href={`/posts/${post.id}`}>
                <a>Read more</a>
              </Link>
            </article>
          );
        })}
      </main>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  let posts = [];
  let authUser = null;
  try {
    const user = await authenticate(req);
    authUser = user;
    if (user.subscribed) {
      posts = await getAllPosts();
    } else {
      posts = await getFreePosts();
    }
  } catch (e) {
    posts = await getFreePosts();
  }

  return {
    props: {
      posts,
      user: authUser,
    },
  };
};
