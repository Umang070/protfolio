import React from "react";
import { Link } from "react-router-dom";
import ProfilePicture from "../assets/images/profile-pitcure.jpeg";
import "../assets/css/Home.css";
import Type from "../helper/Type";
import AnimatedLottie from "../helper/Lottie";
import codingAnimationData from "../helper/lottie/coding.json";
import Iconify from "./Iconify";
export default function Home() {
  return (
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
          <h3 className="text-2xl sm:text-5xl font-bold text-white max-w-md">
            I'M{" "}
            <span className="text-primary-700 dark:text-primary-300">
              {" "}
              Umang Patel
            </span>
          </h3>
          <div className="typewriter mt-4 max-w-md">
            <Type />
          </div>
          <p className="text-gray-500 py-4 max-w-md">
            I am an enthusiastic software developer passionate about building
            user-centric products and exploring new technologies. With
            experience in AI-driven solutions, real-time systems, and diverse
            tech stacks, I thrive on tackling challenges and delivering
            impactful projects.
          </p>
          <div className="flex w-full py-2">
            <button
              type="submit"
              className="text-md mb-2 inline-flex w-28 items-center justify-evenly rounded-lg border bg-primary-300/10 px-1 py-2.5 font-medium text-primary-50 hover:bg-primary-700/50 focus:outline-none focus:ring-2 dark:border-primary-700 dark:bg-primary-500 dark:hover:bg-primary-700 dark:focus:ring-primary-600"
            >
              Resume
              <Iconify classes="ml-2" icon="fluent:arrow-right-16-filled" />
            </button>
            <button
              type="submit"
              className="text-md mb-2 inline-flex w-28 ml-4 items-center justify-evenly rounded-lg border bg-primary-300/10 px-1 py-2.5 font-medium text-primary-50 hover:bg-primary-700/50 focus:outline-none focus:ring-2 dark:border-primary-700 dark:bg-primary-500 dark:hover:bg-primary-700 dark:focus:ring-primary-600"
            >
              Connect
              <Iconify classes="ml-2" icon="fluent:send-16-filled" />
            </button>
          </div>
        </div>
        <div class="mb-100 md:mb-0 md:w-1/2 lg:w-full lg:max-w-lg  md:pl-16 lg:flex-grow lg:pl-24">
          <AnimatedLottie animationDataFile={codingAnimationData} />
          {/* <img src={ProfilePicture} alt="profile" className="profile-picture" /> */}
        </div>
      </div>
    </div>
  );
}
