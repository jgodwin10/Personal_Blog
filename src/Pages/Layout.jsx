import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const Layout = () => {
  return (
    <div className='bg-neutral-900'>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
