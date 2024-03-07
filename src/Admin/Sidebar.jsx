import React from "react";
import { FaHouseUser, FaThumbtack, FaEdit } from "react-icons/fa";
import { FaRightFromBracket } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Sidebar = ({ sidebar }) => {
  return (
    <>
      <ul
        className={`w-[200px] duration-[0.5] mt-20 ${
          sidebar ? "-translate-x-[20vw]" : ""
        } capitalize absolute top-0 left-0`}
      >
        <li className="text-xl cursor-pointer  pl-4 bg-white rounded-se-md flex items-center py-2 mb-1">
          <Link className="flex items-center" to="/admin">
            <FaHouseUser className="mr-3" />
            Dashboard
          </Link>
        </li>
        <li className="text-xl cursor-pointer pl-4 bg-white rounded-se-md flex items-center py-2 mb-1">
          <FaThumbtack className="mr-3" />
          Posts
        </li>
        <li className="text-xl cursor-pointer tra pl-4 bg-white rounded-se-md flex items-center py-2 mb-1">
          <Link className="flex items-center" to="/admin/new-post">
            <FaEdit className="mr-3" />
            Create Post
          </Link>
        </li>
        <li className="text-xl cursor-pointer pl-4 bg-white rounded-se-md flex items-center py-2 mb-1">
          <FaRightFromBracket className="mr-3" />
          logout
        </li>
      </ul>

      <ul
        className={`absolute top-0 transition duration-[0.5] mt-20 ${
          sidebar ? "" : "-translate-x-[10vw]"
        } `}
      >
        <li className="bg-white w-[50px] text-xl rounded-se-md pl-4 py-2 mb-1">
          <FaHouseUser />
        </li>
        <li className="bg-white w-[50px]  text-xl rounded-se-md pl-4 py-2 mb-1">
          <FaThumbtack />
        </li>
        <li className="bg-white w-[50px] text-xl rounded-se-md pl-4 py-2 mb-1">
          <FaEdit />
        </li>
        <li className="bg-white w-[50px] text-xl rounded-se-md pl-4 py-2 mb-1">
          <FaRightFromBracket />
        </li>
      </ul>
    </>
  );
};

export default Sidebar;
