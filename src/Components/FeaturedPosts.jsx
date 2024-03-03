import React from "react";

const FeaturedPostsLarge = () => {
  return (
    <div className="flex mb-6 md:w-[85%]  border border-neutral-600 rounded-xl">
      <div className="w-[45%] rounded-xl bg-[url(/images/hero3.jpg)] bg-cover  rounded-e-none"></div>
      <div className="flex flex-col justify-center lg:py-8 py-4 px-5">
        <h2 className="text-green-500/90 font-semibold text-[12px] uppercase">
          Easy
        </h2>
        <p className="text-[15px] md:text-[13px] py-2 lg:text-[18px] font-semibold">
          Everyone Can Earn Passive Income with Yield
        </p>
        <p className="text-neutral-500 uppercase font-semibold text-[12px]">
          Easy Peasy
        </p>
      </div>
    </div>
  );
};

export default FeaturedPostsLarge;
