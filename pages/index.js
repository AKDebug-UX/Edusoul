import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import Navbar from '@/Components/shared/NavBar/nav';
import Footer from '@/Components/shared/Footer';
import HeroSection from '@/Components/Hero/hero';

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
        <HeroSection />
      </main>
      <Footer />
    </>
  );
}
