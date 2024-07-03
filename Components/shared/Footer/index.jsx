import { useState, useEffect } from "react";
import Image from "next/image";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import useFunctions from "@/hooks/useFunctions";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });
export default function Footer({ mobile }) {
  const { imageLoader } = useFunctions();
  return (
    <>
      <section
        className="w-full h-72 px-20 bg-gray flex-col justify-center items-start border-t inline-flex"
        id="footer"
      >
        <div className="self-stretch py-3 border-b border-slate-200 justify-between items-center gap-3 inline-flex">
          <div className="w-24 h-16 bg-white justify-center items-center flex">
            <Image
              loader={imageLoader}
              alt="logo"
              width={80}
              height={40}
              quality={100}
              className=""
              src="/assets/images/edusoul.svg"
            />
          </div>
          <div className="flex w-auto flex-row gap-4 justify-center items-center">
            <div className="h-11 py-3 justify-start items-center gap-2 flex">
              <div className="text-slate-900 text-base font-normal font-['Roboto'] leading-snug">
                Our Courses
              </div>
            </div>
            <div className="h-11 py-3 justify-start items-center gap-2 flex">
              <div className="text-slate-900 text-base font-normal font-['Roboto'] leading-snug">
                About
              </div>
            </div>
            <div className="h-11 py-3 justify-start items-center gap-2 flex">
              <div className="text-slate-900 text-base font-normal font-['Roboto'] leading-snug">
                Our Mandate
              </div>
            </div>
            <div className="h-11 py-3 justify-start items-center gap-2 flex">
              <div className="text-slate-900 text-base font-normal font-['Roboto'] leading-snug">
                Modules
              </div>
            </div>
            <div className="h-11 py-3 justify-start items-center gap-2 flex">
              <div className="text-slate-900 text-base font-normal font-['Roboto'] leading-snug">
                FAQ
              </div>
            </div>
          </div>
        </div>

        <div className="self-stretch py-3 justify-between items-center gap-12 inline-flex">
          <div className="grow shrink basis-0 text-slate-900 text-base font-normal font-['Roboto'] leading-snug">
            @ 2024 Edusoul. All rights reserved.
          </div>
          <div className="flex w-auto flex-row gap-4 justify-center items-center">
            <div className="py-3 justify-start items-center gap-2 flex">
              <div className="text-slate-600 text-base font-normal font-['Roboto'] leading-snug">
                Terms
              </div>
            </div>
            <div className="py-3 justify-start items-center gap-2 flex">
              <div className="text-slate-600 text-base font-normal font-['Roboto'] leading-snug">
                Privacy
              </div>
            </div>
            <div className="py-3 justify-start items-center gap-2 flex">
              <div className="text-slate-600 text-base font-normal font-['Roboto'] leading-snug">
                Contact
              </div>
            </div>
          </div>
          
          <div className="justify-end items-center gap-4 flex">
            <LinkedInIcon />
            <TwitterIcon />
            <InstagramIcon />
            <div className="w-6 h-6 relative" />
            <div className="w-6 h-6 px-0.5 py-0.5 justify-center items-center flex" />
          </div>
        </div>
      </section>
    </>
  );
}
