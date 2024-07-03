import React from "react";
import { useNavigate } from "react-router-dom";

const Bot = () => {
  const navigate = useNavigate();

  return (
    <a onClick={() => navigate(`/createpost`)}>
      <div className="fixed bg-primary-A1 bottom-[1.7em] sm:right-8 right-4 z-[999] cursor-pointer text-white text-4xl w-[50px] h-[50px] flex font-bold items-center justify-center rounded-full animate-bounce">
        <div className="flex">
        <ion-icon name="add-outline"></ion-icon>
        </div>
      </div>
    </a>
  );
};

export default Bot;
