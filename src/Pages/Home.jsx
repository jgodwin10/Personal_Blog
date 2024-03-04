import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Featured from '../Components/Featured'
import Advert from '../Components/Advert'
import LatestPosts from '../Components/LatestPosts'




const Home = () => {
  return (
    <>
      <Hero />
      <Featured />
      <Advert />
      <LatestPosts />
    </>
  )
}

export default Home
