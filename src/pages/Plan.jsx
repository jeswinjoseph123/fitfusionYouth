import React from "react";
import { Dumbbell, MoveRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
const Plan = () => {
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
  const day2 = [
    {
      id: 1,
      trainerImg:
        "https://images.pexels.com/photos/19102080/pexels-photo-19102080/free-photo-of-a-bowl-of-oatmeal-topped-with-fruits-nuts-and-seeds.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Oatmeal with Banana and Chia Seeds",
      recipe: ["Rolled oats (1/2 cup)", "Banana slices", "Chia seeds (1 tbsp)"],
      time: "Breakfast",
    },
    {
      id: 2,
      trainerImg:
        "https://images.pexels.com/photos/824635/pexels-photo-824635.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Hard-boiled egg",
      recipe: ["Boiled water", "Egg"],
      time: "Snack",
    },
    {
      id: 3,
      trainerImg:
        "https://images.pexels.com/photos/5514818/pexels-photo-5514818.jpeg",
      name: "Quinoa and Black Bean Bowl",
      recipe: [
        "Quinoa (1 cup)",
        "Black beans (1/2 cup)",
        "Corn",
        "diced bell pepper",
        "salsa",
      ],
      time: "Lunch",
    },
    {
      id: 4,
      trainerImg:
        "https://images.pexels.com/photos/5409020/pexels-photo-5409020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Turkey Meatballs with Noodles",
      recipe: [
        "Turkey meatballs (4)",
        "Zucchini noodles (2 cups)",
        "marinara sauce",
      ],
      time: "Dinner",
    },
  ];
  const day3 = [
    {
      id: 1,
      trainerImg:
        "https://images.pexels.com/photos/103566/pexels-photo-103566.jpeg",
      name: "Smoothie",
      recipe: ["Spinach", "Banana slices", "almond milk", "protein powder"],
      time: "Breakfast",
    },
    {
      id: 2,
      trainerImg:
        "https://images.pexels.com/photos/10281067/pexels-photo-10281067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2s",
      name: "Cottage cheese and pineapple",
      recipe: ["Cottage cheese (1/2 cup)", "with pineapple chunks"],
      time: "Snack",
    },
    {
      id: 3,
      trainerImg:
        "https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg",
      name: "Lentil Soup",
      recipe: ["Lentils", "carrots", "celery", "onion", "tomatoes"],
      time: "Lunch",
    },
    {
      id: 4,
      trainerImg:
        "https://images.pexels.com/photos/5848482/pexels-photo-5848482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Stir-fried Tofu with Vegetables",
      recipe: [
        "Tofu (1 cup)",
        "broccoli",
        "bell peppers",
        "carrots",
        "with low-sodium soy sauce",
      ],
      time: "Dinner",
    },
  ];
  const day4 = [
    {
      id: 1,
      trainerImg:
        "https://images.pexels.com/photos/1351238/pexels-photo-1351238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Avocado Toast",
      recipe: [
        "Whole grain toast (1 slice)",
        "with mashed avocado",
        "poached egg",
      ],
      time: "Breakfast",
    },
    {
      id: 2,
      trainerImg:
        "https://images.pexels.com/photos/20350172/pexels-photo-20350172/free-photo-of-slice-of-pickles-in-bowl.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Cucumber with Tzatziki",
      recipe: ["Sliced cucumber", "tzatziki (3 tbsp)"],
      time: "Snack",
    },
    {
      id: 3,
      trainerImg:
        "https://images.pexels.com/photos/5848057/pexels-photo-5848057.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Chicken Wrap",
      recipe: [
        "Whole wheat wrap",
        " grilled chicken",
        "lettuce",
        "tomato",
        "hummus",
      ],
      time: "Lunch",
    },
    {
      id: 4,
      trainerImg:
        "https://images.pexels.com/photos/5612346/pexels-photo-5612346.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Baked Cod with Sweet Potato",
      recipe: [
        "Baked cod fillet (5 oz)",
        "roasted sweet potato (1 medium)",
        "steamed green beans",
      ],
      time: "Dinner",
    },
  ];
  const day5 = [
    {
      id: 1,
      trainerImg:
        "https://images.pexels.com/photos/2179941/pexels-photo-2179941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Smoothie Bowl",
      recipe: ["Mixed berries", "Greek yogurt", "granola"],
      time: "Breakfast",
    },
    {
      id: 2,
      trainerImg:
        "https://images.pexels.com/photos/5149339/pexels-photo-5149339.jpeg?auto=compress&cs=tinysrgb&w=800",
      name: "Celery sticks with peanut butter",
      recipe: ["Celery sticks", "peanut butter (1 tbsp)"],
      time: "Snack",
    },
    {
      id: 3,
      trainerImg:
        "https://images.pexels.com/photos/17597408/pexels-photo-17597408/free-photo-of-a-bowl-with-a-healthy-salad.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Chickpea Salad",
      recipe: [
        "Chickpeas (1 cup)",
        "cucumber",
        "tomatoes",
        "red onion",
        "feta cheese",
        "olive oil dressing",
      ],
      time: "Lunch",
    },
    {
      id: 4,
      trainerImg:
        "https://images.pexels.com/photos/2233729/pexels-photo-2233729.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Grilled Shrimp Skewers",
      recipe: [
        "Grilled shrimp (6 oz)",
        " brown rice (1/2 cup)",
        "steamed broccoli",
      ],
      time: "Dinner",
    },
  ];
  const day6 = [
    {
      id: 1,
      trainerImg:
        "https://images.pexels.com/photos/10756661/pexels-photo-10756661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Scrambled Eggs with Spinach",
      recipe: ["Scrambled eggs (2)", "spinach", "cherry tomatoes"],
      time: "Breakfast",
    },
    {
      id: 2,
      trainerImg:
        "https://media.istockphoto.com/id/178563763/photo/nuts-in-hands.jpg?s=1024x1024&w=is&k=20&c=1AHdSG0BXArY9zQ6Y_OlTAimlrHwsqSaMj8BnJvZWCQ=",
      name: "Handful of walnuts",
      recipe: [null],
      time: "Snack",
    },
    {
      id: 3,
      trainerImg:
        "https://media.istockphoto.com/id/175602146/photo/tuna-salad.jpg?s=1024x1024&w=is&k=20&c=lQw18aVeRIEhWfd5QM52pYif9Wb8hPdS1p3mSURQtFQ=",
      name: "Tuna Salad",
      recipe: ["Tuna (1 can)", "mixed greens", "avocado", "olive oil dressing"],
      time: "Lunch",
    },
    {
      id: 4,
      trainerImg:
        "https://media.istockphoto.com/id/1442924072/photo/stir-fry-with-chicken-red-paprika-mushrooms-and-chives-in-frying-pan-asian-cuisine-dish-gray.jpg?s=1024x1024&w=is&k=20&c=r0Qhclgy-hNl5Nt9gkVed4PSpuecbcmJdbTHM92PLOE=",
      name: "Chicken Stir-fry",
      recipe: ["Chicken breast (4 oz)", "mixed vegetables", "with soy sauce"],
      time: "Dinner",
    },
  ];
  const day7 = [
    {
      id: 1,
      trainerImg:
        "https://images.pexels.com/photos/691162/pexels-photo-691162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Chia Pudding",
      recipe: ["Chia seeds (3 tbsp)", "almond milk", "mixed berries"],
      time: "Breakfast",
    },
    {
      id: 2,
      trainerImg:
        "https://images.pexels.com/photos/4877200/pexels-photo-4877200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Handful of trail mix",
      recipe: [null],
      time: "Snack",
    },
    {
      id: 3,
      trainerImg:
        "https://images.pexels.com/photos/18363397/pexels-photo-18363397/free-photo-of-roast-chicken-with-hummus-and-spinach-salad.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Spinach and Feta Stuffed Chicken",
      recipe: [
        "Chicken breast stuffed",
        "with spinach and feta",
        "side of quinoa (1/2 cup)",
      ],
      time: "Lunch",
    },
    {
      id: 4,
      trainerImg:
        "https://images.pexels.com/photos/7813734/pexels-photo-7813734.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Turkey Chili",
      recipe: ["Ground turkey", "kidney beans", "tomatoes", "chili spices"],
      time: "Dinner",
    },
  ];

  // weight gain
  const Gday1 = [
    {
      id: 1,
      trainerImg:
        "https://images.pexels.com/photos/4006347/pexels-photo-4006347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
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
        "https://images.pexels.com/photos/5857834/pexels-photo-5857834.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Apple slices with almond butter",
      recipe: ["Apple slices", "almond butter (1 tbsp)"],
      time: "Snack",
    },
    {
      id: 3,
      trainerImg:
        "https://images.pexels.com/photos/15911841/pexels-photo-15911841/free-photo-of-salad-with-grilled-chicken-and-cheese.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
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
  const Gday2 = [
    {
      id: 1,
      trainerImg:
        "https://images.pexels.com/photos/7937049/pexels-photo-7937049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Oatmeal with Nuts and Berries",
      recipe: ["Oatmeal (1 cup)", "Mixed nuts (2 tbsp)", "Fresh berries (1/2 cup)"],
      time: "Breakfast",
    },
    {
      id: 2,
      trainerImg:
        "https://images.pexels.com/photos/20605006/pexels-photo-20605006/free-photo-of-bread-with-banana-slices-and-peanut-butter.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Banana with peanut butter",
      recipe: ["Banana ", "peanut butter (1 tbsp)"],
      time: "Snack",
    },
    {
      id: 3,
      trainerImg:
        "https://images.pexels.com/photos/20508770/pexels-photo-20508770/free-photo-of-wrap-with-salmon-and-cruller-with-whipped-cream.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Turkey and Avocado Wrap",
      recipe: [
        "Whole wheat wrap",
        "Sliced turkey breast (4 oz)",
        "Avocado slices",
        "Lettuce",
        "tomato",
        "cucumber"
      ],
      time: "Lunch",
    },
    {
      id: 4,
      trainerImg:
        "https://images.pexels.com/photos/7474372/pexels-photo-7474372.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Beef Stir-fry",
      recipe: [
        "Sliced beef (5 oz)",
        "Mixed vegetables",
        "Brown rice (1 cup)",
      ],
      time: "Dinner",
    },
  ];
  const Gday3 = [
    {
      id: 1,
      trainerImg:
        "https://images.pexels.com/photos/2173774/pexels-photo-2173774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Smoothie Bowl",
      recipe: ["blend banana, spinach, almond milk", "Topped with granola (2 tbsp)", "fresh fruit (1/2 cup)", ],
      time: "Breakfast",
    },
    {
      id: 2,
      trainerImg:
        "https://images.pexels.com/photos/8921547/pexels-photo-8921547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Handful of mixed nuts",
      recipe: [null],
      time: "Snack",
    },
    {
      id: 3,
      trainerImg:
        "https://images.pexels.com/photos/5514818/pexels-photo-5514818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Quinoa and Black Bean Salad",
      recipe: ["Quinoa (1 cup)", "Black beans (1/2 cup)", "Corn, cherry tomatoes", "bell peppers", "cilantro with lime vinaigrette"],
      time: "Lunch",
    },
    {
      id: 4,
      trainerImg:
        "https://images.pexels.com/photos/11220209/pexels-photo-11220209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Chicken Alfredo Pasta",
      recipe: [
        "Whole grain pasta (1 cup)",
        "Grilled chicken breast (5 oz)",
        "Alfredo sauce",
        "steamed broccoli",
      ],
      time: "Dinner",
    },
  ];
  const Gday4 = [
    {
      id: 1,
      trainerImg:
        "https://images.pexels.com/photos/1351238/pexels-photo-1351238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Avocado Toast",
      recipe: [
        "Whole grain toast (1 slice)",
        "with mashed avocado",
        "poached egg",
      ],
      time: "Breakfast",
    },
    {
      id: 2,
      trainerImg:
        "https://images.pexels.com/photos/990439/pexels-photo-990439.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Smoothie",
      recipe: ["banana", "almond milk","protein powder"],
      time: "Snack",
    },
    {
      id: 3,
      trainerImg:
        "https://images.pexels.com/photos/17369137/pexels-photo-17369137/free-photo-of-sandwich-on-a-plate.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Tuna Salad Sandwich",
      recipe: [
        "Whole wheat wrap",
        "Tuna salad",
        "lettuce",
        "tomato",
      ],
      time: "Lunch",
    },
    {
      id: 4,
      trainerImg:
        "https://images.pexels.com/photos/10296433/pexels-photo-10296433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Shrimp Tacos",
      recipe: [
        "Corn tortillas (3)",
        "Grilled shrimp (5 oz)",
        "Cabbage slaw",
        "avocado, and salsa"
      ],
      time: "Dinner",
    },
  ];
  const Gday5 = [
    {
      id: 1,
      trainerImg:
        "https://images.pexels.com/photos/845811/pexels-photo-845811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Scrambled Eggs with Spinach and Cheese",
      recipe: ["Scrambled eggs (2)", "Spinach (1 cup)", "Shredded cheese (2 tbsp)"],
      time: "Breakfast",
    },
    {
      id: 2,
      trainerImg:
        "https://images.pexels.com/photos/128865/pexels-photo-128865.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Yogurt with granola",
      recipe: ["Yogurt", "granola (1/2 cup)"],
      time: "Snack",
    },
    {
      id: 3,
      trainerImg:
        "https://images.pexels.com/photos/764925/pexels-photo-764925.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Chicken and Veggie Bowl",
      recipe: [
        "Brown rice (1 cup)",
        "Grilled chicken breast (4 oz)",
        "Steamed mixed vegetables",
      ],
      time: "Lunch",
    },
    {
      id: 4,
      trainerImg:
        "https://images.pexels.com/photos/4210799/pexels-photo-4210799.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Pork Chops with Sweet Potato Mash",
      recipe: [
        "Grilled pork chops (5 oz)",
        "Sweet potato mash (1 cup)",
        "Steamed green beans",
      ],
      time: "Dinner",
    },
  ];
  const Gday6 = [
    {
      id: 1,
      trainerImg:
        "https://images.pexels.com/photos/3780469/pexels-photo-3780469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Pancakes with Berries",
      recipe: ["Whole grain pancakes (2)", "Fresh berries (1/2 cup)", "Maple syrup (1 tbsp)"],
      time: "Breakfast",
    },
    {
      id: 2,
      trainerImg:
        "https://images.pexels.com/photos/7936646/pexels-photo-7936646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Hard-boiled eggs",
      recipe: [null],
      time: "Snack",
    },
    {
      id: 3,
      trainerImg:
        "https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Lentil Soup",
      recipe: ["Lentil soup (1 bowl)", "Whole grain roll"],
      time: "Lunch",
    },
    {
      id: 4,
      trainerImg:
        "https://images.pexels.com/photos/128408/pexels-photo-128408.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Spaghetti Bolognese",
      recipe: ["Whole grain spaghetti (1 cup)", "Ground beef bolognese sauce (5 oz)"],
      time: "Dinner",
    },
  ];
  const Gday7 = [
    {
      id: 1,
      trainerImg:
        "https://images.pexels.com/photos/4397288/pexels-photo-4397288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Chia Seed Pudding",
      recipe: ["Chia seeds (3 tbsp) soaked in almond milk overnight", "Topped with fresh berries", "drizzle of honey"],
      time: "Breakfast",
    },
    {
      id: 2,
      trainerImg:
        "https://images.pexels.com/photos/4198048/pexels-photo-4198048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Cottage cheese with pineapple",
      recipe: [null],
      time: "Snack",
    },
    {
      id: 3,
      trainerImg:
        "https://images.pexels.com/photos/4374580/pexels-photo-4374580.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Grilled Vegetable and Hummus Wrap",
      recipe: [
        "Whole wheat wrap",
        "Grilled vegetables ",
        "Hummus (3 tbsp)",
      ],
      time: "Lunch",
    },
    {
      id: 4,
      trainerImg:
        "https://images.pexels.com/photos/2418486/pexels-photo-2418486.jpeg",
      name: "Roasted Chicken with Quinoa",
      recipe: ["Roasted chicken breast (5 oz)", "Quinoa (1 cup)", "Steamed broccoli", "carrots"],
      time: "Dinner",
    },
  ];
  

  return (
    <>
      <div
        className="w-full h-[55vh] flex items-center justify-center flex-col lg:py-16 md:py-14 sm:py-12 
      py-10 lg:px-24 md:px-16 sm:px-6 px-4 relative z-10"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="w-full h-full bg-black/50 absolute top-0 left-0 -z-10"></div>
        <h1 className="lg:text-6x1 md:text-5xl sm:text-4xl text-4xl font-bold text-gray-200 uppercase mb-4 text-center">
          Diet <span className="text-orange-600"> Plan</span>
        </h1>

        <p className="text-lg text-white font-medium mb-8 text-center">
          Welcome to our comprehensive diet plan designed to support your health
          and fitness goals.
        </p>
      </div>

      {/* weight loss */}
      <div
        className="w-full h-auto flex items-start  flex-col lg:mt-1
         md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4"
      >
        <h6 className="text-4xl font-medium text-gray-200 flex items-center gap-x-2 mb-6">
          <Dumbbell className="w-7 h-7 -rotate-45 text-orange-600" />
          Weight Loss
        </h6>
        <p className="text-lg text-gray-300 font-medium mb-8 text-start">
          Creating a weight loss meal plan involves incorporating a balance of
          macronutrients, proper portion sizes, and nutrient-dense foods. Below
          is a sample 7-day meal plan with recipes for breakfast, lunch, dinner,
          and snacks.
        </p>
      </div>

      <div
        className="w-full h-auto flex items-start justify-center flex-col lg:py-2
         md:py-14 sm:py-12 py-10 lg:px-24 md: px-16 sm:px-6 px-4"
      >
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <h6 className="text-lg font-medium text-gray-200 flex items-center gap-x-2 mb-6">
                <Dumbbell className="w-4 h-4 -rotate-45 text-orange-600" />
                Day 1
              </h6>
            </AccordionTrigger>
            <AccordionContent>
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
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              <h6 className="text-lg font-medium text-gray-200 flex items-center gap-x-2 mb-6">
                <Dumbbell className="w-4 h-4 -rotate-45 text-orange-600" />
                Day 2
              </h6>
            </AccordionTrigger>
            <AccordionContent>
              <div
                className="w-full h-auto flex items-center justify-center lg:gap-x-8 md:gap-x-6 sm:gap-x-4 gap-x-3 
        lg:gap-y-8 md:gap-y-6 sm:gap-y-4 gap-y-3 flex-wrap mb-10"
              >
                {day2.map((data) => (
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
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              <h6 className="text-lg font-medium text-gray-200 flex items-center gap-x-2 mb-6">
                <Dumbbell className="w-4 h-4 -rotate-45 text-orange-600" />
                Day 3
              </h6>
            </AccordionTrigger>
            <AccordionContent>
              <div
                className="w-full h-auto flex items-center justify-center lg:gap-x-8 md:gap-x-6 sm:gap-x-4 gap-x-3 
        lg:gap-y-8 md:gap-y-6 sm:gap-y-4 gap-y-3 flex-wrap mb-10"
              >
                {day3.map((data) => (
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
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              <h6 className="text-lg font-medium text-gray-200 flex items-center gap-x-2 mb-6">
                <Dumbbell className="w-4 h-4 -rotate-45 text-orange-600" />
                Day 4
              </h6>
            </AccordionTrigger>
            <AccordionContent>
              <div
                className="w-full h-auto flex items-center justify-center lg:gap-x-8 md:gap-x-6 sm:gap-x-4 gap-x-3 
        lg:gap-y-8 md:gap-y-6 sm:gap-y-4 gap-y-3 flex-wrap mb-10"
              >
                {day4.map((data) => (
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
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>
              <h6 className="text-lg font-medium text-gray-200 flex items-center gap-x-2 mb-6">
                <Dumbbell className="w-4 h-4 -rotate-45 text-orange-600" />
                Day 5
              </h6>
            </AccordionTrigger>
            <AccordionContent>
              <div
                className="w-full h-auto flex items-center justify-center lg:gap-x-8 md:gap-x-6 sm:gap-x-4 gap-x-3 
        lg:gap-y-8 md:gap-y-6 sm:gap-y-4 gap-y-3 flex-wrap mb-10"
              >
                {day5.map((data) => (
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
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>
              <h6 className="text-lg font-medium text-gray-200 flex items-center gap-x-2 mb-6">
                <Dumbbell className="w-4 h-4 -rotate-45 text-orange-600" />
                Day 6
              </h6>
            </AccordionTrigger>
            <AccordionContent>
              <div
                className="w-full h-auto flex items-center justify-center lg:gap-x-8 md:gap-x-6 sm:gap-x-4 gap-x-3 
        lg:gap-y-8 md:gap-y-6 sm:gap-y-4 gap-y-3 flex-wrap mb-10"
              >
                {day6.map((data) => (
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
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger>
              <h6 className="text-lg font-medium text-gray-200 flex items-center gap-x-2 mb-6">
                <Dumbbell className="w-4 h-4 -rotate-45 text-orange-600" />
                Day 7
              </h6>
            </AccordionTrigger>
            <AccordionContent>
              <div
                className="w-full h-auto flex items-center justify-center lg:gap-x-8 md:gap-x-6 sm:gap-x-4 gap-x-3 
        lg:gap-y-8 md:gap-y-6 sm:gap-y-4 gap-y-3 flex-wrap mb-10"
              >
                {day7.map((data) => (
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
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      {/* weight gain */}
      <div
        className="w-full h-auto flex items-start  flex-col lg:mt-1
         md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4"
      >
        <h6 className="text-4xl font-medium text-gray-200 flex items-center gap-x-2 mb-6">
          <Dumbbell className="w-7 h-7 -rotate-45 text-orange-600" />
          Weight Gain
        </h6>
        <p className="text-lg text-gray-300 font-medium text-start">
          Gaining weight healthily requires a balanced approach, focusing on
          nutrient-dense foods, ample protein, healthy fats, and complex
          carbohydrates. Here’s a sample meal plan and recipes to help you gain
          weight in a nutritious manner.
        </p>
      </div>

      <div
        className="w-full h-auto flex items-start justify-center flex-col lg:py-2
         md:py-14 sm:py-12 py-10 lg:px-24 md: px-16 sm:px-6 px-4"
      >
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <h6 className="text-lg font-medium text-gray-200 flex items-center gap-x-2 mb-6">
                <Dumbbell className="w-4 h-4 -rotate-45 text-orange-600" />
                Day 1
              </h6>
            </AccordionTrigger>
            <AccordionContent>
              <div
                className="w-full h-auto flex items-center justify-center lg:gap-x-8 md:gap-x-6 sm:gap-x-4 gap-x-3 
        lg:gap-y-8 md:gap-y-6 sm:gap-y-4 gap-y-3 flex-wrap mb-10"
              >
                {Gday1.map((data) => (
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
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              <h6 className="text-lg font-medium text-gray-200 flex items-center gap-x-2 mb-6">
                <Dumbbell className="w-4 h-4 -rotate-45 text-orange-600" />
                Day 2
              </h6>
            </AccordionTrigger>
            <AccordionContent>
              <div
                className="w-full h-auto flex items-center justify-center lg:gap-x-8 md:gap-x-6 sm:gap-x-4 gap-x-3 
        lg:gap-y-8 md:gap-y-6 sm:gap-y-4 gap-y-3 flex-wrap mb-10"
              >
                {Gday2.map((data) => (
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
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              <h6 className="text-lg font-medium text-gray-200 flex items-center gap-x-2 mb-6">
                <Dumbbell className="w-4 h-4 -rotate-45 text-orange-600" />
                Day 3
              </h6>
            </AccordionTrigger>
            <AccordionContent>
              <div
                className="w-full h-auto flex items-center justify-center lg:gap-x-8 md:gap-x-6 sm:gap-x-4 gap-x-3 
        lg:gap-y-8 md:gap-y-6 sm:gap-y-4 gap-y-3 flex-wrap mb-10"
              >
                {Gday3.map((data) => (
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
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              <h6 className="text-lg font-medium text-gray-200 flex items-center gap-x-2 mb-6">
                <Dumbbell className="w-4 h-4 -rotate-45 text-orange-600" />
                Day 4
              </h6>
            </AccordionTrigger>
            <AccordionContent>
              <div
                className="w-full h-auto flex items-center justify-center lg:gap-x-8 md:gap-x-6 sm:gap-x-4 gap-x-3 
        lg:gap-y-8 md:gap-y-6 sm:gap-y-4 gap-y-3 flex-wrap mb-10"
              >
                {Gday4.map((data) => (
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
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>
              <h6 className="text-lg font-medium text-gray-200 flex items-center gap-x-2 mb-6">
                <Dumbbell className="w-4 h-4 -rotate-45 text-orange-600" />
                Day 5
              </h6>
            </AccordionTrigger>
            <AccordionContent>
              <div
                className="w-full h-auto flex items-center justify-center lg:gap-x-8 md:gap-x-6 sm:gap-x-4 gap-x-3 
        lg:gap-y-8 md:gap-y-6 sm:gap-y-4 gap-y-3 flex-wrap mb-10"
              >
                {Gday5.map((data) => (
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
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>
              <h6 className="text-lg font-medium text-gray-200 flex items-center gap-x-2 mb-6">
                <Dumbbell className="w-4 h-4 -rotate-45 text-orange-600" />
                Day 6
              </h6>
            </AccordionTrigger>
            <AccordionContent>
              <div
                className="w-full h-auto flex items-center justify-center lg:gap-x-8 md:gap-x-6 sm:gap-x-4 gap-x-3 
        lg:gap-y-8 md:gap-y-6 sm:gap-y-4 gap-y-3 flex-wrap mb-10"
              >
                {Gday6.map((data) => (
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
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger>
              <h6 className="text-lg font-medium text-gray-200 flex items-center gap-x-2 mb-6">
                <Dumbbell className="w-4 h-4 -rotate-45 text-orange-600" />
                Day 7
              </h6>
            </AccordionTrigger>
            <AccordionContent>
              <div
                className="w-full h-auto flex items-center justify-center lg:gap-x-8 md:gap-x-6 sm:gap-x-4 gap-x-3 
        lg:gap-y-8 md:gap-y-6 sm:gap-y-4 gap-y-3 flex-wrap mb-10"
              >
                {Gday7.map((data) => (
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
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div
        className="w-full h-auto flex items-center justify-center flex-col lg:py-16
         md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4"
      ></div>
      
    </>
  );
};

export default Plan;
