import React from "react";
import { Link } from "react-router-dom";
import ProfilePicture from "../assets/images/profile-pitcure.jpg";
import "../assets/css/Home.css";
import Type from "../helper/Type";
export default function Home() {
  return (
    // <div
    //   name="home"
    //   className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 home"
    // >
    //   <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
    //     <div className="small-screen hidden">
    //       <img
    //         // src={}
    //         alt="profile"
    //         className="rounded-2xl mx-auto w-2/3 md:w-full"
    //       />
    //     </div>
    //     <div className="flex flex-col justify-center h-full">
    //       <h2 className="text-4xl sm:text-7xl font-bold text-white">
    //         I'm a Full Stack Web Developer
    //       </h2>
    //       <p className="text-gray-500 py-4 max-w-md">
    //         I have 2 years of experience building websites and desgining
    //         software. I love to work on web application using technologies like
    //         React, Tailwind, Next JS and GraphQL.
    //       </p>

    //       <div className="portfolio-btn">
    //         <Link
    //           to="portfolio"
    //           smooth
    //           duration={500}
    //           className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
    //         >
    //           Portfolio
    //           <span className="group-hover:rotate-90 duration-300">
    //             {/* <MdOutlineKeyboardArrowRight size={25} className="ml-1" /> */}
    //           </span>
    //         </Link>
    //       </div>
    //     </div>
    //     <div className="big-screen">
    //       <img
    //         // src={HeroImage}
    //         alt="profile"
    //         className="rounded-2xl mx-auto w-2/3 md:w-full"
    //       />
    //     </div>
    //   </div>
    // </div>
    <div className="home home-introduction">
      <div className="introduction-container">
        {/* <div className="small-screen">
          <img src={ProfilePicture} alt="profile" className="profile-picture" />
        </div> */}
        <div className="intro-section">
          <h2 className="intro-title">
            Hi There !{" "}
            <span className="wave" role="img" aria-labelledby="wave">
              👋🏻
            </span>
          </h2>
          <h3 className="text-2xl sm:text-5xl font-bold text-white">
            I'M <strong> Umang Patel</strong>
          </h3>
          <div className="typewriter mt-4 max-w-md">
            <Type />
          </div>
          <p className="text-gray-500 py-4 max-w-md">
            I have 2 years of experience building websites and desgining
            software. I love to work on web application using technologies like
            React, Tailwind, Next JS and GraphQL.
          </p>
        </div>
      </div>
    </div>
  );
}
