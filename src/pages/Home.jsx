import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Banner from "../components/Banner/Banner";
import RestaurantList from "../components/RestaurantList/RestaurantList";
import Contact from "../components/Contact/Contact";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <RestaurantList />
      <Contact />
    </>
  );
};

export default Home;
