import React from "react";
import LatestPost from "./LatestPost";


const LatestPosts = () => {
  const { data, isLoading, isError, error } = useFetchPostQuery();

  if (isLoading) {
    return (
      <>
        <p>Loading...</p>
      </>
    );
  }

  if (isError) {
    return (
      <>
        <p>{error}</p>
      </>
    );
  }

  return (
    <div className="text-white max-w-[1440px] pt-16 pb-20 md:px-8 mx-auto px-6">
      <h2 className="text-[32px] text-neutral-300/90 font-bold py-8">
        Latest Posts
      </h2>
      <div className="grid md:grid-cols-3 gap-10 md:gap-8">
        {data?.map((morepost) => {
          return <LatestPost key={morepost.id} {...morepost} />;
        })}
      </div>
    </div>
  );
};

export default LatestPosts;
