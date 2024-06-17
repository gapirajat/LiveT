import React from 'react';
import '../styles/global.css';
import Head from 'next/head';
import { useEffect } from 'react';
import { GoogleTagManager } from '@next/third-parties/google'

// import TagManager from 'react-gtm-module';


// const App = ({ Component, pageProps }) => {
 
//   const inputRef = React.useRef<HTMLInputElement>(null);

//   const onClickAnywhere = () => {
//     inputRef.current.focus();
//   };

//   return (
//     <>   
//       <Head>
        
//         <meta
//           name="viewport"
//           content="initial-scale=1.0, width=device-width"
//           key="viewport"
//           maximum-scale="1"
//         />
//       </Head>

//       <div
//         className="text-light-foreground dark:text-dark-foreground min-w-max text-xs md:min-w-full md:text-base"
//         onClick={onClickAnywhere}
//       >
//         <main className="bg-light-background dark:bg-dark-background w-full h-full p-2">
//           <Component {...pageProps} inputRef={inputRef} />
//         </main>
//       </div>
//     </>
//   );
// };

// export default App;

  export const metadata = {
  title: "Your Page Title",
};

function MyApp({ Component, pageProps }) {
 

  const inputRef = React.useRef<HTMLInputElement>(null);
  const onClickAnywhere = () => {

    inputRef.current?.focus();
  };
  // useEffect(() => {
  //     TagManager.initialize({ gtmId: 'G-ZEEQ8E811Q' });
  // }, []);
  return (
    <>   
      <Head>
      
        
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="viewport"
          maximum-scale="1"
        />
          <title>Index page title</title>
          
      </Head>
      <GoogleTagManager gtmId="GTM-WJPTCR3F" />
      <div
        className="text-light-foreground dark:text-dark-foreground min-w-max text-xs md:min-w-full md:text-base h-full"
        onClick={onClickAnywhere}
      >
        <main className="bg-light-background dark:bg-dark-background w-full h-full p-2 overflow-auto">
          <Component {...pageProps} inputRef={inputRef} />
        </main>
      </div>
    </>);
};
export default MyApp
