import React from "react";
import Sidebar from "./Sidebar";
import Post from "./Post";

const Posts = () => {
  return (
    <div className="flex mt-20">
      <Sidebar />
      <div className="max-w-[900px] px-8 mx-auto">
        <h2 className="pt-8 text-2xl text-neutral-500">Manage Blog</h2>
        <div className="pt-10">
          {/* border */}
          <Post />
          {/* border */}
        </div>
      </div>
    </div>
  );
};

export default Posts;
