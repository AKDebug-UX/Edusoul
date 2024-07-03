import Image from "next/image";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import useFunctions from "@/hooks/useFunctions";
import Marq from "./techStack";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  const [screenWidth, setScreenWidth] = useState(0);
  const { ref, inView } = useInView({ threshold: 0.2 });
  const animation = useAnimation();
  const animation2 = useAnimation();
  useEffect(() => {
    console.log("inView", inView);

    if (inView) {
      animation.start({
        x: 0,
        transition: { type: "spring", duration: 1.5, bounce: 0.3 },
      });
      animation2.start({
        scale: 1,
        opacity: 1,
        transition: { type: "tween", duration: 2.5 },
      });
    } else {
      animation.start({
        x: `100vw`,
      });
      animation2.start({
        scale: 0,
        opacity: 0,
      });
    }
  }, [inView, animation, animation2]);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const { imageLoader } = useFunctions();
  const mobile = screenWidth < 798;

  return (
    <>
      <section
        className='h-[100vh]   flex items-center justify-center relative overflow-hidden'
        id='hero'
      >
        <div className='w-full h-full -z-20 absolute top-0 bottom-0'>
          <Image
            fill
            className='object-cover hidden lg:flex'
            src='/assets/images/bg.svg'
            alt='background'
          />
          <Image
            fill
            className='object-cover flex lg:hidden'
            src='/assets/images/mobilebackground.svg'
            alt='background'
          />
        </div>
        <div className='flex flex-col lg:flex-row w-[80vw] h-[70vh] lg:h-max   justify-between items-center'>
          <div className='flex flex-col  h-[35%] relative  items-center lg:items-start w-max'>
            <div
              style={inter.style}
              className='relative text-center mb-[3px] lg:mb-[10px] lg:text-start'
            >
              <span
                style={inter.style}
                className='text-white text-2xl sm:text-[53px] font-extrabold  leading-[71px]'
              >
                Build{" "}
              </span>
              <span
                style={inter.style}
                className='text-white text-2xl sm:text-[53px] font-normal  leading-[71px]'
              >
                with
              </span>
              <span className='text-white text-2xl sm:text-[53px] font-extrabold  leading-[71px]'>
                {" "}
              </span>
              <span
                style={inter.style}
                className='text-white text-2xl sm:text-[53px] font-extrabold  leading-[71px]'
              >
                Tricode
              </span>
            </div>
            <p
              style={inter.style}
              className='font-normal text-white text-sm lg:text-lg tracking-[0] leading-[36px] whitespace-nowrap'
            >
              The Future of Remote Collaborative space.
            </p>
            <div
              className={`flex justify-around lg:justify-start w-full mt-[4vh] self-center  absolute lg:relative bottom-0`}
            >
              <Link
                href={"/auth/register"}
                className=' semiBold lg:w-[38%] flex justify-center w-[40%] mr-[22px] text-sm lg:text-base lg:Bold hover:bg-opacity-70 hover:scale-110 transition ease-linear duration-150 shadow-sm shadow-black  py-[1.5vh] rounded-lg bg-binance_green text-white'
              >
                <button>Hire</button>
              </Link>
              <Link
                href={"/auth/register"}
                className=' semiBold lg:w-[38%] flex justify-center w-[40%] text-sm lg:text-base lg:Bold hover:bg-opacity-70 hover:scale-110 transition ease-linear duration-150 shadow-s shadow-binance_green  py-[1.5vh] rounded-lg bg-black text-white'
              >
                <button>Join</button>
              </Link>
            </div>
          </div>
          <div className='w-full lg:w-[472px] relative h-[50%] lg:h-[409px]'>
            <Image
              fill
              className=''
              src='/assets/lottie/amico.png'
              alt='hand'
            />
          </div>
        </div>
        <div className='absolute bottom-5 mx-3 w-full overflow-hidden'>
          <Marq />
        </div>
      </section>
    </>
  );
};

export default Home;
