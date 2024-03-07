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
    await addPost({ title, body });
    setTitle('');
    setBody('');
    navigate('/');
  };

  return (
    <div className="text-3xl flex h-[100vh] w-[100%] bg-white text-black mt-20">
      <Sidebar />
      <div className="mx-auto flex flex-col">
        <form action="" className="w-[50vw] mt-14 h-[600px] mx-auto">
          <label htmlFor="title">
            Title:
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border-2 mb-6 border-neutral-600 outline-none rounded-md px-3 ml-3"
              type="text"
            />
          </label>
          <ReactQuill
            className="h-[80%] text-black"
            theme="snow"
            onChange={setBody}
            value={body}
            modules={modules}
            formats={formats}
          ></ReactQuill>
        </form>
        <button
          onClick={handleSubmit}
          className="bg-blue-500 hover:bg-blue-500/80 transition duration-500 py-3 mt-4"
        >
          Publish Post
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
