import React from "react";
import Image from "next/image";

function Aboutus() {
  return (

    <>
      {/* <!-- ===== CoreValues Start ===== --> */}
      <section className="mx-auto">

        <div className="border-black border-2 h-max">
        <div className="">
          <div className="w-[95%] h-[30rem] -z-20 top-12 bottom-0 sm-mt-52">
            <Image
              alt="logo"
              fill
              className="object-contain"
              quality={100}
              src="/assets/icons/AboutUsPictures.svg"
            />
          </div>
        </div>
        </div>

        <div className="border-black border-2 h-max bg-[#90050F] lg:p-20 sm:p-5">

          <iframe 
            src="https://www.youtube.com/embed/viHILXVY_eU?si=mQqGAGXU1NhUBfQf" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" 
            allowfullscreen
            className="mx-auto lg:w-[915px] lg:h-[415px] rounded-2xl"
          />

        </div>

        <div className="h-max">

            <div className="p-9">
              <div className="lg:p-9 font-extrabold lg:text-5xl">
                <p>Empower your career</p>
              </div>
              
              <div className="lg:p-9 lg:text-2xl lg:leading-relaxed lg:w-[72%]">

                <p className="lg:mb-8">
                  This training and discipline will immensely contribute to the student's professional and career development as critical, competent servants-leaders; distinctive Christains Educators within global Christain School organisations, and an agents for moral and spiritual transformation in learners.
                </p>
                
                <p className="lg:mb-8">
                  The program will empower participants towards fufilling the high calling to impacts and raise G3s - Matt.5v16, Isaiah 58v12, John 17:3.
                </p>
                
                <p className="lg:mb-8">
                  Investment in this professional and career developement is investing in the 'soul purpose of our humanity' for generations. Matt. 13v45-46
                </p>

              </div>

            </div>

        </div>

      </section>
      {/* <!-- ===== CoreValues End ===== --> */}
    </>
    
  );
}

export default Aboutus;
