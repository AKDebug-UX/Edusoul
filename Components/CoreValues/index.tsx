"use client";

import React from "react";
import Image from "next/image";

const CoreValues = () => {

  return (
    <>
      {/* <!-- ===== CoreValues Start ===== --> */}
      <section className="mb-7 mx-auto">

        <div className="max-w-[1200px] mx-auto">

          <div className="max-w-[1200px] mx-auto lg:mx-auto sm:ml-5">
            <p className="font-bold lg:text-sm/[20px] mb-4">OUR STRENGTHS</p>
            <h2 className="font-extrabold lg:text-5xl mb-4">Core Values</h2>
            <p className="mb-4">Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et.Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et.</p>
          </div>

          <div className="max-w-[1200px] mx-auto py-5 text-white grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 lg:mx-auto sm:ml-5 gap-5">

            <div className="py-5 text-left">

              <div className="max-w-[1200px] mx-auto">

              <div className="mb-2">
                <Image
                  alt="trustlogo"
                  width={70}
                  height={60}
                  quality={100}
                  className=""
                  src="/assets/icons/trustsvg.svg"
                />
              </div>

              <h2 className="font-bold lg:text-3xl mb-2 text-black">Trust</h2>
              
              <p className="text-black">Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et.</p>
              </div>

            </div>
            
            <div className="py-5 text-left">

              <div className="max-w-[1200px] mx-auto">

              <div className="mb-2">
                <Image
                  alt="trustlogo"
                  width={70}
                  height={60}
                  quality={100}
                  className=""
                  src="/assets/icons/openness.svg"
                />
              </div>

              <h2 className="font-bold lg:text-3xl mb-2 text-black">Openness</h2>
              
              <p className="text-black">Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et.</p>
              </div>

            </div>
            
            <div className="py-5 text-left">

              <div className="max-w-[1200px] mx-auto">

              <div className="mb-2">
                <Image
                  alt="trustlogo"
                  width={70}
                  height={60}
                  quality={100}
                  className=""
                  src="/assets/icons/truthfulness.svg"
                />
              </div>

              <h2 className="font-bold lg:text-3xl mb-2 text-black">Truthfulness</h2>
              
              <p className="text-black">Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et.</p>
              </div>

            </div>

            <div className="py-5 text-left">

              <div className="max-w-[1200px] mx-auto">

              <div className="mb-2">
                <Image
                  alt="trustlogo"
                  width={70}
                  height={60}
                  quality={100}
                  className=""
                  src="/assets/icons/empowerment.svg"
                />
              </div>

              <h2 className="font-bold lg:text-3xl mb-2 text-black">Empowerment</h2>

              <p className="text-black">Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et.</p>
              </div>

            </div>

            <div className="py-5 text-left">

              <div className="max-w-[1200px] mx-auto">

              <div className="mb-2">
                <Image
                  alt="trustlogo"
                  width={70}
                  height={60}
                  quality={100}
                  className=""
                  src="/assets/icons/inclusion.svg"
                />
              </div>

              <h2 className="font-bold lg:text-3xl mb-2 text-black">Inclusion</h2>

              <p className="text-black">Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et.</p>
              </div>

            </div>

            <div className="py-5 text-left">

              <div className="max-w-[1200px] mx-auto">

              <div className="mb-2">
                <Image
                  alt="trustlogo"
                  width={70}
                  height={60}
                  quality={100}
                  className=""
                  src="/assets/icons/inclusion.svg"
                />
              </div>

              <h2 className="font-bold lg:text-3xl mb-2 text-black">Growth</h2>

              <p className="text-black">Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et.</p>
              </div>

            </div>

          </div>

          
        </div>

      </section>
      {/* <!-- ===== CoreValues End ===== --> */}
    </>
  );
};

export default CoreValues;
