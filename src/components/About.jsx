import React from "react";
import img from "../assets/img/about.jpg";


const About = () => {
  return (
    <div className=" min-h-screen flex flex-col lg:flex-row items-center lg:px-32 px-5 pt-24 lg:pt-32 gap-5">
      <div className=" w-full lg:w-3/4 space-y-4">
        <h1 className=" text-4xl font-semibold text-center lg:text-start">About Us</h1>
        <h1 className=" text-justify lg:text-start">
          OUR CORE COMPETENCY
        </h1>
        <p className="text-justify lg:text-start">
        Welcome to HYPERSPACESOFT, your trusted partner in transforming digital ideas into reality. We are a dynamic team of creative minds and technical experts dedicated to delivering innovative solutions across various digital domains
        </p>
        <p className="text-justify lg:text-start">
        We brings together a group of dedicated individuals to help you bring your ideas to life and give your users an amazing digital experience. From website development to design to software as a service platforms, which is a way of providing applications over the internet, the solutions we engineer help our businesses increase productivity and fuel growth.
        </p>
      </div>
      <div className=" w-full lg:w-3/4">
        <img className=" rounded-lg" src={img} alt="img" />
      </div>
    </div>
  );
};

export default About;
