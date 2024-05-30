import React from "react";
import SecondaryLink from "../components/LinkBtn/SecondaryLink";
import {
  Dumbbell,
  HeartHandshake,
  GraduationCap,
  UsersRound,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
const AboutUs = () => {
  return (
    <>
      <div className="w-full h-auto overflow-hidden">
        <div
          className="w-full h-auto flex items-center justify-center flex-col lg:py-12
         md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4"
        >
          <h6 className="text-4xl font-medium text-gray-200 flex items-center gap-x-2 mb-6">
            <Dumbbell className="w-7 h-7 -rotate-45 text-orange-600" />
            About Us
          </h6>
        </div>
        <div
          className="w-full h-auto flex items-center justify-between gap-7 lg:py-16
         md:py-14 sm:py-16 py-10 lg:px-24 md:px-16 sm:px-6 px-4 flex-wrap-reverse"
        >
          <div className="lg:w-[38%] md:w-full sm:w-full w-full h-auto relative overflow-hidden rounded-lg">
            <img
              src="https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg"
              alt="About"
              className="w-full lg:h-[70vh] md:h-[68vh] sm:h-[60vh] h-[55] object-cover"
            />
          </div>
          <div className="lg:w-[50%] md:w-full sm:w-full w-full h-auto lg:text-start md:text-start sm:text-start text-center">
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
              nutritious eating, and mental well-being. FitFusionYouth stands at
              the forefront of this movement, dedicated to empowering youth to
              embrace healthier and more active lives. Our mission is not just a
              statement; it's a commitment to making a tangible difference in
              the lives of young people everywhere.
            </p>

            <h1
              className="lg:text-3xl md:text-3xl sm:text-2xl text-xl font-semibold lg:py-4
            text-gray-200 mb-4 leading-normal lg:pe-5 md:pe-4 sm:pe-1 pe-0"
            >
              Our Values
            </h1>

            <h6 className="text-xl font-medium text-gray-200 flex items-start gap-x-2 mb-6">
              <HeartHandshake
                className="w-10 h-10  text-orange-600 bg-orange-900 py-1 px-1
            rounded-md text-white"
              />
              Commitment to Health
            </h6>
            <h6 className="text-xl font-medium text-gray-200 flex items-start gap-x-2 mb-6">
              <UsersRound
                className="w-10 h-10  text-orange-600 bg-orange-900 py-1 px-1
            rounded-md text-white"
              />
              Inclusivity
            </h6>
            <h6 className="text-xl font-medium text-gray-200 flex items-start gap-x-2 mb-6">
              <GraduationCap
                className="w-10 h-10  text-orange-600 bg-orange-900 py-1 px-1
            rounded-md text-white"
              />
              Education
            </h6>
            <SecondaryLink
              link="/membership"
              className="lg:w-[40%] md:w-auto sm:w-full w-full px-7 py-2 text-base font-medium uppercase justify-center"
            >
              Become a Member
            </SecondaryLink>
          </div>
        </div>
        <div
          className="w-full h-auto flex items-center justify-center flex-col lg:py-16
         md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4"
        >
          <h1 className="text-4xl font-medium text-gray-200 flex items-center gap-x-2 mb-6">
            <Dumbbell className="w-7 h-7 -rotate-45 text-orange-600" />
            FAQs
          </h1>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Is FitFusionYouth suitable for beginners ?
              </AccordionTrigger>
              <AccordionContent>
                Absolutely! Our platform offers a variety of beginner-friendly
                workouts, resources, and guidance to help you kickstart your
                fitness journey.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                Is there a membership fee to join FitFusionYouth ?
              </AccordionTrigger>
              <AccordionContent>
                Yes, we offer basic, premium, and VIP membership plans.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                Can I cancel my premium membership at any time ?
              </AccordionTrigger>
              <AccordionContent>
                Yes, you can cancel your premium membership at any time. Simply
                visit your account settings and follow the cancellation
                instructions.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                What types of workouts are available on FitFusionYouth ?
              </AccordionTrigger>
              <AccordionContent>
                We offer a wide range of workouts including strength training,
                cardio, yoga, and more. Our library is constantly updated with
                new and exciting routines to keep you motivated.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>
                Does FitFusionYouth offer nutrition guidance ?
              </AccordionTrigger>
              <AccordionContent>
                Yes, we provide expert nutrition advice, meal plans, and healthy
                recipes to support your fitness journey.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>
                Can I get help with meal planning ?
              </AccordionTrigger>
              <AccordionContent>
                Of course! Our platform offers tools and resources to help you
                plan your meals and make healthier choices at the grocery store.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
