import React from 'react';
import '../styles/global.css';
import Head from 'next/head';
import { useEffect } from 'react';

declare global {
  interface Window {
    dataLayer: any[];
  }
} 

const App = ({ Component, pageProps }) => {
 
  const inputRef = React.useRef<HTMLInputElement>(null);

  const onClickAnywhere = () => {
    inputRef.current.focus();
  };
  useEffect(() => {
    if (!(window as any).dataLayer) {
      (window as any).dataLayer = [];
    }
    function gtag(...args: any[]) {
      (window as any).dataLayer.push(...args);
    }
    gtag('js', new Date());
    gtag('config', 'G-DTQ0H7HF7T');
  }, []);

  return (
    <>   
      <Head>
        <!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-DTQ0H7HF7T"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-DTQ0H7HF7T');
</script>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="viewport"
          maximum-scale="1"
        />
      </Head>

      <div
        className="text-light-foreground dark:text-dark-foreground min-w-max text-xs md:min-w-full md:text-base"
        onClick={onClickAnywhere}
      >
        <main className="bg-light-background dark:bg-dark-background w-full h-full p-2">
          <Component {...pageProps} inputRef={inputRef} />
        </main>
      </div>
    </>
  );
};

export default App;
