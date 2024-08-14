// pages/index.tsx

import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Home = () => {
  console.log("first")
  const route = useRouter();
  const [state, setState] = useState(0);
  const [click, setclick] = useState(0);
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.keyCode == 38){//up
        setclick(prevState=>{ 
          console.log(prevState)
          const temp = Math.abs(prevState -1) % 2
          return temp});
      }
      else if (e.keyCode == 40) {
        setclick(prevState=>(prevState + 1) % 2);
        console.log(click)
      }
      else if(e.keyCode == 13) {
        console.log(click);
        if (click == 1) {
          // console.log(first)
          route.push('/projects-frontend')
        }
        else {
          route.push('/other')
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown);

    // Don't forget to clean up
    return function cleanup() {
      document.removeEventListener('keydown', handleKeyDown);
    }
  }, []);

  return (
    <>
      <Head>
        <title>Projects</title>
        <meta
          name="Project menu"
          content="This is Projects Menu"
        />
      </Head>


          <div tabIndex={-1} className="h-fit p-2 border-2 border-light-yellow dark:border-dark-yellow m-auto flex flex-col overflow-visible w-[25%] relative mt-[25%] pt-4">
        <h1 className='text-lg bg-dark-background absolute w-fit p-2 -top-5 right-[0px] mr-auto ml-auto left-[0px] flex flex-col'> Projects </h1>
        <li  className='w-full list-none'>{click==0 && '>'}<Link href="/projects-frontend" onMouseEnter={()=>setclick(0)}>Frontend</Link></li>
        <li className='w-full list-none'>{click==1 && '>'}<Link href="/other" onMouseEnter={()=>setclick(1)}>Other</Link></li>
        </div>
    </>
  );
};

export default Home;
