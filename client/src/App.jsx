import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Layout from "./Pages/Layout";
import AdminLayout from "./Admin/AdminLayout";
import Dashboard from "./Admin/Dashboard";
import CreatePost from "./Admin/CreatePost";
import Posts from "./Admin/Posts";
import SinglePage from "./Pages/SinglePage";
import Pages from "./Pages/Pages";
import Login from "./Admin/Login";
import Register from "./Admin/Register";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path=":postSlug" element={<SinglePage />} />
        <Route path="/pages/:pagesSlug" element={<Pages />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
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
