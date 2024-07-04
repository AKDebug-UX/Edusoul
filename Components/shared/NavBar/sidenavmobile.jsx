import React, { useCallback, useEffect, useContext } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

import { navdata } from "@/Data/data";
import myContext from "@/context/myContext";
import LogoutIcon from "@mui/icons-material/Logout";
import CloseIcon from '@mui/icons-material/Close';

const SideNavMobile = ({ setSideNav }) => {
  const context = useContext(myContext);
  const { show, user, isLoading, fetchUser, logout } = context;
  let navigate = useRouter();
  const { pathname } = useRouter();

  useEffect(() => {
    fetchUser();
  }, []);


  return (
    <div className="w-full h-screen z-[9999] top-0 sm:top-[80px] p-3 right-0 absolute bg-black m-auto justify-center items-center">
      <motion.nav
        initial={{ x: 0 }}
        animate={{ x: [200, 0] }}
        className="lg:navbar mx-auto self-center justify-center items-center"
      >
        <div className="flex flex-row items-center justify-between">
          <button> 
            <Image
              // loader={imageLoader}
              alt="logo"
              width={80}
              height={40}
              quality={100}
              className=""
              src="/assets/images/edusoul.svg"
            /></button>
          <button
            className="text-white text-[25px]"
            onClick={() => setSideNav(false)}
          >
            <CloseIcon />
          </button>
        </div>

        <ul
          onClick={() => setSideNav(false)}
          className="flex flex-col mt-5 gap-2"
        >
          {navdata.map((link) => {
            const isActive = pathname === link.route;

            return (
              <li
                key={link.label}
                className={`text-white rounded-md ${isActive && "bg-primary w-[16em]"}`}
              >
                <Link
                  href={link.route}
                  className={`flex gap-4 items-center p-4 `}
                >
                  <div>{link.imgURL}</div>
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
        
        <button className="font-bold bg-primary text-white mt-8 hover:bg-gray-100 hover:text-primary py-3 text-center w-full md:w-[15em] rounded-md">
          Get Started
        </button>

        {/* <button
          className="flex items-center text-white gap-4 p-4 mb-8 mt-12"
          onClick={logout}
        >
          <LogoutIcon />
          <p className="small-medium lg:base-medium">Logout</p>
        </button> */}
      </motion.nav>
    </div>
  );
};

export default SideNavMobile;
