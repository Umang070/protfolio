import React from "react";
import "../assets/css/About.css";
import homeImage from "../assets/images/about.png";
const About = () => {
  return (
    <div className="h-100 about bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="about-container">
        <div className="about-section">
          <div className="pb-8">
            <p className="font-lato text-3xl font-semibold text-primary-600 sm:text-4xl">
              Let Me Introduce Myself
            </p>
          </div>

          <p className="mx-auto mt-5 text-base leading-relaxed opacity-80">
            I am a web developer, working in both, backend and frontend
            programming. Excited for improving my skills and learning new
            technologies. I'm open to learn and work with any web technology and
            currently doing freelance gigs.
          </p>

          <br />

          <p className="mx-auto mt-5 text-base leading-relaxed opacity-80">
            I like to code matters from scratch and love the idea of bringing
            thoughts to life. Connect with me to get your project done. <br />{" "}
            <br />I value minimalistic designs, thoughtful branding of the
            content, and customer relatable experience. Let’s discover together
            how we can make your project convert better!
          </p>
        </div>
        <div class="mb-10 md:mb-0 md:w-1/2 lg:w-full lg:max-w-lg  md:pl-16 lg:flex-grow lg:pl-24">
          <img src={homeImage} alt="home pic" className="img-fluid" />
        </div>
      </div>
      <div></div>
    </div>
  );
};
export default About;
