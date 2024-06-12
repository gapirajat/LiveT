// pages/index.tsx

import Head from 'next/head';

const Home = () => {
  return (
    <div>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="This is the homepage of the application." />
      </Head>
      <h1 className="text-4xl font-hack">Welcome to the Home Page</h1>
      <p className="text-lg">This is the main content of the homepage.</p>
    </div>
  );
};

export default Home;