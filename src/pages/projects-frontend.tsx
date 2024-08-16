// pages/index.tsx

import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';


const Home = () => {
  const [state, setState] = useState(0);
  const router = useRouter()

  const change = (set) => {
    if (state == set) {
      return `polygon(0% 0%, 100% 0, 100% 40%, 99% 82%, 0% 100%)`;
    }
    if (state == -set) {
      return `polygon(0 0, 100% 0, 100% 40%, 99% 96%, 0% 100%)`;
    } else {
      return `polygon(0 0, 100% 0, 100% 40%, 100% 100%, 0% 100%)`;
    }
  };
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
      <div className="h-full p-8 border-2 border-light-yellow dark:border-dark-yellow flex flex-col overflow-auto">
        <h1 className='self-center text-lg'> Projects </h1>
        <br />
        <h1 className='self-center'> React, Next JS, JQuery and Animations </h1>
        {/* margin to add content */}
        {/* div contains video div and img */}
        {/* github live-link in desc */}
        <div className="h-[100%] mb-[0%] flex flex-col">
          <div className="h-1/3 w-2/3 flex flex-row mx-auto hover:h-full hover:w-full shrink transition-all duration-700">
            <div className="flex justify-center items-center transition-all duration-700 overflow-hidden w-1/3 hover:w-[2000%] h-full relative p-8 border-2 border-light-yellow dark:border-dark-yellow">
              <div
                id="parent"
                className="relative h-full w-full flex justify-center items-center"
                onMouseEnter={() => setState(-1)}
                onMouseLeave={() => setState(0)}
              >
                <video
                  id="image"
                  className="object-cover w-full h-full z-10 transition-all"
                  src="vnirmit.mp4"
                  loop
                  autoPlay
                  muted
                  style={{
                    clipPath: change(1),
                    transition: 'clip-path 0.5s ease-in-out',
                  }}
                  onClick={() => (click == 1 ? setclick(0) : setclick(1))}
                ></video>
                {click == 1 && (
                  <div
                    id="gear"
                    className={`absolute h-fit mr-[5%] w-full transition-all z-20 text-right my-auto `}
                    // onClick={() => setclick(0)}
                  >
                    client: vaanar (studio)
                    <br />
                    jquery 
                    <br />
                    2024
                    <br />
                    <p className='animate-pulse cursor-pointer' onClick={()=>router.push('https://www.vaanarnirmit.com/')}>Live</p>

                  </div>
                )}
                <Image
                  id="gear"
                  className="absolute h-full w-full bottom-0  right-0 transition-all opacity-15 hover:opacity-80 hover:cursor-pointer filter hue-rotate-[180deg]"
                  src="gear.gif"
                  alt=""
                  style={{
                    clipPath:
                      'polygon(100% 100%, 100% 0, 100% 40%, 99% 82%, 0% 100%)',
                  }}
                  onClick={()=>router.push('https://github.com/gapirajat/vaanar')}
                  onMouseEnter={() => setState(1)}
                  onMouseLeave={() => setState(0)}
                />
              </div>
            </div>
            <div className="flex justify-center items-center transition-all duration-700 overflow-hidden w-1/3 hover:w-[2000%] h-full relative p-8 border-2 border-light-yellow dark:border-dark-yellow">
              <div
                id="parent"
                className="relative h-full w-full flex justify-center items-center"
                onMouseEnter={() => setState(-2)}
                onMouseLeave={() => setState(0)}
              >
                <video
                  id="image"
                  className="object-cover w-full h-full z-10 transition-all"
                  src="gdi.mp4"
                  loop
                  autoPlay
                  muted
                  style={{
                    clipPath: change(2),
                    transition: 'clip-path 0.5s ease-in-out',
                  }}
                  onClick={() => (click == 2 ? setclick(0) : setclick(2))}
                ></video>
                {click == 2 && (
                  <div
                    id="gear"
                    className={`absolute h-fit mr-[5%] w-full transition-all z-20 text-right my-auto `}
                    // onClick={() => setclick(0)}
                  >
                    client: greendrive
                    <br />
                    nextjs PoC for diagnostic 
                    <br />
                    2023
                    <br />
                    <p className='animate-pulse cursor-pointer' onClick={()=>router.push('https://green-drive-india.vercel.app/')}>Live</p>
                  </div>
                )}
                <Image
                  id="gear"
                  className="absolute h-full w-full bottom-0  right-0 transition-all opacity-15 hover:opacity-80 hover:cursor-pointer filter hue-rotate-[180deg]"
                  src="gear.gif"
                  alt=""
                  style={{
                    clipPath:
                      'polygon(100% 100%, 100% 0, 100% 40%, 99% 82%, 0% 100%)',
                  }}
                  onClick={()=>router.push('https://github.com/gapirajat/nextjs-boilerplate')}
                  onMouseEnter={() => setState(2)}
                  onMouseLeave={() => setState(0)}
                />
              </div>
            </div>
            <div className="flex justify-center items-center transition-all duration-700 overflow-hidden w-1/3 hover:w-[2000%] h-full relative p-8 border-2 border-light-yellow dark:border-dark-yellow">
              <div
                id="parent"
                className="relative h-full w-full flex justify-center items-center"
                onMouseEnter={() => setState(-3)}
                onMouseLeave={() => setState(0)}
              >
                
                <video
                  id="image"
                  className="object-cover w-full h-full z-10 transition-all"
                  src="push2.mp4"
                  loop
                  autoPlay
                  muted
                  style={{
                    clipPath: change(3),
                    transition: 'clip-path 0.5s ease-in-out',
                  }}
                  onClick={() => (click == 3 ? setclick(0) : setclick(3))}
                ></video>
                {click == 3 && (
                  <div
                    id="gear"
                    className={`absolute h-fit mr-[5%] w-full transition-all z-20 text-right my-auto `}
                    // onClick={() => setclick(0)}
                  >
                    client: epsitek
                    <br />
                    web push protocol 
                    <br />
                    2024
                    <br />
                    <p className='animate-pulse cursor-pointer' onClick={()=>router.push('https://www.epsitektechnologies.in')}>Live</p>
                  </div>
                )}
                <Image
                  id="gear"
                  className="absolute h-full w-full bottom-0  right-0 transition-all opacity-15 hover:opacity-80 hover:cursor-pointer filter hue-rotate-[180deg]"
                  src="gear.gif"
                  alt=""
                  style={{
                    clipPath:
                      'polygon(100% 100%, 100% 0, 100% 40%, 99% 82%, 0% 100%)',
                  }}
                  onClick={()=>router.push('https://github.com/gapirajat/Jobwork-portal')}
                  onMouseEnter={() => setState(3)}
                  onMouseLeave={() => setState(0)}
                />
              </div>
            </div>

          </div>
          <div className="h-1/3 w-2/3 flex flex-row mx-auto hover:h-full hover:w-full shrink transition-all duration-700">
            <div className="flex justify-center items-center transition-all duration-700 overflow-hidden w-1/3 hover:w-[2000%] h-full relative p-8 border-2 border-light-yellow dark:border-dark-yellow">
              <div
                id="parent"
                className="relative h-full w-full flex justify-center items-center"
                onMouseEnter={() => setState(-4)}
                onMouseLeave={() => setState(0)}
              >
                <video
                  id="image"
                  className="object-cover w-full h-full z-10 transition-all"
                  src="ep2.mp4"
                  loop
                  autoPlay
                  muted
                  style={{
                    clipPath: change(4),
                    transition: 'clip-path 0.5s ease-in-out',
                  }}
                  onClick={() => (click == 4 ? setclick(0) : setclick(4))}
                ></video>
                {click == 4 && (
                  <div
                    id="gear"
                    className={`absolute h-fit mr-[5%] w-full transition-all z-20 text-right my-auto `}
                    // onClick={() => setclick(0)}
                  >
                    client: epsitek
                    <br />
                    react
                    <br />
                    2023
                    <br />
                    <p className='animate-pulse cursor-pointer' onClick={()=>router.push('https://www.epsitektechnologies.in')}>Live</p>
                  </div>
                )}
                <Image
                  id="gear"
                  className="absolute h-full w-full bottom-0  right-0 transition-all opacity-15 hover:opacity-80 hover:cursor-pointer filter hue-rotate-[180deg]"
                  src="gear.gif"
                  alt=""
                  style={{
                    clipPath:
                      'polygon(100% 100%, 100% 0, 100% 40%, 99% 82%, 0% 100%)',
                  }}
                  onClick={()=>router.push('https://github.com/gapirajat/Jobwork-portal')}
                  onMouseEnter={() => setState(4)}
                  onMouseLeave={() => setState(0)}
                />
              </div>
            </div>
            <div className="flex justify-center items-center transition-all duration-700 overflow-hidden w-1/3 hover:w-[2000%] h-full relative p-8 border-2 border-light-yellow dark:border-dark-yellow">
              <div
                id="parent"
                className="relative h-full w-full flex justify-center items-center"
                onMouseEnter={() => setState(-5)}
                onMouseLeave={() => setState(0)}
              >
                <video
                  id="image"
                  className="object-cover w-full h-full z-10 transition-all"
                  src="rutambhara.mp4"
                  loop
                  autoPlay
                  muted
                  style={{
                    clipPath: change(5),
                    transition: 'clip-path 0.5s ease-in-out',
                  }}
                  onClick={() => (click == 5 ? setclick(0) : setclick(5))}
                ></video>
                {click == 5 && (
                  <div
                    id="gear"
                    className={`absolute h-fit mr-[5%] w-full transition-all z-20 text-right my-auto `}
                    // onClick={() => setclick(0)}
                  >
                    client: product designer
                    <br />
                    nextjs
                    <br />
                    2024
                    <br />
                    <p className='animate-pulse cursor-pointer' onClick={()=>router.push('https://www.rutambharayadav.com')}>Live</p>
                  </div>
                )}
                <Image
                  id="gear"
                  className="absolute h-full w-full bottom-0  right-0 transition-all opacity-15 hover:opacity-80 hover:cursor-pointer filter hue-rotate-[180deg]"
                  src="gear.gif"
                  alt=""
                  style={{
                    clipPath:
                      'polygon(100% 100%, 100% 0, 100% 40%, 99% 82%, 0% 100%)',
                  }}
                  onClick={()=>router.push('https://github.com/gapirajat/RY')}
                  onMouseEnter={() => setState(5)}
                  onMouseLeave={() => setState(0)}
                />
              </div>
            </div>
          </div>



        </div>
      </div>
    </>
  );
};

export default Home;
