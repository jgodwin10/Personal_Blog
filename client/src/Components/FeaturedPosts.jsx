import React from "react";
import { Link } from "react-router-dom";

const FeaturedPostsLarge = ({ img, title, slug }) => {
  console.log(img);
  return (
    <div className="flex mb-6 md:w-[85%]  border border-neutral-600 rounded-xl">
      <div className={`w-[40%] rounded-xl rounded-e-none`}>
        <img className="w-[100%] h-full rounded-s-xl" src={img} alt={title} />
      </div>
      <div className="flex flex-col justify-center lg:py-8 py-4 px-5 ">
        <h2 className="text-green-500/90 font-semibold text-[12px] uppercase">
          Easy
        </h2>
        <p className="text-[15px] hover:text-green-500/90 md:text-[13px] py-2 lg:text-[18px] font-semibold">
          <Link to={`/${slug}`}>{title}</Link>
        </p>
        <p className="text-neutral-500 uppercase font-semibold text-[12px]">
          Easy Peasy
        </p>
      </div>
    </div>
  );
};

export default FeaturedPostsLarge;
