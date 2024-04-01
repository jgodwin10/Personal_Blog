import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import { useNavigate } from "react-router-dom";


import { nanoid } from "@reduxjs/toolkit";
import { FaTimes } from "react-icons/fa";

const CreatePost = () => {
  const [body, setBody] = useState("");
  const [title, setTitle] = useState("");
  const [file, setFile] = useState("");
  const [img, setImg] = useState("");
  const [description, setDescription] = useState("");
  const [keywords, setKeywords] = useState("");
  const [slug, setSlug] = useState("");
  const [progress, setProgress] = useState("");
  const [other, setOther] = useState(false);
  const [category, setCategory] = useState("");

  const navigate = useNavigate();

  const [addPost] = useAddPostMutation();
  const [addPage] = useAddPageMutation();

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

  useEffect(() => {
    const uploadFile = () => {
      const storageRef = ref(storage, file.name);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          setProgress(progress);
          switch (snapshot.state) {
            case "paused":
              console.log("upload is paused");
              break;
            case "running":
              console.log("upload is running");
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setImg(() => downloadURL);
          });
        }
      );
    };
    file && uploadFile();
  }, [file]);

  const handleSubmit = () => {
    if (!title || !body) return;

    setOther(!other);
  };

  const handlePublish = async (e) => {
    e.preventDefault();

    if (!title || !body || !description || !keywords || !slug) return;

    if (category == "Post") {
      await addPost({
        title,
        body,
        img,
        id: nanoid(),
        keywords,
        description,
        slug,
      });
    } else if (category == "Page") {
      await addPage({
        title,
        body,
        id: nanoid(),
        keywords,
        description,
        slug,
      });
    }
    setTitle("");
    setBody("");
    setFile("");
    setImg("");
    setKeywords("");
    setDescription("");
    setSlug("");
    setCategory("");
    navigate("/");
  };

  return (
    <>
      <div
        className={`text-black px-6 h-[150vh] ${
          other ? "translate-x-[0]" : "-translate-x-[110vw]"
        } transition duration-500 fixed md:w-[100%] z-[999] py-6 md:py-36 w-[100%] mx-auto bg-gray-600/30`}
      >
        <div className="w-[100%] px-6 md:px-0 md:w-[60%] mb-20 bg-white mx-auto z-[9999] relative shadow-2xl rounded-xl h-auto md:h-[80vh] ">
          <FaTimes
            onClick={handleSubmit}
            className="absolute cursor-pointer top-10 right-10 size-10"
          />
          <div className="lg:w-[55%] md:w-[80%] py-20 mx-auto">
            <label className="flex pb-6 flex-col" htmlFor="category">
              <span className="text-xl pb-2">Destription:</span>
              <select
                className="outline-none py-3 px-4 rounded-lg border-2 bg-transparent cursor-pointer"
                name="category"
                id=""
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
              >
                <option value="">Select Type</option>
                <option>Page</option>
                <option>Post</option>
              </select>
            </label>
            <label className="flex pb-6 flex-col" htmlFor="description">
              <span className="text-xl pb-2">Destription:</span>
              <textarea
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                className="border-2 md:py-15 rounded-lg outline-none"
                name="description"
                id=""
              ></textarea>
            </label>
            <label className="flex pb-6 flex-col" htmlFor="keywords">
              <span className="text-xl pb-2">Keywords:</span>
              <input
                value={keywords}
                onChange={(e) => {
                  setKeywords(e.target.value);
                }}
                className="outline-none py-3 px-4 rounded-lg border-2"
                type="text"
                name="keywords"
                id=""
              />
            </label>
            <label className="flex flex-col" htmlFor="keywords">
              <span className="text-xl pb-2">Slug:</span>
              <input
                value={slug}
                onChange={(e) => {
                  setSlug(e.target.value);
                }}
                className="outline-none py-3 px-4 rounded-lg border-2"
                type="text"
                name="keywords"
                id=""
              />
            </label>
            <button
              onClick={handlePublish}
              className="bg-green-600 w-[100%] mt-4 rounded-xl hover:bg-green-600/90 text-white transition duration-500 py-3"
            >
              Publish Post
            </button>
          </div>
        </div>
      </div>

      <div className="text-3xl flex pb-20 overflow-hidden  w-[100%] text-black mt-20">
        <Sidebar />
        <div className="flex flex-col px-4 md:px-8 w-[100%] lg:w-[50vw] md:w-[70%] mx-auto justify-around">
          <form action="" className="mt-14 mb-32 h-[600px]">
            <label className="w-[100%] flex" htmlFor="title">
              Title:
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="border-2 mb-6 border-neutral-600 w-[80%] outline-none rounded-md px-3 ml-3"
                type="text"
              />
            </label>
            <label htmlFor="file">
              <input
                className="border-2 mb-6 border-neutral-600 w-[80%] outline-none rounded-md ml-3"
                onChange={(e) => setFile(e.target.files[0])}
                type="file"
                name="file"
                id="image"
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
            className="bg-green-600 hover:bg-green-600/90 rounded-xl text-white transition duration-500 py-3"
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default CreatePost;
