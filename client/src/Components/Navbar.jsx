import React from "react";
import { Link } from "react-router-dom";
import { FaRegUser, FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";





const Navbar = () => {
  return (
    <div className="py-4 fixed z-[999] w-[100%] top-0  text-white bg-neutral-900">
      <div className="max-w-[1520px] mx-auto flex justify-between items-center px-4 ">
        <h1 className="text-2xl">
          <Link to="/">
            <span className="font-bold text-green-500/90">Easy</span>Peasy
          </Link>
        </h1>
        <ul className="lg:flex justify-start pl-4 w-[45%] text-neutral-400 uppercase font-semibold text-[15px] hidden ">
          <li className="pr-14 hover:text-green-500/90 transition duration-700">
            <Link to="/">Home</Link>
          </li>
          <li className="pr-14 hover:text-green-500/90 transition duration-500">
            <Link to="/">News</Link>
          </li>
          <li className="pr-14 hover:text-green-500/90 transition duration-500">
            <Link to="/">Opinions</Link>
          </li>
          <li className="hover:text-green-500/90 transition duration-500">
            <Link to="/">Contact</Link>
          </li>
        </ul>

        <div className="lg:flex justify-between hidden text-neutral-400 w-[10%]">
          <FaRegUser />
          <FaFacebookF />
          <FaInstagram />
          <FaXTwitter />
        </div>

        <div>
          <input
            className="bg-neutral-700 w-32 md:w-auto outline-none px-2 rounded-md"
            type="search"
            name=""
            id=""
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
