import React from "react";
import { Dumbbell } from "lucide-react";
// import video from "/videos/v1.mp4";
const Exercises = () => {
  const exercisesData = [
    {
      id: 1,
      video: "/videos/v2.mp4",
      name: "Dumbell Squats",
      duration: 15,
      sets: 3,
      calories: 100,
    },
    {
      id: 2,
      video: "/videos/v3.mp4",
      name: "Leg Press",
      duration: 10,
      sets: 4,
      calories: 150,
    },
    {
      id: 3,
      video: "/videos/v4.mp4",
      name: "Hamstring Workout",
      duration: 15,
      sets: 4,
      calories: 250,
    },
    {
      id: 4,
      video: "/videos/v5.mp4",
      name: "Walking Lunges",
      duration: 15,
      sets: 4,
      calories: 120,
    },
    {
      id: 5,
      video: "/videos/v1.mp4",
      name: "Bump Squats",
      duration: 15,
      sets: 4,
      calories: 220,
    },
    {
      id: 6,
      video: "/videos/v6.mp4",
      name: "Lunges",
      duration: 10,
      sets: 4,
      calories: 100,
    },
    {
      id: 7,
      video: "/videos/v7.mp4",
      name: "Upper chest curl",
      duration: 18,
      sets: 4,
      calories: 120,
    },
    {
      id: 8,
      video: "/videos/v8.mp4",
      name: "Burpees",
      duration: 15,
      sets: 3,
      calories: 220,
    },
    {
      id: 9,
      video: "/videos/v9.mp4",
      name: "Butterfly",
      duration: 15,
      sets: 4,
      calories: 100,
    },
    {
      id: 10,
      video: "/videos/v10.mp4",
      name: "Cardio",
      duration: 10,
      sets: 4,
      calories: 200,
    },
    {
      id: 11,
      video: "/videos/v11.mp4",
      name: "Barbellrows",
      duration: 10,
      sets: 3,
      calories: 220,
    },
    {
      id: 12,
      video: "/videos/v12.mp4",
      name: "Weight assisted Pullup",
      duration: 10,
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
        <h6 className="text-4xl font-medium text-gray-200 flex items-center gap-x-2 mb-6">
          <Dumbbell className="w-7 h-7 -rotate-45 text-orange-600" />
          Exercise
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
      </div>
    </>
  );
};

export default Exercises;
