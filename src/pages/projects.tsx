// pages/index.tsx

import Head from 'next/head';
import { useState } from 'react';

const Home = () => {
  const [state, setState] = useState(0);
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
        <div className="h-[100%] mb-[70%] flex flex-col">
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
                    hi
                  </div>
                )}
                <img
                  id="gear"
                  className="absolute h-full w-full bottom-0  right-0 transition-all opacity-15 hover:opacity-80 hover:cursor-pointer filter hue-rotate-[180deg]"
                  src="gear.gif"
                  alt=""
                  style={{
                    clipPath:
                      'polygon(100% 100%, 100% 0, 100% 40%, 99% 82%, 0% 100%)',
                  }}
                  onMouseEnter={() => setState(1)}
                  onMouseLeave={() => setState(0)}
                />
              </div>
            </div>
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
                  src="gdi.mp4"
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
                    hi
                  </div>
                )}
                <img
                  id="gear"
                  className="absolute h-full w-full bottom-0  right-0 transition-all opacity-15 hover:opacity-80 hover:cursor-pointer filter hue-rotate-[180deg]"
                  src="gear.gif"
                  alt=""
                  style={{
                    clipPath:
                      'polygon(100% 100%, 100% 0, 100% 40%, 99% 82%, 0% 100%)',
                  }}
                  onMouseEnter={() => setState(1)}
                  onMouseLeave={() => setState(0)}
                />
              </div>
            </div>
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
                  src="push2.mp4"
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
                    hi
                  </div>
                )}
                <img
                  id="gear"
                  className="absolute h-full w-full bottom-0  right-0 transition-all opacity-15 hover:opacity-80 hover:cursor-pointer filter hue-rotate-[180deg]"
                  src="gear.gif"
                  alt=""
                  style={{
                    clipPath:
                      'polygon(100% 100%, 100% 0, 100% 40%, 99% 82%, 0% 100%)',
                  }}
                  onMouseEnter={() => setState(1)}
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
                onMouseEnter={() => setState(-1)}
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
                    hi
                  </div>
                )}
                <img
                  id="gear"
                  className="absolute h-full w-full bottom-0  right-0 transition-all opacity-15 hover:opacity-80 hover:cursor-pointer filter hue-rotate-[180deg]"
                  src="gear.gif"
                  alt=""
                  style={{
                    clipPath:
                      'polygon(100% 100%, 100% 0, 100% 40%, 99% 82%, 0% 100%)',
                  }}
                  onMouseEnter={() => setState(1)}
                  onMouseLeave={() => setState(0)}
                />
              </div>
            </div>

          </div>
          <br />
          <h1 className='self-center'>Kotlin and FLUTTER</h1>
          <div className="h-1/3 w-2/3 flex flex-row mx-auto hover:h-full hover:w-full shrink transition-all duration-700">
          <div className="flex justify-center items-center transition-all duration-700 overflow-hidden w-1/3 hover:w-[2000%] h-full relative p-8 border-2 border-light-yellow dark:border-dark-yellow">
              <div
                id="parent"
                className="relative h-full w-1/4 flex justify-center items-center"
                onMouseEnter={() => setState(-1)}
                onMouseLeave={() => setState(0)}
              >
                <video
                  id="image"
                  className="object-cover w-full h-full z-10 transition-all"
                  src="bank2.webm"
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
                    hi
                  </div>
                )}
                <img
                  id="gear"
                  className="absolute h-full w-full bottom-0  right-0 transition-all opacity-15 hover:opacity-80 hover:cursor-pointer filter hue-rotate-[180deg]"
                  src="gear.gif"
                  alt=""
                  style={{
                    clipPath:
                      'polygon(100% 100%, 100% 0, 100% 40%, 99% 82%, 0% 100%)',
                  }}
                  onMouseEnter={() => setState(1)}
                  onMouseLeave={() => setState(0)}
                />
              </div>
            </div>
            <div className="flex justify-center items-center transition-all duration-700 overflow-hidden w-1/3 hover:w-[2000%] h-full relative p-8 border-2 border-light-yellow dark:border-dark-yellow">
              <div
                id="parent"
                className="relative h-full w-[30%] flex justify-center items-center"
                onMouseEnter={() => setState(-1)}
                onMouseLeave={() => setState(0)}
              >
                <video
                  id="image"
                  className="object-cover w-full h-full z-10 transition-all"
                  src="flutter2.mp4"
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
                    hi
                  </div>
                )}
                <img
                  id="gear"
                  className="absolute h-full w-full bottom-0  right-0 transition-all opacity-15 hover:opacity-80 hover:cursor-pointer filter hue-rotate-[180deg]"
                  src="gear.gif"
                  alt=""
                  style={{
                    clipPath:
                      'polygon(100% 100%, 100% 0, 100% 40%, 99% 82%, 0% 100%)',
                  }}
                  onMouseEnter={() => setState(1)}
                  onMouseLeave={() => setState(0)}
                />
              </div>
            </div>

          </div>
          <br />
          <h1 className='self-center'>GUI in C</h1>
          <div className="h-1/3 w-2/3 flex flex-row mx-auto hover:h-full hover:w-full shrink transition-all duration-700">
            <div className="flex justify-center items-center transition-all duration-700 overflow-hidden w-1/3 hover:w-[2000%] h-full relative p-8 border-2 border-light-yellow dark:border-dark-yellow">
              <div
                id="parent"
                className="relative h-full w-full flex justify-center items-center"
                onMouseEnter={() => setState(-1)}
                onMouseLeave={() => setState(0)}
              >
                <img
                  id="image"
                  className="object-cover w-full h-full z-10 transition-all"
                  src="c_ui.gif"
                  style={{
                    clipPath: change(1),
                    transition: 'clip-path 0.5s ease-in-out',
                  }}
                  onClick={() => (click == 1 ? setclick(0) : setclick(1))}
                  alt="c ui"
                ></img>
                {click == 1 && (
                  <div
                    id="gear"
                    className={`absolute h-fit mr-[5%] w-full transition-all z-20 text-right my-auto `}
                    // onClick={() => setclick(0)}
                  >
                    hi
                  </div>
                )}
                <img
                  id="gear"
                  className="absolute h-full w-full bottom-0  right-0 transition-all opacity-15 hover:opacity-80 hover:cursor-pointer filter hue-rotate-[180deg]"
                  src="gear.gif"
                  alt=""
                  style={{
                    clipPath:
                      'polygon(100% 100%, 100% 0, 100% 40%, 99% 82%, 0% 100%)',
                  }}
                  onMouseEnter={() => setState(1)}
                  onMouseLeave={() => setState(0)}
                />
              </div>
            </div>
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
                  src="brightness2.mp4"
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
                    hi
                  </div>
                )}
                <img
                  id="gear"
                  className="absolute h-full w-full bottom-0  right-0 transition-all opacity-15 hover:opacity-80 hover:cursor-pointer filter hue-rotate-[180deg]"
                  src="gear.gif"
                  alt=""
                  style={{
                    clipPath:
                      'polygon(100% 100%, 100% 0, 100% 40%, 99% 82%, 0% 100%)',
                  }}
                  onMouseEnter={() => setState(1)}
                  onMouseLeave={() => setState(0)}
                />
              </div>
            </div>
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
                  src="dialog2.mp4"
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
                    hi
                  </div>
                )}
                <img
                  id="gear"
                  className="absolute h-full w-full bottom-0  right-0 transition-all opacity-15 hover:opacity-80 hover:cursor-pointer filter hue-rotate-[180deg]"
                  src="gear.gif"
                  alt=""
                  style={{
                    clipPath:
                      'polygon(100% 100%, 100% 0, 100% 40%, 99% 82%, 0% 100%)',
                  }}
                  onMouseEnter={() => setState(1)}
                  onMouseLeave={() => setState(0)}
                />
              </div>
            </div>
          </div>
          <br />
          <h1 className='self-center'>NLP and CV & my library</h1>
          <div className="h-1/3 w-2/3 flex flex-row mx-auto hover:h-full hover:w-full shrink transition-all duration-700">
            <div className="flex justify-center items-center transition-all duration-700 overflow-hidden w-1/3 hover:w-[2000%] h-full relative p-8 border-2 border-light-yellow dark:border-dark-yellow">
              <div
                id="parent"
                className="relative h-full w-full flex justify-center items-center"
                onMouseEnter={() => setState(-1)}
                onMouseLeave={() => setState(0)}
              >
                <img
                  id="image"
                  className="object-cover w-full h-full z-10 transition-all"
                  src="lbots.gif"
                  style={{
                    clipPath: change(1),
                    transition: 'clip-path 0.5s ease-in-out',
                  }}
                  onClick={() => (click == 1 ? setclick(0) : setclick(1))}
                  alt="c ui"
                ></img>
                {click == 1 && (
                  <div
                    id="gear"
                    className={`absolute h-fit mr-[5%] w-full transition-all z-20 text-right my-auto `}
                    // onClick={() => setclick(0)}
                  >
                    hi
                  </div>
                )}
                <img
                  id="gear"
                  className="absolute h-full w-full bottom-0  right-0 transition-all opacity-15 hover:opacity-80 hover:cursor-pointer filter hue-rotate-[180deg]"
                  src="gear.gif"
                  alt=""
                  style={{
                    clipPath:
                      'polygon(100% 100%, 100% 0, 100% 40%, 99% 82%, 0% 100%)',
                  }}
                  onMouseEnter={() => setState(1)}
                  onMouseLeave={() => setState(0)}
                />
              </div>
            </div>
            <div className="flex justify-center items-center transition-all duration-700 overflow-hidden w-1/3 hover:w-[2000%] h-full relative p-8 border-2 border-light-yellow dark:border-dark-yellow">
              <div
                id="parent"
                className="relative h-full w-full flex justify-end items-end"
                onMouseEnter={() => setState(-1)}
                onMouseLeave={() => setState(0)}
              >
                <img
                  id="image"
                  className="object-cover w-full h-full z-10 transition-all"
                  src="coal.jpeg"
                  style={{
                    clipPath: change(1),
                    transition: 'clip-path 0.5s ease-in-out',
                  }}
                  onClick={() => (click == 1 ? setclick(0) : setclick(1))}
                ></img>
                {click == 1 && (
                  <div
                    id="gear"
                    className={`absolute h-fit mr-[5%] w-full transition-all z-20 text-right my-auto `}
                    // onClick={() => setclick(0)}
                  >
                    hi
                  </div>
                )}
                <img
                  id="gear"
                  className="absolute h-full w-full bottom-0  right-0 transition-all opacity-15 hover:opacity-80 hover:cursor-pointer filter hue-rotate-[180deg]"
                  src="gear.gif"
                  alt=""
                  style={{
                    clipPath:
                      'polygon(100% 100%, 100% 0, 100% 40%, 99% 82%, 0% 100%)',
                  }}
                  onMouseEnter={() => setState(1)}
                  onMouseLeave={() => setState(0)}
                />
              </div>
            </div>
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
                  src="presentation2.mp4"
                  controls
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
                    hi
                  </div>
                )}
                <img
                  id="gear"
                  className="absolute h-full w-full bottom-0  right-0 transition-all opacity-15 hover:opacity-80 hover:cursor-pointer filter hue-rotate-[180deg]"
                  src="gear.gif"
                  alt=""
                  style={{
                    clipPath:
                      'polygon(100% 100%, 100% 0, 100% 40%, 99% 82%, 0% 100%)',
                  }}
                  onMouseEnter={() => setState(1)}
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
