import React from "react";
import { Link } from "react-router-dom";

const LatestPost = ({ title, img, slug }) => {
  return (
    <div>
      <div className=" rounded-2xl  ">
        <div className="">
          <img className=" rounded-t-2xl " src={img} alt={title} />
        </div>
        <div className="border rounded-b-2xl p-8 py-10 border-t-0 border-neutral-600">
          <h2 className="text-green-500/90 font-semibold uppercase text-[12px]">
            Easy
          </h2>
          <p className="py-2 hover:text-green-500/90 lg:text-xl md:text-base text-xl font-bold">
            <Link to={`/${slug}`}>{title}</Link>
          </p>
          <p className="uppercase text-[14px] text-neutral-500">Easy Peasy</p>
        </div>
      </div>
    </div>
  );
};

export default LatestPost;
