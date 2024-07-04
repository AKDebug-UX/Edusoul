import { useState, useEffect } from "react";

export default function Courses({ mobile }) {
  return (
    <>
      <section
        className="px-8 lg:px-14 py-7 mt-8 w-full lg:py-[90px] justify-center items-center"
        id="courses"
      >
        <div className="flex flex-col justify-start items-center gap-4">
          <div className="flex flex-col justify-start items-center gap-2">
            <div className="text-center text-slate-900 text-[56px] font-extrabold font-['Roboto'] leading-[61.60px]">
              Access transformational courses
            </div>
          </div>
          <div className="text-center text-slate-900 text-lg font-normal font-['Roboto'] leading-[28.80px]">
            Sed ut vestibulum eget purus ornare. Risus elit et fringilla
            habitant ut facilisi.
          </div>
          <button className="p-3 rounded-[10px] border-2 border-red-800 justify-center items-center flex">
            <div className="text-red-800 text-xl font-medium font-['Roboto'] leading-normal tracking-wide">
              View Our Courses
            </div>
          </button>
        </div>

        <div className="flex flex-col-reverse md:flex-row mt-16 justify-start items-center gap-12">
          <img
            className="w-[400px] h-[300px] rounded-lg"
            src="https://via.placeholder.com/600x374"
          />
          <div className="flex-col justify-start items-start gap-4 flex">
            <div className="flex-col justify-start items-start gap-3 flex">
              <div className="text-primary text-[15px] font-bold uppercase tracking-[3px]">
                No limits
              </div>
              <div className="text-black text-[36px] font-bold font-['Roboto']">
                What we plan to achieve with you
              </div>
            </div>
            <div className="text-slate-900 text-lg font-normal font-['Roboto']">
              EduSoul aims to provide a Christ-centered education program that
              raises distinctive educators. The goal is to equip 21st-century
              leaders with skills and methodologies for successful, life-long
              professionalism within the Christian education sector.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
