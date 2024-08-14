// pages/index.tsx

import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

const Home = () => {
  const [state, setState] = useState(0);
  const [click, setclick] = useState(0);

  return (
    <>
      <Head>
        <title>Projects</title>
        <meta
          name="description"
          content="This is the homepage of the application."
        />
      </Head>


          <div className="h-fit p-2 border-2 border-light-yellow dark:border-dark-yellow m-auto flex flex-col overflow-visible w-[25%] relative mt-[25%] pt-4">
        <h1 className='text-lg bg-dark-background absolute w-fit p-2 -top-5 right-[0px] mr-auto ml-auto left-[0px] flex flex-col'> Projects </h1>
        <li  className='w-full list-none'>{click==1 && '>'}<Link href="/projects-frontend" onMouseEnter={()=>setclick(1)}>Frontend</Link></li>
        <li className='w-full list-none'>{click==2 && '>'}<Link href="/other" onMouseEnter={()=>setclick(2)}>Other</Link></li>
        </div>
    </>
  );
};

export default Home;
