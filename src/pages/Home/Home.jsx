import React from "react";
import Hero from "./Hero";
import About from "./About";
import BMI from "./BMI";
import Services from "./Services";
import Banner from "./Banner";
import Trainer from "./Trainer";
import Excerice from "./Excerice";
import Pricing from "./Pricing";
import Contact from "./Contact";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <div className="w-full h-auto overflow-hidden">
        <Hero/>
        <About/>
        <BMI/>
        {/* <Services/> */}
        <Banner/>
        <Trainer/>
        <Excerice/>
        {/* <Pricing/> */}
        {/* <Contact/> */}
        {/* <Footer/> */}
      </div>
    </>
  );
};

export default Home;
