import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import Navbar from '@/Components/shared/NavBar/nav';
import Footer from '@/Components/shared/Footer';
import HeroSection from '@/Components/Hero/hero';
import Courses from '@/Components/shared/Courses';
import CoreValues from '@/Components/CoreValues';

export default function App() {
  const router = useRouter();

  return (
    <>
      <Navbar />
      <main className="pt-[4rem]">
        <HeroSection />
        <Courses />
        <CoreValues/>
      </main>
      <Footer />
    </>
  );
}
