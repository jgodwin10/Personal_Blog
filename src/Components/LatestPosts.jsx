import React from 'react'
import LatestPost from './LatestPost';

const LatestPosts = () => {
  return (
    <div className="text-white max-w-[1440px] py-20 md:px-8 mx-auto px-6">
      <h2>Latest Posts</h2>
      <div className="grid md:grid-cols-3 gap-10 md:gap-8">
       <LatestPost />
       <LatestPost />
       <LatestPost />
       <LatestPost />
      </div>
    </div>
  );
}

export default LatestPosts
