import React from "react";
import { Dumbbell, MoveRight } from "lucide-react";
import SecondaryLink from "../../components/LinkBtn/SecondaryLink";
const Trainer = () => {
  const day1 = [
    {
      id: 1,
      trainerImg:
        "https://images.pexels.com/photos/8743854/pexels-photo-8743854.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Greek Yogurt Parfait",
      recipe: [
        "Greek yogurt (1 cup)",
        "Mixed berries (1/2 cup)",
        "Granola (2 tbsp)",
      ],
      time: "Breakfast",
    },
    {
      id: 2,
      trainerImg:
        "https://images.pexels.com/photos/7663342/pexels-photo-7663342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Apple slices with almond butter",
      recipe: ["Apple slices", "almond butter (1 tbsp)"],
      time: "Snack",
    },
    {
      id: 3,
      trainerImg:
        "https://images.pexels.com/photos/5894142/pexels-photo-5894142.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Grilled Chicken Salad",
      recipe: [
        "Grilled chicken breast (4 oz)",
        "Mixed greens",
        "cherry tomatoes",
        "cucumber",
        "avocado with olive oil",
      ],
      time: "Lunch",
    },
    {
      id: 4,
      trainerImg:
        "https://images.pexels.com/photos/7731673/pexels-photo-7731673.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Baked Salmon with Asparagus",
      recipe: [
        "Baked salmon fillet (5 oz)",
        "with steamed asparagus",
        "quinoa (1/2 cup)",
      ],
      time: "Dinner",
    },
  ];
  return (
    <>
      <div
        className="w-full h-auto flex items-center justify-center flex-col lg:py-16
         md:py-14 sm:py-12 py-10 lg:px-24 md: px-16 sm:px-6 px-4"
      >
        <h6 className="text-lg font-medium text-gray-200 flex items-center gap-x-2 mb-6">
          <Dumbbell className="w-4 h-4 -rotate-45 text-orange-600" />
          Popular Diet Plan
        </h6>
        <div
                className="w-full h-auto flex items-center justify-center lg:gap-x-8 md:gap-x-6 sm:gap-x-4 gap-x-3 
        lg:gap-y-8 md:gap-y-6 sm:gap-y-4 gap-y-3 flex-wrap mb-10"
              >
                {day1.map((data) => (
                  <div
                    key={data.id}
                    className="lg:w-[23%] md:w-[48%] sm:w-[48%] w-full lg:h-[50vh] md:h-[53vh]
               sm:h-[58vh] h-[60vh] rounded-xl overflow-hidden relative"
                  >
                    <img
                      src={data.trainerImg}
                      alt="trainer image"
                      className="w-full h-full object-cover"
                    />
                    <div className="w-full h-[60%] bg-black/90 absolute bottom-0 left-0 py-24 px-2 flex items-center justify-center flex-col">
                      <p className="text-sm text-gray-300">{data.time}</p>
                      <h1 className="text-xl text-white text-center justify-center font-semibold">
                        {data.name}
                      </h1>

                      <ul>
                        {data.recipe.map((data2) => (
                          <li className="text-white text-start justify-center">
                            -{data2}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
        <SecondaryLink
          link="/diet-plan"
          className="lg:w-[15%] md:w-[50%] sm:w-[75%] w-[85%] justify-center"
        >
          View All Diet Plan
          <MoveRight className="w-4 h-4"/>
        </SecondaryLink>
      </div>
    </>
  );
};

export default Trainer;
