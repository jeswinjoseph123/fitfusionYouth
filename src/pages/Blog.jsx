import React from "react";
import { Dumbbell } from "lucide-react";
const Blog = () => {
  return (
    <>
      <div
        className="w-full h-auto flex items-center justify-center flex-col lg:py-16
         md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4"
      >
        <h6 className="text-4xl font-medium text-gray-200 flex items-center gap-x-2 mb-6">
          <Dumbbell className="w-7 h-7 -rotate-45 text-orange-600" />
          Blog Post
        </h6>
        {/* video */}
        <div
          className="w-full h-auto flex items-center justify-center flex-col lg:py-16
         md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4"
        >
          <h1
            className="lg: text-3xl md:text-3xl sm:text-2xl text-xl font-semibold
            text-gray-200 mb-4 leading-normal lg:pe-5 md: pe-4 sm:pe-1 pe-0"
          >
            Unveiling the Secrets to Health and Fitness An Interview with a Gym
            trainer
          </h1>
          <iframe
            className="w-full lg:h-[60vh] md:h-[68vh] sm:h-[60vh] h-[55] object-cover"
            src="https://www.youtube.com/embed/fbgHg1nyTUk?si=MP-H_bGDNvPaFtw9"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div
          className="w-full h-auto flex items-center justify-between gap-2 lg:py-16
         md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4 flex-wrap-reverse"
        >
          <div className="lg:w-[38%] md:w-full sm:w-full w-full h-auto relative overflow-hidden rounded-lg">
            <img
              src="https://cdn-life.dailyburn.com/life/wp-content/uploads/2018/01/10010213/Stephanie-Laska.webp"
              alt="About"
              className="w-full lg:h-[60vh] md:h-[68vh] sm:h-[60vh] h-[55] object-cover"
            />
          </div>
          <div className="lg:w-[50%] md:w-full sm:w-full w-full h-auto lg:text-start md:text-start sm:text-start text-center">
            <h1
              className="lg: text-3xl md:text-3xl sm:text-2xl text-xl font-semibold
            text-gray-200 mb-4 leading-normal lg:pe-5 md: pe-4 sm:pe-1 pe-0"
            >
              “Exercise for me is not about running a marathon, it’s about those
              daily decisions to just go outside.”
            </h1>

            <p className="lg:text-base md:text-base sm:text-sm text-sm text-gray-500 font-medium mb-4">
              Stephanie Laska, a 44-year-old Californian, started a fitness
              routine in her 40s after losing 50 pounds through diet changes.
              She initially struggled with the details of a workout schedule,
              but eventually decided to walk instead. Laska's daughter's
              reaction to her running helped her start taking one-mile jogs to a
              5k, 10k, half-marathon, and eventually, a marathon distance. She
              ran her first 26.2 in 2015 and completed her second in NYC this
              past fall. Laska's motivation to keep going was that it wasn't as
              hard as she thought it was. The idea of taking life one step at a
              time has led her to make more time for herself, say no to
              responsibilities that don't improve her well-being, and improve
              her relationships with her husband and kids.
            </p>
          </div>
        </div>
        <div
          className="w-full h-auto flex items-center justify-between gap-2 lg:py-16
         md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4 flex-wrap-reverse"
        >
          <div className="lg:w-[50%] md:w-full sm:w-full w-full h-auto lg:text-start md:text-start sm:text-start text-center">
            <h1
              className="lg: text-3xl md:text-3xl sm:text-2xl text-xl font-semibold
            text-gray-200 mb-4 leading-normal lg:pe-5 md: pe-4 sm:pe-1 pe-0"
            >
              “It’s about making peace with discomfort, and that translates into
              everyday life.”
            </h1>

            <p className="lg:text-base md:text-base sm:text-sm text-sm text-gray-500 font-medium mb-4">
              Mike Ergo, a Marine Corps soldier who served two tours in Iraq,
              struggled with PTSD after returning to the U.S. in 2005. He turned
              to drugs and alcohol to cope with his PTSD, but eventually quit
              cold turkey. Ergo began doing CrossFit and running a
              half-marathon, which helped him find satisfaction and purpose in
              the experience. He then participated in the Ironman World
              Championships, signing up for a half Ironman race in Hawaii.
              Ergo's tough training sessions and Ironman courses helped him
              learn to be OK with discomfort and take a softer approach to
              dealing with hardships. He focuses on gratitude and acceptance of
              where he is, acknowledging that it is okay to hurt. This approach
              translates into everyday life, not needing things to be ideal all
              the time. By discipline in his workout routine and putting himself
              through adversity and discomfort, he is better prepared for other
              challenges in life.
            </p>
          </div>
          <div className="lg:w-[38%] md:w-full sm:w-full w-full h-auto relative overflow-hidden rounded-lg">
            <img
              src="https://cdn-life.dailyburn.com/life/wp-content/uploads/2018/01/10010210/Mike-Ergo.webp"
              alt="About"
              className="w-full lg:h-[60vh] md:h-[68vh] sm:h-[60vh] h-[55] object-cover"
            />
          </div>
        </div>
        <div
          className="w-full h-auto flex items-center justify-between gap-2 lg:py-16
         md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4 flex-wrap-reverse"
        >
          <div className="lg:w-[38%] md:w-full sm:w-full w-full h-auto relative overflow-hidden rounded-lg">
            <img
              src="https://cdn-life.dailyburn.com/life/wp-content/uploads/2018/01/10010207/Felicia-Hall.webp"
              alt="About"
              className="w-full lg:h-[60vh] md:h-[68vh] sm:h-[60vh] h-[55] object-cover"
            />
          </div>
          <div className="lg:w-[50%] md:w-full sm:w-full w-full h-auto lg:text-start md:text-start sm:text-start text-center">
            <h1
              className="lg: text-3xl md:text-3xl sm:text-2xl text-xl font-semibold
            text-gray-200 mb-4 leading-normal lg:pe-5 md: pe-4 sm:pe-1 pe-0"
            >
              “I’m comfortable in every part of my skin.”
            </h1>

            <p className="lg:text-base md:text-base sm:text-sm text-sm text-gray-500 font-medium mb-4">
              Felicia Hall, a 36-year-old woman, started a new lifestyle after
              struggling with depression and overeating. She joined Daily Burn,
              a program that helped her quit drinking and gain confidence. She
              also started running and shifted her late-night fast food sessions
              to healthier meals. After five months, Hall lost 20 pounds and
              gained a new perspective on exercise and life. She now regularly
              seeks support from the Daily Burn community group and even teaches
              group fitness classes in her hometown. Hall believes that setting
              a positive example and gaining self-confidence is an amazing gift,
              and that it can have a profound impact on her mental and emotional
              well-being.
            </p>
          </div>
        </div>
        <div
          className="w-full h-auto flex items-center justify-between gap-2 lg:py-16
         md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4 flex-wrap-reverse"
        >
          <div className="lg:w-[50%] md:w-full sm:w-full w-full h-auto lg:text-start md:text-start sm:text-start text-center">
            <h1
              className="lg: text-3xl md:text-3xl sm:text-2xl text-xl font-semibold
            text-gray-200 mb-4 leading-normal lg:pe-5 md: pe-4 sm:pe-1 pe-0"
            >
              “Exercise is a universal interest and I’ve learned that people
              love sharing it with each other.”
            </h1>

            <p className="lg:text-base md:text-base sm:text-sm text-sm text-gray-500 font-medium mb-4">
              Katherine Lauria, a 26-year-old from New Jersey, has shed 65
              pounds and rediscovered her love for exercise after joining Soul
              Cycle with a friend. Despite initially feeling uncooperative,
              Lauria and her friend found solace in the workouts, which led to
              her trying other workouts like running, Pilates, and personal
              training. Her favorite aspect of the experience is the connections
              she's made with others, especially after moving to London. She
              believes exercise is a universal interest and that people enjoy
              sharing it with each other. Now, she enjoys exercising for its
              enjoyment and productivity.
            </p>
          </div>
          <div className="lg:w-[38%] md:w-full sm:w-full w-full h-auto relative overflow-hidden rounded-lg">
            <img
              src="https://cdn-life.dailyburn.com/life/wp-content/uploads/2018/01/10010204/Katherine-Lauria.webp"
              alt="About"
              className="w-full lg:h-[60vh] md:h-[68vh] sm:h-[60vh] h-[55] object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
