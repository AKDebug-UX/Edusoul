import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { sidebarLinks } from "@/constants";
import myContext from "@/context/myContext";
import LogoutIcon from '@mui/icons-material/Logout';

const LeftSidebar = () => {
  const navigate = useRouter();
  const { pathname } = useRouter();
  const context = useContext(myContext);
  const { show, user, fetchUser, isLoading, logout } = context;

  useEffect(() => {
    fetchUser();
  }, []);
  // const { mutate: signOut } = useSignOutAccount();

  return (
    <nav className="hidden md:flex mt-[50px] px-6 py-10 flex-col justify-between sm:w-[16em] md:w-[20em] bg-black h-screen fixed overflow-y-auto">
      <div className="flex flex-col gap-6">
        {/* <Link href="/" className="flex gap-3 mb-3 items-center">
          <img src="/assets/icons/logo.png" alt="logo" className="" />
          <h1 className="text-[22px] text-white font-bold">SquaremaX</h1>
        </Link> */}

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

        <ul className="flex flex-col gap-4">
          {sidebarLinks.map((link) => {
            const isActive = pathname === link.route;

            return (
              <li
                key={link.label}
                className={`text-white rounded-md ${
                  isActive && "bg-primary"
                }`}
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
      </div>

      <button
        className="flex items-center text-white gap-4 p-4 mb-8 mt-12"
        onClick={logout}
      >
        <LogoutIcon />
        <p className="small-medium lg:base-medium">Logout</p>
      </button>
    </nav>
  );
};

export default LeftSidebar;
