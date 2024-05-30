import { Dumbbell, MoveRight } from "lucide-react";
import SecondaryLink from "../../components/LinkBtn/SecondaryLink";
import React from "react";

const Excerice = () => {
  const exercisesData = [
    {
      id: 1,
      video: "../../public/videos/v2.mp4",
      name: "Dumbell Squats",
      duration: 15,
      sets: 3,
      calories: 100,
    },
    {
      id: 2,
      video: "../../public/videos/v3.mp4",
      name: "Leg Press",
      duration: 10,
      sets: 4,
      calories: 150,
    },
    {
      id: 3,
      video: "../../public/videos/v4.mp4",
      name: "Hamstring Workout",
      duration: 15,
      sets: 4,
      calories: 250,
    },
    {
      id: 4,
      video: "../../public/videos/v5.mp4",
      name: "Walking Lunges",
      duration: 15,
      sets: 4,
      calories: 120,
    },
  ];
  return (
    <>
      <div
        className="w-full h-auto flex items-center justify-center flex-col lg:py-16
         md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4"
      >
        <h6 className="text-lg font-medium text-gray-200 flex items-center gap-x-2 mb-6">
          <Dumbbell className="w-4 h-4 -rotate-45 text-orange-600" />
          Popular Excerice
        </h6>
        <div className="w-full h-auto flex items-center justify-center gap-x-4 gap-y-5 flex-wrap mb-10">
          {exercisesData.map((data) => (
            <div
              key={data.id}
              className="lg:w-[24%] md:w-[48%] sm:w-[48%] w-full h-auto rounded-lg overflow-hidden 
        hover: shadow hover:shadow-orange-900/40 ease-out duration-700 cursor-pointer"
            >
              {/* <img
                src="https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                // src={data.trainerImg}
                alt="exercise img"
                className="w-full lg:h-[30vh] md:h-[33vh] sm:h-[38vh] h-[40vh] object-cover rounded-lg"
              /> */}
              <video className="w-full lg:h-[30vh] md:h-[33vh] sm:h-[38vh] h-[40vh] object-cover rounded-lg" controls>
                <source src={data.video} type="video/mp4" muted/>
              </video>
              <div className="w-full h-auto py-4 px-3">
                <h1 className="text-lg text-white font-semibold mb-1">
                  {data.name}
                </h1>
                <div className="w-full h-auto flex items-center gap-x-2">
                  <p className="text-sm text-gray-300">{data.duration} min</p>
                  <span className="w-1 h-1 rounded-full bg-gray-600" />
                  <p className="text-sm text-gray-300">{data.sets} sets</p>
                  <span className="w-1 h-1 rounded-full bg-gray-600" />
                  <p className="text-sm text-gray-300">
                    {data.calories} calories
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <SecondaryLink
          link="/exercises"
          className="lg:w-[15%] md:w-[50%] sm:w-[75%] w-[85%] justify-center"
        >
          View All Exerice
          <MoveRight className="w-4 h-4"/>
        </SecondaryLink>
      </div>
    </>
  );
};

export default Excerice;
