import React from "react";
import FeaturedPostsSmall from "./FeaturedPostsSmall";
import FeaturedPostsLarge from "./FeaturedPosts";
import { useFetchPostQuery } from "../App/PostSlice";



// Define the Featured component
const Featured = () => {
  // Return the JSX for the Featured component
  return (
    <div className=" py-12 pt-8 text-white max-w-[1440px] mx-auto md:px-8 px-4">
      <h2 className="text-[32px] text-neutral-300/90 font-bold py-8">
        Featured
      </h2>

      <div className="grid md:grid-cols-2">
        <div className="hidden md:block ">
          <FeaturedPostsLarge />
          <FeaturedPostsLarge />
          <FeaturedPostsLarge />
        </div>

        <div className="relative mb-6 min-h-[58vh] px-8 bg-[url(/images/hero3.jpg)] bg-cover rounded-2xl">
          <div className="absolute w-[85%] bottom-10  bg-black py-4 px-8 rounded-xl">
            <h2 className="uppercase text-green-500/90 text-[14px] font-semibold">
              Easy
            </h2>
            <p className="lg:text-2xl py-3 font-bold">
              TechCrunch Founder to Sell His Kyiv Flat – as an NFT
            </p>
            <h2 className="uppercase text-neutral-500 text-[13px]">
              Easy Peasy
            </h2>
          </div>
        </div>

        <div className="block md:hidden">
          <FeaturedPostsSmall />
          <FeaturedPostsSmall />
          <FeaturedPostsSmall />
        </div>
      </div>
    </div>
  );
};

// Export the Featured component for use in other parts of the application
export default Featured;
