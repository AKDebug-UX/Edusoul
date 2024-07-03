import Lottie from "lottie-react";
import { useState, useEffect } from "react";
import greenLady from "@/public/assets/lottie/greenlady.json";

export default function About({ mobile }) {
  return (
    <>
      <section
        className='px-8 lg:px-14 py-7 w-full lg:py-[90px] bg-gradient-to-l from-[#BBD2B3] to-stone-100 overflow-hidden justify-center items-center'
        id='about'
      >
        <div className='flex flex-col md:flex-row pt-[5em] md:pt-5 gap-3 md:gap-28 justify-center items-center w-full'>
          <div>
            <div className='text-binance_green text-2xl md:text-5xl semiBold tracking-wide'>
              About Tricode
            </div>
            <div className='text-binance_ash text-xs lg:text-base text-center mt-3 lg:text-left leading-6 tracking-tight'>
              <span className='text-[16px] text-zinc-700 font-bold'>
                TRICODE{" "}
              </span>
              is a hybrid workstation for both software and hardware Product
              Research, Development and Management that enhances the user Remote
              working experiences with the implementation of healthy working
              habits and social ecosystem factors.
              <br />
              <br />
              <span className='text-[16px] text-zinc-700 font-bold'>
                A PaaS powerhouse:{" "}
              </span>
              Recruiting and nurturing top-tier tech talent, equipping them with
              cutting-edge tools and secure cloud environments.
              <br />
              <br />
              <span className='text-[16px] text-zinc-700 font-bold'>
                Your agile development arm:{" "}
              </span>
              Businesses, tap into our elite pool of developers, architects, and
              visionaries. We build custom solutions, APIs, and tools that fuel
              your digital ambitions.
              <br />
              <br />
              <span className='text-[16px] text-zinc-700 font-bold'>
                Collaboration reimagined:{" "}
              </span>
              Real-time communication, dedicated project managers, and robust
              infrastructure ensure seamless execution, regardless of location. 
              <br />
              <br />
              Tricode is more than just a platform; it's a catalyst. We rewrite
              the rules of digital collaboration.
              <br />
              <br />
              Our goal is to simply be the homepage for
              <span className='text-[16px] text-zinc-700 font-bold'>
                {" "}
                Agile Methodology{" "}
              </span>{" "}
              across Technology, Health and community development.
            </div>
          </div>
          <Lottie
            className='relative   w-[35vw] md:w-[60vw]'
            animationData={greenLady}
            loop={true}
          />{" "}
        </div>
      </section>
    </>
  );
}
