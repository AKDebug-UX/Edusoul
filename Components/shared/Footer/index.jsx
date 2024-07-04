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
        className="w-full md:h-72 px-5 md:px-12 bg-gray flex-col justify-center items-start border-t inline-flex"
        id="footer"
      >
        <div className="flex flex-col md:flex-row md:w-full py-3 border-b border-slate-200 justify-between items-start md:items-center gap-3">
          <div className="w-[24vh] h-[16vh] bg-white justify-center items-center flex">
            <Image
              loader={imageLoader}
              alt="logo"
              width={200}
              height={60}
              quality={100}
              className=""
              src="/assets/images/edusoul.svg"
            />
          </div>
          
          <div className="flex flex-col md:flex-row w-auto gap-4 justify-center items-start md:items-center">
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

        <div className="flex flex-col-reverse md:flex-row w-full py-3 justify-between items-start md:items-center gap-4 md:gap-12">
          <div className="w-full text-slate-900 text-base font-normal font-['Roboto'] leading-snug">
            @ 2024 Edusoul. All rights reserved.
          </div>

          <div className="flex w-full flex-row gap-12 justify-between items-center">
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
