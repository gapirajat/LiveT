// pages/redirect.tsx
import { GetServerSideProps } from 'next';
import config from './../../config.json'

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: config.resume_url2, // External URL
      permanent: false, // Use true for a permanent redirect
    },
  };
};

const RedirectPage = () => {
  return <div>Redirecting...</div>;
};

export default RedirectPage;