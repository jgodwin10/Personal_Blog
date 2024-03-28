import React from "react";
import { FaStream } from "react-icons/fa";

const NavbarAdmin = () => {
  return (
    <div className="bg-neutral-900 z-[999] text-white fixed top-0 w-[100%] ">
      <div className="max-w-[1650px] py-2 px-8 mx-auto flex items-center">
        <FaStream className="size-9 mr-16 cursor-pointer " />
        <div className="flex justify-between items-center w-[100%]">
          <h2 className="text-2xl">
            <span className="text-green-500/90 font-semibold">Easy</span>Peasy
          </h2>
          <div className="flex cursor-pointer">
            <img
              className="w-[45px] mr-4 rounded-full"
              src="../images/hero3.jpg"
              alt=""
            />
            <div className="text-[14px] md:text-base">
              <p className="capitalize">jacob</p>
              <p>author</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarAdmin;
