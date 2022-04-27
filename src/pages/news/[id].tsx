import { useRouter } from 'next/router';

const NewsArticle = () => {
  const router = useRouter();
  const { id } = router.query;

  return <p>NewArticle: {id}</p>;
};

export default NewsArticle;
