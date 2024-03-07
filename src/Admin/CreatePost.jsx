import React from "react";
import Sidebar from "./Sidebar";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useAddPostMutation } from "../App/PostSlice";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [body, setBody] = useState("");
  const [title, setTitle] = useState("");
  
  const  navigate = useNavigate();

  const [addPost] = useAddPostMutation();

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
  
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !body)
      return;
  
    await addPost({ title, body });
    setTitle('');
    setBody('');
    navigate('/');
  };

  return (
    <div className="text-3xl flex pb-20 h-[100vh] w-[100%] text-black mt-20">
      <Sidebar />
      <div className="flex flex-col px-8 w-[100%] lg:w-[50vw] md:w-[70%] mx-auto justify-around">
        <form action="" className="mt-14 h-[600px]">
          <label className="w-[100%] flex" htmlFor="title">
            Title:
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border-2 mb-6 border-neutral-600 w-[80%] outline-none rounded-md px-3 ml-3"
              type="text"
            />
          </label>
          <ReactQuill
            className="h-[80%] w-[100%] text-black"
            theme="snow"
            onChange={setBody}
            value={body}
            modules={modules}
            formats={formats}
          ></ReactQuill>
        </form>
        <button
          onClick={handleSubmit}
          className="bg-green-600 hover:bg-green-600/90 text-white transition duration-500 py-3"
        >
          Publish Post
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
