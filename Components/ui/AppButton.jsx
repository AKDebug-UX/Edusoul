import Link from "next/link";
import React from "react";

const AppButton = ({ href, title, style }) => {
  return (
    <Link
      href={href}
      style={style}
      className='  border-binance_green regular text-binance_green hover:bg-binance_green hover:text-white duration-300 h text-xs  text-center px-9 py-3 rounded-[50px]   border'
    >
      {title}
    </Link>
  );
};

export default AppButton

export const AppButton2 = ({ href, title, style }) => {
  return (
    <Link
      href={href}
      style={style}
      className='  border-binance_green regular text-binance_white bg-binance_green hover:bg-white hover:text-binance_green duration-300 h text-xs  text-center px-9 py-3 rounded-[50px]   border'
    >
      {title}
    </Link>
  );
};
