import React from "react";
import Sidebar from "./Sidebar";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const CreatePost = ({ sidebar }) => {
  const [value, setValue] = useState("");
  console.log(value);
  const modules = {
      toolbar: [
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [
          { list: "ordered" },
          { list: "bullet" },
          { indent: "-1" },
          { indent: "+1" },
        ],
        ["link", "image"],
        ["clean"],
      ],
    },
    formats = [
      "header",
      "bold",
      "italic",
      "underline",
      "strike",
      "blockquote",
      "list",
      "bullet",
      "indent",
      "link",
      "image",
    ];

  return (
    <div className="text-3xl grid grid-cols-2 h-[100vh] py-20 w-[100%] bg-white text-black mt-20">
      <div className="w-[90vw]">
        <form action="" className="w-[50vw] mx-auto">
          <label htmlFor="title">
            Title:
            <input
              className="border-2 border-black outline-none rounded-md px-3 ml-3"
              type="text"
            />
          </label>
          <ReactQuill
            className="h-[500px] mt-10 w-[100%] text-black"
            theme="snow"
            onChange={setValue}
            value={value}
            modules={modules}
            formats={formats}
          ></ReactQuill>
        </form>
        <button>Publish Post</button>
      </div>
    </div>
  );
};

export default CreatePost;
