import React from "react";
import Card from "../components/Card";
import Carousal from "../components/Carousal";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <Carousal />
      </div>
      <div className="m-3">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
