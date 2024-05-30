import { Dumbbell } from "lucide-react";
import React from "react";
import SecondaryBtn from "../../components/Button/SecondaryBtn";
const About = () => {
  return (
    <>
      <div
        className="w-full h-auto flex items-center justify-between gap-2 lg:py-16
         md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4 flex-wrap-reverse"
      >
        <div className="lg:w-[38%] md:w-full sm:w-full w-full h-auto relative overflow-hidden rounded-lg">
          <img
            src="https://images.pexels.com/photos/841128/pexels-photo-841128.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="About"
            className="w-full lg:h-[70vh] md:h-[68vh] sm:h-[60vh] h-[55] object-cover"
          />
        </div>
        <div className="lg:w-[50%] md:w-full sm:w-full w-full h-auto lg:text-start md:text-start sm:text-start text-center">
          <h6
            className="text-lg font-medium text-gray-200 flex items-center lg:justify-start 
            md:justify-start sm:justify-center justify-center gap-x-2 mb-3"
          >
            <Dumbbell className="w-4 h-4 -rotate-45  text-orange-600" />
            About Us
          </h6>
          <h1
            className="lg: text-3xl md:text-3xl sm:text-2xl text-xl font-semibold
            text-gray-200 mb-4 leading-normal lg:pe-5 md: pe-4 sm:pe-1 pe-0"
          >
            Effortless Strength, Timely Gains: Building Better Bodies, Faster
          </h1>

          <p className="lg:text-base md:text-base sm:text-sm text-sm text-gray-500 font-medium mb-4">
            At FitFusionYouth, we are dedicated to empowering youth to lead
            healthier, more active lives. Our goal is to provide accessible,
            engaging, and educational resources that promote physical fitness,
            nutritious eating, and mental well-being.
          </p>
          {/* <SecondaryBtn 
          className="lg:w-auto md:w-auto sm:w-full w-full px-7 py-2 text-base font-medium uppercase justify-center">
          Become a Member</SecondaryBtn> */}
        </div>
      </div>
    </>
  );
};

export default About;
