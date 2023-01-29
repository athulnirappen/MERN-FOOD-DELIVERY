import React from "react";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
          <div>
              <Card/>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
