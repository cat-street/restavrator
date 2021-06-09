import { useRouter } from 'next/router';

const index = (): JSX.Element => {
  const router = useRouter();
  const { id } = router.query;

  return <p>{id}</p>;
};

export default index;
