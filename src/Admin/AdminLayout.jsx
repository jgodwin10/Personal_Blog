import React from "react";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import NavbarAdmin from "./NavbarAdmin";


const AdminLayout = () => {
  const [sidebar, setSidebar] = useState(false);

  const handleSide = () => {
    setSidebar(!sidebar)
  }

  return (
    <>
      <NavbarAdmin handleSide={handleSide} />
      
      <Outlet />
    </>
  );
};

export default AdminLayout;
