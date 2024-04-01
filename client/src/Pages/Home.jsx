import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Featured from "../Components/Featured";
import Advert from "../Components/Advert";
import LatestPosts from "../Components/LatestPosts";
import ScrollToTop from "../Components/ScrollToTop";

const Home = () => {
  return (
    <>
      <ScrollToTop />
      <Hero />
      <Featured />
      <Advert />
      <LatestPosts />
    </>
  );
};

export default Home;
