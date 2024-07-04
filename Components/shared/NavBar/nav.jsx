import React, { useCallback, useEffect, useState } from "react";
import { MdOutlineMenu } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";

import { navdata } from "@/Data/data";
import useFunctions from "@/hooks/useFunctions";
import SideNavMobile from "./sidenavmobile";
import { useRouter } from "next/router";

const Navbar = ({ children }) => {
  const [sideNav, setSideNav] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [sticky, setSticky] = useState(false);
  const { imageLoader } = useFunctions();

  const router = useRouter();
  const { pathname } = useRouter();
  const gray = router.pathname === "/about";

  const controls = useAnimation();

  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY;
    if (scrollTop > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const nav = document.querySelector("nav");
      window.scrollY > 0 ? setSticky(true) : setSticky(false);
    });
  }, []);


  return (
    <nav
      className={`${
        isScrolled || sideNav ? "bg-white" : "bg-white"
      } fixed border-b w-full h-[60px] sm:h-[80px] px-3 md:px-8 lg:px-12 shadow-lg  z-50 flex flex-row justify-between items-center`}
    >
      <motion.nav
        initial={{ x: 0 }}
        animate={{ x: [200, 0] }}
        className="flex flex-row mx-auto gap-8 justify-start items-center w-full"
      >
        <div className="flex w-[24vh] h-[16vh] justify-start items-center">
          <Link href={"/"}>
            <Image
              loader={imageLoader}
              alt="logo"
              width={140}
              height={60}
              quality={100}
              className=""
              src="/assets/images/edusoul.svg"
            />
          </Link>
        </div>

        <div className="md:flex flex-row gap-4 hidden justify-center items-center">
          <ul
            onClick={() => setSideNav(false)}
            className="md:flex flex-row hidden gap-2"
          >
            {navdata.map((link) => {
              const sticky = pathname === link.route;

              return (
                <li
                  key={link.label}
                  className={` ${sticky ? "text-primary" : "text-black"}`}
                >
                  <Link
                    href={link.route}
                    className={`flex gap-4 items-center p-4 `}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </motion.nav>

      <motion.div
        initial={{ width: "30%" }}
        animate={{ width: "17%" }}
        // transition={{ type: "spring", stiffness: 500, duration: 0.1 }}
        transition={{ duration: 0.2 }}
        className="md:flex w-[15em] md:w-[20%] justify-end hidden items-center"
      >
        <button className="font-bold bg-primary text-white hover:bg-gray-100 hover:text-primary py-3 text-center w-full md:w-[15em] rounded-md">
          Get Started
        </button>
      </motion.div>

      <button
        onClick={() => setSideNav(!sideNav)}
        className="text-primary text-[4vh] flex md:hidden"
      >
        {sideNav ? (
          <IoCloseSharp className="" />
        ) : (
          <MdOutlineMenu className="" />
        )}
      </button>
      {sideNav && <SideNavMobile setSideNav={setSideNav} />}
    </nav>
  );
};

export default Navbar;