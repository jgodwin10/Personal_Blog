import React from "react";
import FeaturedPostsSmall from "./FeaturedPostsSmall";
import FeaturedPostsLarge from "./FeaturedPosts";

import { Link } from "react-router-dom";

// Define the Featured component
const Featured = () => {
  

  
  const content = mainData?.map((main) => {
    return (
      <div key={main.id} className="relative mb-6 min-h-[58vh] rounded-2xl">
        <img
          className="w-fit h-full rounded-2xl"
          src={main.img}
          alt={main.title}
        />
        <div className="absolute w-[85%] bottom-10 mx-4 bg-neutral-900 py-4 px-8 rounded-xl">
          <h2 className="uppercase text-green-500/90 text-[14px] font-semibold">
            Easy
          </h2>
          <p className="lg:text-2xl hover:text-green-500/90 py-3 font-bold">
            <Link to={`/${main.slug}`}>{main.title}</Link>
          </p>

          <h2 className="uppercase text-neutral-500 text-[13px]">Easy Peasy</h2>
        </div>
      </div>
    );
  });

  // Return the JSX for the Featured component
  return (
    <div className=" pb-4 pt-8 text-white max-w-[1440px] mx-auto md:px-8 px-4">
      <h2 className="text-[32px] text-neutral-300/90 font-bold py-8">
        Featured
      </h2>

      <div className="grid md:grid-cols-2">
        <div className="hidden md:block ">
          {/* {featuredata?.map((post) => {
            return <FeaturedPostsLarge key={post.id} {...post} />;
          })} */}
        </div>

        {/* {content} */}

        <div className="block md:hidden">
          {/* {featuredata?.map((post) => {
            return <FeaturedPostsSmall key={post.id} {...post} />;
          })} */}
        </div>
      </div>
    </div>
  );
};

// Export the Featured component for use in other parts of the application
export default Featured;
