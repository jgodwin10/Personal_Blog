import React from 'react'
import { FaRegEdit, FaTrash } from "react-icons/fa";

const Post = () => {
  return (
    <div className="flex border mb-3 rounded-xl border-neutral-500">
      <img className="w-[40%] rounded-s-xl" src="../images/hero.jpg" alt="" />
      <div className="flex flex-col py-4 pl-10 justify-center">
        <h2 className="md:text-2xl text-neutral-700">title</h2>
        <p className="py-6 text-[12px] md:text-base">published on </p>
        <div>
          <button className="pr-4">
            <FaRegEdit className="text-red-500 text-xl" />
          </button>
          <button>
            <FaTrash className="text-xl text-red-500" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Post
