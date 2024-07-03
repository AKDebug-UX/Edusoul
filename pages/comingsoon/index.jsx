"use client";
import React from "react";
import Link from "next/link";

const ComingSoon = () => {
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="flex flex-col w-full m-auto text-center font-bold text-[30px] text-white">
        COMING SOON
      <Link href={"/"}>
        <button className="bg-binance_green px-3 text-white w-[140px] hover:text-[white] hover:bg-binance_ash">
          Go Back
        </button>
      </Link>
      </div>
    </div>
  );
};

export default ComingSoon;
