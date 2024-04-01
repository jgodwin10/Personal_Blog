import React from "react";
import FeaturedPostsSmall from "../Components/FeaturedPostsSmall";
import LatestSinglePost from "../Components/LatestSinglePost";
import LatestPost from "../Components/LatestPost";

import { useParams } from "react-router-dom";
//mport { Helmet } from "react-helmet-async";
import ScrollToTop from "../Components/ScrollToTop";
import Comments from "../Components/Comments";

const SinglePage = () => {
  
  const { postSlug } = useParams();

  
  

  return (
    <>
      {/* <Helmet>
        <meta charSet="utf-8" />
        <title>{posts.title}</title>
        <link rel="canonical" href={`/${posts.title}`} />
        <meta name="description" content={`${posts?.description}`} />
        <meta property="og:title" content={`${posts?.title}`} />
        <meta name="keywords" content={`${posts?.keywords}`} />
      </Helmet> */}

      <ScrollToTop />
      
      <div className="max-w-[1440px] pt-[150px] md:pt-[250px] flex flex-col md:flex-row mx-auto px-3 md:px-8">
        {/* SIDE ONE */}
        <div className="md:w-[65%] w-[100%] px-4 ">
          {/* TITLE */}
          <div className="">
            <h2 className="text-white font-extrabold md:text-[38px] text-[30px] lg:text-[42px]">
              {/* {posts.title} */}
            </h2>
            <div className="flex text-neutral-500 pt-4 uppercase font-semibold text-[13px] ">
              <p className="pr-4">Created at</p>
              <p>
                BY <span className="text-neutral-400 pl-1">Easy Peasy</span>
              </p>
            </div>
          </div>
          {/* TITLE */}
          <div className="py-16">
            <img
              className="md:w-[92%] w-[100%] rounded-2xl "
              // src={posts.img}
              alt=""
            />
            <div className="text-neutral-300 pt-10">
              <p
                className="leading-[1.8] md:text-[17px]"
                dangerouslySetInnerHTML={{ __html: posts.body }}
              />
            </div>
          </div>
          <Comments />
        </div>
        {/* SIDEONE */}
        <div className="text-white md:w-[35%] w-[100%] pt-2 md:pt-56">
          <h2 className="py-10 font-semibold text-3xl text-neutral-300">
            Latest posts
          </h2>
          <div className="hidden md:block">
            {/* {postLatest.map((postLate) => {
              return <LatestSinglePost key={postLate.id} {...postLate} />;
            })} */}
          </div>
          <div className="md:hidden">
            {/* {postLatest.map((postLates) => {
              return <FeaturedPostsSmall key={postLates.id} {...postLates} />;
            })} */}
          </div>
        </div>
      </div>
      <div className="max-w-[1440px] mx-auto px-8">
        <h2 className="text-neutral-300 text-3xl py-16 font-bold ">
          You might also like...
        </h2>
        <div className="grid text-white md:grid-cols-3 pb-20 gap-10 md:gap-6">
          {/* {morePost.map((morepost) => {
            return <LatestPost key={morepost.id} {...morepost} />;
          })} */}
        </div>
      </div>
    </>
  );
};

export default SinglePage;
