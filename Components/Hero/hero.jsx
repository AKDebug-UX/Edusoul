import React from "react";
import Image from "next/image";
import WbTwilightIcon from "@mui/icons-material/WbTwilight";
import EastIcon from "@mui/icons-material/East";

function HeroSection() {
  return (
    <div className="">
      <div className="w-[95%] h-[30rem] -z-20 top-12 bottom-0">
        <Image
          alt="logo"
          fill
          className="object-cover  rounded-md"
          quality={100}
          src="/assets/images/hero/home-1.png"
        />
      </div>
      <section className="flex absolute top-[8rem] bottom-0 py-[5em] md:py-[4em] mx-5 md:mx-12 lg:flex-row flex-col items-start justify-center">
        <div className="flex flex-col justify-start items-start gap-4">
          <div className="justify-start items-start gap-2.5 inline-flex">
            <div className="text-white text-2xl font-medium font-['Roboto']">
              Distinct Christian Education{" "}
            </div>
          </div>
          <div className="justify-start items-start gap-2.5 inline-flex">
            <div className="text-amber-400 text-5xl font-extrabold font-['Roboto']">
              EDUSOUL INSTITUTE
            </div>
          </div>
          <div className="flex flex-col gap-3 md:w-[50vw]">
            <span className="text-white text-xl font-normal font-['Roboto'] leading-7">
              An Education programme with perspective and relevance in raising
              distinctive educators within Christ-centred education.
            </span>
            <span className="text-amber-400 text-xl font-normal font-['Roboto'] leading-7">
              {"(Col.2v3. Isa.58v12)"}
            </span>
          </div>
        </div>

        <div className="flex flex-col mt-3 justify-start items-start gap-8">
          <div className="flex flex-col md:flex-row justify-start items-start gap-3">
            <button className="w-48 px-7 py-4 bg-white text-primary hover:bg-primary hover:text-white rounded shadow justify-center items-center font-bold gap-3 flex">
              <WbTwilightIcon />
              <div className="">Learn More</div>
            </button>

            <button className="w-48 px-7 py-4 hover:bg-white hover:text-primary bg-primary text-white rounded shadow justify-center items-center font-bold gap-3 flex">
              <div className="">Get Started</div>
              <EastIcon />
            </button>
          </div>

          <div className="justify-start items-center gap-2 inline-flex">
            <div className="pl-px pt-px bg-neutral-950 rounded-xl border border-white justify-end items-center flex">
              <div className="w-5 h-5 px-0.5 pt-0.5 pb-px justify-center items-center inline-flex" />
            </div>
            <div className="w-3 h-3 relative bg-neutral-100 rounded-xl border border-black" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default HeroSection;
