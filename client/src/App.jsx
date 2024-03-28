import React from "react";
import { Route, Routes, useParams } from "react-router-dom";
import Home from "./Pages/Home";
import Layout from "./Pages/Layout";
import AdminLayout from "./Admin/AdminLayout";
import Dashboard from "./Admin/Dashboard";
import CreatePost from "./Admin/CreatePost";
import Posts from "./Admin/Posts";
import SinglePage from "./Pages/SinglePage";
import Pages from "./Pages/Pages";

const App = () => {
 

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path=":postSlug" element={<SinglePage />} />
        <Route path="/pages/:pagesSlug" element={<Pages />} />
      </Route>
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="new-post" element={<CreatePost />} />
        <Route path="posts" element={<Posts />} />
      </Route>
    </Routes>
  );
};

export default App;
