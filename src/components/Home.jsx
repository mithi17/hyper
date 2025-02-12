import React, { useEffect } from "react";

import Button from "../layouts/Button";
import './cStyle.css'
import webdev from '../assets/img/web-dev.jpg'
import mobdev from '../assets/img/mobile-app.jpg'

const Home = () => {

  useEffect(() => {
    const rows = document.querySelectorAll('.row');

    rows.forEach((row) => {
      let colOpen = row.querySelector(".show-col"),
          colClose = row.querySelector(".close-col");

      colOpen.addEventListener("click", function () {
        row.classList.add("box-active");
      });

      colClose.addEventListener("click", function () {
        row.classList.remove("box-active");
      });
    });

    // Cleanup function to remove event listeners
    return () => {
      rows.forEach((row) => {
        let colOpen = row.querySelector(".show-col"),
            colClose = row.querySelector(".close-col");

        colOpen.removeEventListener("click", function () {
          row.classList.add("box-active");
        });

        colClose.removeEventListener("click", function () {
          row.classList.remove("box-active");
        });
      });
    };
  }, []); // Empty dependency array ensures this runs only on mount and unmount

  return (
    <>
      <div className=" min-h-screen flex flex-col justify-center text-white bg-[url('assets/img/home.jpg')] bg-no-repeat bg-cover opacity-90 lg:px-32 px-5 pt-24 lg:pt-16">
        <div className=" w-full lg:w-4/5 space-y-5 mt-10">
          <h1 className="text-5xl font-bold leading-tight">
            Your Trusted End to End Technology Partner
          </h1>
          <h3>For enterprises, SMEs, and startups: website building agency & More.!</h3>
          <p>
            We provide a wide range of services to develop your business website, software development, Digital marketing services that can help you achieve your business goals.
          </p>

          <Button title="See Services" />
        </div>
      </div>


      <div>
        <br />
        <p  id="" className="text-3xl text-center">Our Services</p>
        <div className="row">
          <div className="col p-2">
            <span className="text-2xl">Website Development</span>
            <p>Whether you need to build a custom web app development  from scratch, Legacy backend migration, or streamline existing front-end functionality enhancement, as a dedicated web apps development company, we can accomplish that in an efficient and cost-effective manner. </p>
            <button type="button" className="show-col">Read More</button>
          </div>
          <div className="col">
            <img src={webdev} alt="Web Development" />
          </div>
          <div className="col p-2">
            <p>Whether you need to build a custom web app development  from scratch, Legacy backend migration, or streamline existing front-end functionality enhancement, as a dedicated web apps development company, we can accomplish that in an efficient and cost-effective manner. We offer portal development solutions, document management system, secure  portal setup, and offer maintenance, support, and up-gradation.</p>
            <button type="button" className="close-col">Close</button>
          </div>
        </div>

        <div className="row">
          <div className="col p-2">
            <span className="text-2xl">Mobile Application Development</span>
            <p>we specialize in creating innovative mobile solutions and engaging mobile app solutions that transform your ideas into reality.</p>
            <button type="button" className="show-col">Read More</button>
          </div>
          <div className="col">
            <img src={mobdev} alt="Mobile Development" />
          </div>
          <div className="col p-2">
            <p>we specialize in creating innovative mobile solutions and engaging mobile app solutions that transform your ideas into reality. our talented team of mobile app developers is committed to building intuitive and feature-rich applications that captivate your users and drive your mobile success.</p>
            <button type="button ```javascript" className="close-col">Close</button> 
          </div>
        </div>
      </div>

      {/* Faq section */}

    </>
  );
};

export default Home;