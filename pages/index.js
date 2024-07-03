import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import Navbar from '@/Components/shared/NavBar/nav';
import Footer from '@/Components/shared/Footer';

export default function App() {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      window.gtag('config', 'G-VEEDH9QSJ2', {
        page_path: url,
      });
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Navbar />
      <main className="pt-[4rem]">
        <div className="flex flex-col px-3 pt-8 md:p-12 md:ml-[20em] h-full text-center gap-3 justify-start items-center">
          <span className="text-[25px] md:text-[35px] text-white font-bold">
            Pratice Past and Possible Examination Questions
          </span>
        </div>
      </main>
      <Footer />
    </>
  );
}
