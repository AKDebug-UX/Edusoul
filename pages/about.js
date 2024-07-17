import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import Navbar from '@/Components/shared/NavBar/nav';
import Footer from '@/Components/shared/Footer';
import Aboutus from '@/Components/AboutUs/about-us';

export default function App() {
  const router = useRouter();

  return (
    <>
      {/* <!-- ===== About us page Start ===== --> */}
      <Navbar />
      <main className="pt-[4rem]">
        <Aboutus />
      </main>
      <Footer />
      {/* <!-- ===== About us page End ===== --> */}
    </>
  );
}
