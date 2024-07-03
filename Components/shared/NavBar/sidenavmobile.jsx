import React, { useCallback, useEffect, useContext } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Link from "next/link";
import { navdata } from "@/Data/data";
import myContext from "@/context/myContext";
import LogoutIcon from "@mui/icons-material/Logout";
import CloseIcon from '@mui/icons-material/Close';

const SideNavMobile = ({ setShowmenu, setSideNav }) => {
  const context = useContext(myContext);
  const { show, user, isLoading, fetchUser, logout } = context;
  let navigate = useRouter();
  const { pathname } = useRouter();

  useEffect(() => {
    fetchUser();
  }, []);

  const hideMenu = useCallback(() => {
    setShowmenu(false);
  }, []);

  return (
    <div className="w-full h-[639px]  z-[9999] top-[6.8vh] sm:top-[90px] p-5 right-0 absolute bg-black m-auto justify-center items-center">
      <motion.nav
        initial={{ x: 0 }}
        animate={{ x: [200, 0] }}
        className="lg:navbar mx-auto self-center justify-center items-center"
      >
        <div className="flex items-center justify-between">
          <button> </button>
          <button
            className="text-white text-[25px]"
            onClick={() => setSideNav(false)}
          >
            <CloseIcon />
          </button>
        </div>

        {isLoading || show ? (
          <div className="h-14">
            <button
              className="px-12 py-3 mb-[16em] text-white rounded-full bg-primary-A1 w-full"
              onClick={() => navigate(`/sign-in`)}
            >
              Sign in
            </button>
          </div>
        ) : (
          <Link
            href={`/profile/${user.uid}`}
            onClick={() => setSideNav(false)}
            className="flex gap-3 items-center"
          >
            <img
              src={user.imageUrl || "/assets/icons/profile-placeholder.svg"}
              alt="profile"
              className="h-14 w-14 rounded-full"
            />
            <div className="flex flex-col">
              <p className="flex items-center base-medium font-bold text-white">
                {/* {user.name} */}BrainBash
                {user?.verified === true && (
                  <>
                    <img
                      title="verified user"
                      className="w-3 h-3 ml-1"
                      src="/assets/images/M/checklist.png"
                    />
                  </>
                )}
              </p>
              <p className="text-[15px] text-binance_green">
                @brainbash-001{user.username}
              </p>
            </div>
          </Link>
        )}

        <ul
          onClick={() => setSideNav(false)}
          className="flex flex-col mt-5 gap-2"
        >
          {navdata.map((link) => {
            const isActive = pathname === link.route;

            return (
              <li
                key={link.label}
                className={`text-white rounded-md ${isActive && "bg-primary"}`}
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

        <button
          className="flex items-center text-white gap-4 p-4 mb-8 mt-12"
          onClick={logout}
        >
          <LogoutIcon />
          <p className="small-medium lg:base-medium">Logout</p>
        </button>
      </motion.nav>
    </div>
  );
};

export default SideNavMobile;
