import React from "react";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  const Year = new Date().getFullYear();

  return (
    <div className="mx-auto pb-8 max-w-[1440px] px-8">
      <div className="py-20 border-y border-neutral-700 mt-8 grid md:grid-cols-4 md:gap-20 md:gap-y-0 gap-y-16">
        <div className="text-center md:text-start">
          <h2 className="text-2xl text-white">
            <span className="font-bold text-green-500/90">Easy</span>Peasy
          </h2>
          <p className="text-neutral-500 py-8 md:text-[12.5px] lg:text-[14px] font-semibold">
            Nulla vehicula massa eget aliquet sagittis. Nulla ac nisi mi. Proin
            mollis tortor non elit aliquet convallis
          </p>
          <div className="text-neutral-500 mx-auto md:mx-0 min-w-[100px] max-w-[25%] flex justify-between">
            <FaFacebookF />
            <FaInstagram />
            <FaXTwitter />
          </div>
        </div>

        <div className=" col-span-2 text-center md:text-start grid grid-cols-2 h-[25vh] ">
          <ul className="flex flex-col  text-neutral-400 uppercase font-semibold text-[13px] ">
            <li className=" pb-3 ">
              <Link to="/">Home</Link>
            </li>
            <li className="pb-3 ">
              <Link to="/">News</Link>
            </li>
            <li className="pb-3 ">
              <Link to="/">Opinions</Link>
            </li>
            <li>
              <Link to="/">Contact</Link>
            </li>
          </ul>
          <ul className="flex flex-col  text-neutral-400 uppercase font-semibold text-[13px] ">
            <li className="pb-3  ">
              <Link to="/">Home</Link>
            </li>
            <li className="pb-3 ">
              <Link to="/">News</Link>
            </li>
            <li className="pb-3 ">
              <Link to="/">Opinions</Link>
            </li>
            <li>
              <Link to="/">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="text-neutral-400 font-semibold">
          &copy; {Year}{" "}
          <span>
            <span className="text-green-500/90 font-semibold">Easy</span>Peasy
          </span>
          , All Right Reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
