import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import Health from "./pages/Health";
import Blog from "./pages/Blog";
import Plan from "./pages/Plan";
import Member from "./pages/Member";
import Exercises from "./pages/Exercises";
import Footer from "./pages/Home/Footer";
// import Exercises from "./pages/Exercise2";
function App() {
  return (
    <>
      <div className="w-full min-h-screen h-auto bg-[#171717]">

        <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/aboutus" element={<AboutUs/>}></Route>
          <Route path="/mental-health" element={<Health/>}></Route>
          <Route path="/blog" element={<Blog/>}></Route>
          <Route path="/diet-plan" element={<Plan/>}></Route>
          <Route path="/exercises" element={<Exercises/>}></Route>
          <Route path="/contactus" element={<ContactUs/>}></Route>
          <Route path="/membership" element={<Member/>}></Route>
        </Routes>
        <Footer/>
        </BrowserRouter>

      </div>
    </>
  );
}

export default App;
