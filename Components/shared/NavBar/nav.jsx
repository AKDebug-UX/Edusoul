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
  const [showmenu, setShowmenu] = useState(false);
  const [sideNav, setSideNav] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { imageLoader } = useFunctions();

  const router = useRouter();
  const { pathname } = useRouter();
  const gray = router.pathname === "/about";

  const controls = useAnimation();
  const hideMenu = useCallback(() => {
    setShowmenu(false);
  }, []);

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

  return (
    <div
      className={`${
        isScrolled || sideNav ? "bg-white" : "bg-white"
      } fixed border-b w-full h-[60px] sm:h-[80px] px-3 md:px-6 lg:px-10 shadow-lg  z-50 flex flex-row justify-between items-center`}
    >
      <motion.nav
        initial={{ x: 0 }}
        animate={{ x: [200, 0] }}
        className="flex flex-row mx-auto gap-8 justify-start items-center w-full"
      >
        <div className="flex justify-center items-center">
          <Link href={"/"}>
            <Image
              loader={imageLoader}
              alt="logo"
              width={80}
              height={40}
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
              const isActive = pathname === link.route;

              return (
                <li
                  key={link.label}
                  className={` ${isActive ? "text-primary" : "text-black"}`}
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
        className="icon flex w-[40%] lg:w-[20%] justify-around  items-center"
      >
        <button className="font-bold bg-primary text-white hover:bg-gray-100 hover:text-primary py-3 text-center w-full lg:w-[15em] rounded-md">
          Get Started
        </button>
      </motion.div>

      <div
        onClick={() => setSideNav(!sideNav)}
        className="text-white flex lg:hidden"
      >
        {sideNav ? (
          <IoCloseSharp className="text-[3vh]" />
        ) : (
          <MdOutlineMenu className="text-[3vh]" />
        )}
      </div>
      {sideNav && <SideNavMobile setShowmenu={setShowmenu} />}
    </div>
  );
};

export default Navbar;