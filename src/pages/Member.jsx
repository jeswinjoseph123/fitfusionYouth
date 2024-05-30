import React from "react";
import Pricing from "./Home/Pricing";

const Member = () => {
  return (
    <>
      <div
        className="w-full h-[55vh] flex items-center justify-center flex-col lg:py-16 md:py-14 sm:py-12 
      py-10 lg:px-24 md:px-16 sm:px-6 px-4 relative z-10"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/3775603/pexels-photo-3775603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="w-full h-full bg-black/50 absolute top-0 left-0 -z-10"></div>
        <h1 className="lg:text-6x1 md:text-5xl sm:text-4xl text-4xl font-bold text-gray-200 uppercase mb-4 text-center">
          No <span className="text-orange-600">Pain</span>, No{" "}
          <span className="text-orange-600">Gain</span>
        </h1>

        <p className="text-1g text-gray-300 font-medium mb-8 text-center">
          Ignite Your Fitness Journey with Premium Solutions.
        </p>
      </div>
      <Pricing />
    </>
  );
};

export default Member;
