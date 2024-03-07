import React from "react";
import { FaHouseUser, FaThumbtack, FaEdit } from "react-icons/fa";
import { FaRightFromBracket } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "../index.css"

const Sidebar = () => {
  
  return (
    <>
      <div className="hidden md:block text-white">
        <ul>
          <li className="bg-green-500/90 mb-1 rounded-se-md">
            <Link className="flex text-xl items-center pl-2 py-1" to="/admin">
              <FaHouseUser className="mr-3" />
              <p className="pr-3">Dashboard</p>
            </Link>
          </li>
          <li className="bg-green-500/90 mb-1">
            <Link className="flex text-xl items-center pl-2 py-1" to="/admin/posts">
              <FaThumbtack className="mr-3" />
              <p className="pr-3">Posts</p>
            </Link>
          </li>
          <li className="bg-green-500/90 mb-1">
            <Link className="flex text-xl items-center pl-2 py-1" to="/admin/new-post">
              <FaEdit className="mr-3" />
              <p className="pr-3">Add New Post</p>
            </Link>
          </li>
          <li className="bg-green-500/90 mb-1 rounded-ee-md">
            <Link className="flex text-xl items-center pl-2 py-1" to="/admin">
              <FaRightFromBracket className="mr-3" />
              <p className="pr-3">Log Out</p>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
