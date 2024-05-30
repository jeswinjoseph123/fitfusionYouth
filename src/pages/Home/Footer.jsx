import React from "react";
import logo from "../../assets/images/logo-02.png";
import {
  Facebook,
  Instagram,
  MailOpen,
  MapPin,
  Phone,
  Youtube,
} from "lucide-react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div className="w-full h-auto flex items-center justify-center bg-black/30 flex-col py-16 lg:px-24 md:px-16 sm:px-6 px-4">
        <div
          className="w-full h-auto flex items-start lg:justify-between md:justify-between 
             sm:justify-center justify-center gap-5 mb-10 flex-wrap"
        >
          <div
            className="lg:w-[30%] md:w-[30%] sm:w-full w-full h-auto p-2 flex lg:items-start md:items-start sm:items-center 
             items-center flex-col justify-center"
          >
            <img
              src={logo}
              alt=""
              className="h-auto w-[40%] flex items-end gap-x-1 p-2 relative"
            />
            {/* <p
              className="text-base text-gray-500 font-normal mb-4 lg:text-start
            md:text-start sm:text-center text-center"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem voluptatibus error maxime ex reprehenderit obcaecati
              repellat iure beatae doloremque, quae laudantium, qui, sunt
              dignissimos illum itaque esse? Cupiditate, deserunt reiciendis?
            </p> */}
            <div className="w-full h-auto space-y-2">
              <div
                className="w-full h-auto flex items-center lg:justify-start md:justify-start sm:justify-center justify-center gap-x-2 text-gray-400
                hover:text-orange-600 ease-out duration-300 cursor-pointer"
              >
                <MapPin className="w-5 h-5" />
                <p className="text-base">Griffith College, South Circular Road, Dublin 8, D08V04N</p>
              </div>
              <div
                className="w-full h-auto flex items-center lg:justify-start md:justify-start sm:justify-center justify-center gap-x-2 text-gray-400
                hover:text-orange-600 ease-out duration-300 cursor-pointer"
              >
                <MailOpen className="w-5 h-5" />
                <p className="text-base">fitfusionyouth@gmail.com</p>
              </div>
              <div
                className="w-full h-auto flex items-center lg:justify-start md:justify-start sm:justify-center justify-center gap-x-2 text-gray-400
                hover:text-orange-600 ease-out duration-300 cursor-pointer"
              >
                <Phone className="w-5 h-5" />
                <p className="text-base">+353 89 607 5843</p>
              </div>
            </div>
          </div>

          <div
            className="lg:w-[65%] md:w-[65%] sm:w-full w-full h-auto p-2 flex items-center lg:justify-end md:justify-end 
          sm:justify-center justify-center flex-wrap gap-5"
          >
            <div className="lg:w[30%] md:w-[48%] sm:w-[48%] w-full h-auto flex items-center flex-col justify-center">
              <h2 className="text-lg text-gray-200 font-medium mb-4">
                Fittness Plans
              </h2>
              <div className="w-full h-auto">
                <ul className="w-full h-auto space-y-2">
                  <Link to="/exercises">
                    <li
                      className="w-full h-auto text-gray-400 hover:text-orange-600 
               ease-out duration-300 cursor-pointer text-center"
                    >
                      Strength Training
                    </li>
                  </Link>
                  <Link to="/exercises">
                    <li
                      className="w-full h-auto text-gray-400 hover:text-orange-600 
               ease-out duration-300 cursor-pointer text-center"
                    >
                      Cardio
                    </li>
                  </Link>
                  <Link to="/diet-plan">
                    <li
                      className="w-full h-auto text-gray-400 hover:text-orange-600 
               ease-out duration-300 cursor-pointer text-center"
                    >
                      Weight loss
                    </li>
                  </Link>
                  <Link to="/diet-plan">
                    <li
                      className="w-full h-auto text-gray-400 hover:text-orange-600 
               ease-out duration-300 cursor-pointer text-center"
                    >
                      Weight Gain
                    </li>
                  </Link>
                </ul>
              </div>
            </div>
            <div className="lg:w[30%] md:w-[48%] sm:w-[48%] w-full h-auto flex items-center flex-col justify-center">
              <h2 className="text-lg text-gray-200 font-medium mb-4">
                Quick Link
              </h2>
              <div className="w-full h-auto">
                <ul className="w-full h-auto space-y-2">
                  <Link to="/">
                    <li
                      className="w-full h-auto text-gray-400 hover:text-orange-600 
               ease-out duration-300 cursor-pointer text-center"
                    >
                      Home
                    </li>
                  </Link>
                  <Link to="/aboutus">
                    <li
                      className="w-full h-auto text-gray-400 hover:text-orange-600 
               ease-out duration-300 cursor-pointer text-center"
                    >
                      About Us
                    </li>
                  </Link>
                  <Link to="/mental-health">
                    <li
                      className="w-full h-auto text-gray-400 hover:text-orange-600 
               ease-out duration-300 cursor-pointer text-center"
                    >
                      Mental Health
                    </li>
                  </Link>
                  <Link to="/blog">
                    <li
                      className="w-full h-auto text-gray-400 hover:text-orange-600 
               ease-out duration-300 cursor-pointer text-center"
                    >
                      Blog
                    </li>
                  </Link>
                  <Link to="/diet-plan">
                    <li
                      className="w-full h-auto text-gray-400 hover:text-orange-600 
               ease-out duration-300 cursor-pointer text-center"
                    >
                      Diet Plan
                    </li>
                  </Link>
                  <Link to="/exercises">
                    <li
                      className="w-full h-auto text-gray-400 hover:text-orange-600 
               ease-out duration-300 cursor-pointer text-center"
                    >
                      Exercise
                    </li>
                  </Link>
                  <Link to="/contactus">
                    <li
                      className="w-full h-auto text-gray-400 hover:text-orange-600 
               ease-out duration-300 cursor-pointer text-center"
                    >
                      Contact Us
                    </li>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div
          className="w-full h-[1.5px] flex items-center lg:bg-gray-900 md:bg-gray-900 
         sm:bg-transparent bg-transparent relative"
        >
          <div
            className="w-full h-auto flex items-center lg:justify-between md:justify-between sm:justify-center 
        justify-center absolute -top-4 left-[50%] translate-x-[-50%] flex-wrap-reverse gap-y-4"
          >
            <p
              className="text-sm text-gray-400 font-normal lg:bg-gray-900 md:bg-gray-900 
         sm:bg-transparent bg-transparent py-1 px-4 rounded-md"
            >
              @2024 Fitfusion Youth. All rights reserved.
            </p>
            <div className="w-auto h-auto flex items-center justify-center">
              <ul className="w-full h-auto flex items-center justify-center gap-x-4">
                <li
                  className="w-8 h-8 cursor-pointer flex itmes-center justify-center bg-orange-900 py-1 px-4 
            rounded-md text-white hover:text-white ease-out duration-700"
                >
                  <a href="https://www.facebook.com/people/Fitfusionyouth/61560045700654/" target="_blank">
                    <Facebook className="w-5 h-5" />
                  </a>
                </li>
                <li
                  className="w-8 h-8 cursor-pointer flex itmes-center justify-center bg-orange-900 py-1 px-4 
            rounded-md text-white hover:text-white ease-out duration-700"
                >
                  <a href="https://www.instagram.com/fitfusion_youth/" target="_blank">
                    <Instagram className="w-5 h-5" />
                  </a>
                </li>
                <li
                  className="w-8 h-8 cursor-pointer flex itmes-center justify-center bg-orange-900 py-1 px-4 
            rounded-md text-white hover:text-white ease-out duration-700"
                >
                  <a href="https://www.youtube.com/@fitfusionyouth" target="_blank">
                    <Youtube className="w-5 h-5" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
