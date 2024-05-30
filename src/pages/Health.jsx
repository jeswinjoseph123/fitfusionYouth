import React from "react";
import { Dumbbell, MoveRight } from "lucide-react";
const Health = () => {
  return (
    <>
      <div
        className="w-full h-auto flex items-center justify-center flex-col lg:py-16
         md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4"
      >
        <h6 className="text-4xl font-medium text-gray-200 flex items-center gap-x-2 mb-6">
          <Dumbbell className="w-7 h-7 -rotate-45 text-orange-600" />
          Mental Health
        </h6>
        <div
          className="w-full h-auto flex items-center justify-between gap-2 lg:py-16
         md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4 flex-wrap-reverse"
        >
          <div className="lg:w-[38%] md:w-full sm:w-full w-full h-auto relative overflow-hidden rounded-lg">
            <img
              src="https://images.pexels.com/photos/3759657/pexels-photo-3759657.jpeg"
              alt="About"
              className="w-full lg:h-[60vh] md:h-[68vh] sm:h-[60vh] h-[55] object-cover"
            />
          </div>
          <div className="lg:w-[50%] md:w-full sm:w-full w-full h-auto lg:text-start md:text-start sm:text-start text-center">
            <h1
              className="lg: text-3xl md:text-3xl sm:text-2xl text-xl font-semibold
            text-gray-200 mb-4 leading-normal lg:pe-5 md: pe-4 sm:pe-1 pe-0"
            >
              Meditation
            </h1>

            <p className="lg:text-base md:text-base sm:text-sm text-sm text-gray-500 font-medium mb-4">
              Meditation is a powerful tool for enhancing both mental and
              physical well-being. By cultivating present-moment awareness and
              deep relaxation, meditation can reduce stress, anxiety, and
              depression while boosting mood, focus, and overall life
              satisfaction. When combined with regular exercise, meditation can
              create a synergistic effect, leading to improved cardiovascular
              health, flexibility, and strength. Mindful movement practices like
              yoga and tai chi further deepen the mind-body connection, enabling
              individuals to better understand their physical capabilities and
              limitations. Ultimately, integrating meditation into a holistic
              health regimen can unlock a path to greater resilience, vitality,
              and overall quality of life
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
              Yoga
            </h1>

            <p className="lg:text-base md:text-base sm:text-sm text-sm text-gray-500 font-medium mb-4">
              Yoga is a holistic practice that combines physical postures,
              breathing techniques, and meditation to promote overall health and
              fitness. Regular yoga practice can improve cardiovascular health
              by normalizing blood pressure and circulation, as well as enhance
              muscular strength and flexibility. Yoga also helps manage chronic
              diseases such as arthritis, asthma, and multiple sclerosis by
              reducing symptoms and improving quality of life. Additionally,
              yoga has been shown to reduce stress and anxiety, improve sleep,
              and boost mental well-being. By incorporating yoga into a fitness
              routine, individuals can experience a synergistic effect, leading
              to improved overall health and fitness.
            </p>
          </div>
          <div className="lg:w-[38%] md:w-full sm:w-full w-full h-auto relative overflow-hidden rounded-lg">
            <img
              src="https://images.pexels.com/photos/802417/pexels-photo-802417.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="About"
              className="w-full lg:h-[60vh] md:h-[68vh] sm:h-[60vh] h-[55] object-cover"
            />
          </div>
        </div>
      </div>

      {/* banner */}
      <div
        className="w-full h-[55vh] flex items-center justify-center flex-col lg:py-16 md:py-14 sm:py-12 
      py-10 lg:px-24 md:px-16 sm:px-6 px-4 relative z-10"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="w-full h-full bg-black/80 absolute top-0 left-0 -z-10"></div>
        <h1 className="lg:text-6x1 md:text-5xl sm:text-4xl text-4xl font-bold text-gray-200 uppercase mb-4 text-center">
        Minds <span className="text-orange-600">Matter</span>,Every{" "}
          <span className="text-orange-600">Day!</span>
        </h1>

        <p className="text-1g text-gray-300 font-medium mb-8 text-center">
        Your mental health is a priority. Your happiness is essential. Your self-care is a necessity.
        </p>
      </div>

      <div
        className="w-full h-auto flex items-center justify-center flex-col lg:py-16
         md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4"
      >
        <div
          className="w-full h-auto flex items-center justify-between gap-2 lg:py-16
         md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4 flex-wrap-reverse"
        >
          <div className="lg:w-[38%] md:w-full sm:w-full w-full h-auto relative overflow-hidden rounded-lg">
            <img
              src="https://images.pexels.com/photos/903171/pexels-photo-903171.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="About"
              className="w-full lg:h-[60vh] md:h-[68vh] sm:h-[60vh] h-[55] object-cover"
            />
          </div>
          <div className="lg:w-[50%] md:w-full sm:w-full w-full h-auto lg:text-start md:text-start sm:text-start text-center">
            <h1
              className="lg: text-3xl md:text-3xl sm:text-2xl text-xl font-semibold
            text-gray-200 mb-4 leading-normal lg:pe-5 md: pe-4 sm:pe-1 pe-0"
            >
              Aerobic exercise
            </h1>

            <p className="lg:text-base md:text-base sm:text-sm text-sm text-gray-500 font-medium mb-4">
              Aerobic exercise is a cornerstone of overall health and fitness,
              offering a wide range of benefits for both the body and mind.
              Regular aerobic activity strengthens the cardiovascular system,
              lowering blood pressure, regulating blood sugar levels, and
              reducing the risk of heart disease, stroke, and certain cancers.
              It also boosts mood, enhances cognitive function, and improves
              sleep quality. Aerobic exercise comes in many forms, from brisk
              walking and swimming to cycling and dancing. To reap the full
              rewards, experts recommend at least 150 minutes of moderate
              aerobic activity or 75 minutes of vigorous exercise per week. By
              making aerobic exercise a consistent part of a balanced fitness
              regimen, individuals can unlock a path to improved physical and
              mental well-being.
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
              Sleep
            </h1>

            <p className="lg:text-base md:text-base sm:text-sm text-sm text-gray-500 font-medium mb-4">
              Sleep plays a vital role in maintaining overall health and
              fitness. During sleep, the body repairs and regenerates tissues,
              builds bone and muscle, and strengthens the immune system.
              Adequate sleep also improves mental health by reducing stress and
              anxiety, enhancing mood, and improving cognitive function. The
              Centers for Disease Control and Prevention recommend at least
              seven hours of sleep per night. Sleep deprivation can lead to
              weight gain, dementia, heart attack, stroke, high blood pressure,
              and type 2 diabetes. Prioritizing sleep is essential for
              maintaining physical and mental well-being, and it is crucial to
              establish a consistent sleep routine to ensure a restful and
              rejuvenating night's sleep
            </p>
          </div>
          <div className="lg:w-[38%] md:w-full sm:w-full w-full h-auto relative overflow-hidden rounded-lg">
            <img
              src="https://images.pexels.com/photos/3771069/pexels-photo-3771069.jpeg"
              alt="About"
              className="w-full lg:h-[60vh] md:h-[68vh] sm:h-[60vh] h-[55] object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Health;
