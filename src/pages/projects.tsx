// pages/index.tsx

import Head from 'next/head';

const Home = () => {
  return (
    <div>
      <Head>
        <title>Projects</title>
        <meta name="description" content="This is the homepage of the application." />
      </Head>
      <div className="p-8 overflow-hidden h-full border-2 rounded border-light-yellow dark:border-dark-yellow"></div>
    </div>
  );
};

export default Home;