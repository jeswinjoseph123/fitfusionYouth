import React from "react";
import PrimaryBtn from "../../components/Button/PrimaryBtn";
import { Dumbbell, CheckSquare } from "lucide-react";
const Pricing = () => {
  return (
    <>
      <div
        className="w-full h-auto flex items-center justify-center flex-col lg:py-16
         md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4"
      >
        <h1 className="text-4xl font-medium text-gray-200 flex items-center gap-x-2 mb-6">
          <Dumbbell className="w-7 h-7 -rotate-45 text-orange-600" />
          Our Pricing
        </h1>
        <div className="w-full h-auto flex justify-center gap-x-5 gap-y-8 flex-wrap">
          {/* Basic */}
          <div
            className="lg:w-[32%] md:w-full sm:w-full w-full h-auto px-10 lg:py-12 md:py-12 sm:py-10 py-10
             bg-black/10 rounded-lg border-[6px] border-gray-600 hover:border-orange-600/40 hover:bg-gray-600/10 ease-out duration-700
             cursor-pointer"
          >
            <h2 className="lg:text-4xl md:text-xl sm:text-3xl text-3xl text-white font-semibold mb-5">
              Basic Plan
            </h2>

            <h1 className="lg:text-5xl md:text-5xl sm:text-4xl text-4xl text-orange-600 font-bold mb-3 tracking-wide">
              €50.00
              <span
                className="1g:text-xl md:text-xl sm:text-lg text-base text -gray-300
                 font-medium tracking-normal"
              >
                / month
              </span>
            </h1>
            <hr className="border-gray-600/40 my-7" />

            <div className="w-full h-auto space-y-2 mb-8">
              <div className="w-full h-auto flex items-start gap-x-2">
                <CheckSquare className="w-5 h-5 text-orange-600" />
                <p className="text-gray-400 lg:text-base md:text-base sm:text-base text-sm">
                Workout routines
                </p>
              </div>
              <div className="w-full h-auto flex items-start gap-x-2">
                <CheckSquare className="w-5 h-5 text-orange-600" />
                <p className="text-gray-400 lg:text-base md:text-base sm:text-base text-sm">
                Strength training
                </p>
              </div>
              <div className="w-full h-auto flex items-start gap-x-2">
                <CheckSquare className="w-5 h-5 text-orange-600" />
                <p className="text-gray-400 lg:text-base md:text-base sm:text-base text-sm">
                ⁠Diet Plan
                </p>
              </div>
            </div>
            <PrimaryBtn className="w-full h-11 text-lg justify-center font-semibold tracking-wider mb-3 uppercase">
              Select Plan
            </PrimaryBtn>
          </div>
          {/* premium */}
          <div
            className="lg:w-[32%] md:w-full sm:w-full w-full h-auto px-10 lg:py-12 md:py-12 sm:py-10 py-10
             bg-black/10 rounded-lg border-[6px] border-orange-600  ease-out duration-700
             cursor-pointer relative"
          >
            <div
              className="absolute -top-6 left-[50%] translate-x-[-50%] bg-orange-600 
              py-2 px-5 rounded-full text-base font-medium text-white"
            >
              Recommended
            </div>
            <h2 className="lg:text-4xl md:text-xl sm:text-3xl text-3xl text-white font-semibold mb-5">
              Premium Plan
            </h2>

            <h1 className="lg:text-5xl md:text-5xl sm:text-4xl text-4xl text-orange-600 font-bold mb-3 tracking-wide">
              €75.00
              <span
                className="1g:text-xl md:text-xl sm:text-lg text-base text -gray-300
                 font-medium tracking-normal"
              >
                / month
              </span>
            </h1>
            <hr className="border-gray-600/40 my-7" />

            <div className="w-full h-auto space-y-2 mb-8">
              <div className="w-full h-auto flex items-start gap-x-2">
                <CheckSquare className="w-5 h-5 text-orange-600" />
                <p className="text-gray-400 lg:text-base md:text-base sm:text-base text-sm">
                Workout routines
                </p>
              </div>
              <div className="w-full h-auto flex items-start gap-x-2">
                <CheckSquare className="w-5 h-5 text-orange-600" />
                <p className="text-gray-400 lg:text-base md:text-base sm:text-base text-sm">
                Strength training
                </p>
              </div>
              <div className="w-full h-auto flex items-start gap-x-2">
                <CheckSquare className="w-5 h-5 text-orange-600" />
                <p className="text-gray-400 lg:text-base md:text-base sm:text-base text-sm">
                Diet Plan
                </p>
              </div>
              <div className="w-full h-auto flex items-start gap-x-2">
                <CheckSquare className="w-5 h-5 text-orange-600" />
                <p className="text-gray-400 lg:text-base md:text-base sm:text-base text-sm">
                Group Sports activities
                </p>
              </div>
              <div className="w-full h-auto flex items-start gap-x-2">
                <CheckSquare className="w-5 h-5 text-orange-600" />
                <p className="text-gray-400 lg:text-base md:text-base sm:text-base text-sm">
                Calisthenics
                </p>
              </div>
              <div className="w-full h-auto flex items-start gap-x-2">
                <CheckSquare className="w-5 h-5 text-orange-600" />
                <p className="text-gray-400 lg:text-base md:text-base sm:text-base text-sm">
                Yoga Sessions
                </p>
              </div>
              <div className="w-full h-auto flex items-start gap-x-2">
                <CheckSquare className="w-5 h-5 text-orange-600" />
                <p className="text-gray-400 lg:text-base md:text-base sm:text-base text-sm">
                Mental health plans
                </p>
              </div>
            </div>
            <PrimaryBtn className="w-full h-11 text-lg justify-center font-semibold tracking-wider mb-3 uppercase">
              Select Plan
            </PrimaryBtn>
          </div>
          {/* ultra */}
          <div
            className="lg:w-[32%] md:w-full sm:w-full w-full h-auto px-10 lg:py-12 md:py-12 sm:py-10 py-10
             bg-black/10 rounded-lg border-[6px] border-gray-600 hover:border-orange-600/40 hover:bg-gray-600/10 ease-out duration-700
             cursor-pointer"
          >
            <h2 className="lg:text-4xl md:text-xl sm:text-3xl text-3xl text-white font-semibold mb-5">
              VIP Plan
            </h2>

            <h1 className="lg:text-5xl md:text-5xl sm:text-4xl text-4xl text-orange-600 font-bold mb-3 tracking-wide">
              €100.00
              <span
                className="1g:text-xl md:text-xl sm:text-lg text-base text -gray-300
                 font-medium tracking-normal"
              >
                / month
              </span>
            </h1>
            <hr className="border-gray-600/40 my-7" />

            <div className="w-full h-auto space-y-2 mb-8">
              <div className="w-full h-auto flex items-start gap-x-2">
                <CheckSquare className="w-5 h-5 text-orange-600" />
                <p className="text-gray-400 lg:text-base md:text-base sm:text-base text-sm">
                Workout routines
                </p>
              </div>
              <div className="w-full h-auto flex items-start gap-x-2">
                <CheckSquare className="w-5 h-5 text-orange-600" />
                <p className="text-gray-400 lg:text-base md:text-base sm:text-base text-sm">
                ⁠Strength training
                </p>
              </div>
              <div className="w-full h-auto flex items-start gap-x-2">
                <CheckSquare className="w-5 h-5 text-orange-600" />
                <p className="text-gray-400 lg:text-base md:text-base sm:text-base text-sm">
                Diet Plan
                </p>
              </div>
              <div className="w-full h-auto flex items-start gap-x-2">
                <CheckSquare className="w-5 h-5 text-orange-600" />
                <p className="text-gray-400 lg:text-base md:text-base sm:text-base text-sm">
                Group Sports activities
                </p>
              </div>
              <div className="w-full h-auto flex items-start gap-x-2">
                <CheckSquare className="w-5 h-5 text-orange-600" />
                <p className="text-gray-400 lg:text-base md:text-base sm:text-base text-sm">
                Calisthenics
                </p>
              </div>
              <div className="w-full h-auto flex items-start gap-x-2">
                <CheckSquare className="w-5 h-5 text-orange-600" />
                <p className="text-gray-400 lg:text-base md:text-base sm:text-base text-sm">
                Yoga Sessions
                </p>
              </div>
              <div className="w-full h-auto flex items-start gap-x-2">
                <CheckSquare className="w-5 h-5 text-orange-600" />
                <p className="text-gray-400 lg:text-base md:text-base sm:text-base text-sm">
                Mental health plans
                </p>
              </div>
              <div className="w-full h-auto flex items-start gap-x-2">
                <CheckSquare className="w-5 h-5 text-orange-600" />
                <p className="text-gray-400 lg:text-base md:text-base sm:text-base text-sm">
                Mental health books
                </p>
              </div>
              <div className="w-full h-auto flex items-start gap-x-2">
                <CheckSquare className="w-5 h-5 text-orange-600" />
                <p className="text-gray-400 lg:text-base md:text-base sm:text-base text-sm">
                Counseling Sessions
                </p>
              </div>
              <div className="w-full h-auto flex items-start gap-x-2">
                <CheckSquare className="w-5 h-5 text-orange-600" />
                <p className="text-gray-400 lg:text-base md:text-base sm:text-base text-sm">
                Extensive cardio Training
                </p>
              </div>
            </div>
            <PrimaryBtn className="w-full h-11 text-lg justify-center font-semibold tracking-wider mb-3 uppercase">
              Select Plan
            </PrimaryBtn>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
