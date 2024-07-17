import Image from "next/image";
import { useState, useEffect } from "react";
import { marquees } from "@/Data/data";
import Marquee from "react-fast-marquee";

export default function Marq() {
  return (
    <>
      <Marquee
        direction='left'
        speed={80}
        delay={5}
        pauseOnHover={true}
        autoFill={true}
      >
        {marquees.map((marquee, i) => {
          return (
            <div
              key={(i + 1).toString()}
              className='image_wrapper w-[70px] h-[70px] px-[22.04px] py-[15.56px] ml-5 bg-black rounded-2xl justify-center items-center inline-flex overflow-hidden'
            >
              <img src={marquee.img} alt='' />
            </div>
          );
        })}
      </Marquee>
    </>
  );
}
