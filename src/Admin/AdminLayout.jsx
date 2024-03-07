import React from "react";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import NavbarAdmin from "./NavbarAdmin";

const AdminLayout = () => {
  return (
    <>
      <NavbarAdmin />

      <Outlet />
    </>
  );
};

export default AdminLayout;
