import React from "react";
import PrimaryBtn from "@/components/Button/PrimaryBtn";
import Contact from "./Home/Contact";

const ContactUs = () => {
  return (
    <>
      <div className="w-full h-auto overflow-hidden">
        <div
          className="w-full h-[55vh] flex items-center justify-center flex-col lg:py-16 md:py-14 sm:py-12 
      py-10 lg:px-24 md:px-16 sm:px-6 px-4 relative z-10"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/821754/pexels-photo-821754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="w-full h-full bg-black/40 absolute top-0 left-0 -z-10"></div>
          <h1 className="lg:text-6x1 md:text-5xl sm:text-4xl text-4xl font-bold text-gray-200 uppercase mb-4 text-center">
            Stay <span className="text-orange-600"> Connected</span>
          </h1>

          <p className="text-lg text-gray-300 font-medium mb-8 text-center">
            Encourage your youth audience to explore, engage, and take charge of
            their health and fitness journey with your dedicated resources and
            community support.
          </p>
        </div>
        <Contact />
      </div>
    </>
  );
};

export default ContactUs;
