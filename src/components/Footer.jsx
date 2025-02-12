import React from "react";
import { Link } from "react-scroll";
import brochure from "../files/Brochure.pdf"

const Footer = () => {
  const handleDownload = () => {
    // Create a link element
    const link = document.createElement('a');
    link.href = brochure; // Adjust the path as necessary
    link.setAttribute('download', 'Brochure.pdf'); // Set the download attribute
    document.body.appendChild(link);
    link.click(); // Programmatically click the link to trigger the download
    document.body.removeChild(link); // Clean up
  };

  return (
    <div className="bg-backgroundColor text-white rounded-t-3xl mt-8 md:mt-0">
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
        <div className="w-full md:w-1/4">
          <h1 className="font-semibold text-xl pb-4">HyperSpace</h1>
          <p className="text-sm">
            We are passionate about empowering businesses of all sizes to thrive online. Whether you’re a small startup, a growing medium-sized enterprise, or a large corporation, we specialize in providing tailored solutions to enhance your online presence and drive growth.
          </p>
          {/* Download Brochure Button */}
          <button 
            onClick={handleDownload} 
            className="mt-4 bg-brightColor text-white py-2 px-4 rounded"
          >
            Download Brochure
          </button>
        </div>
        {/* Other sections remain unchanged */}
        <div>
          <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">About Us</h1>
          <nav className="flex flex-col gap-2">
            <Link to="about" spy={true} smooth={true} duration={500} className="hover:text-hoverColor transition-all cursor-pointer">About</Link>
            <Link to="services" spy={true} smooth={true} duration={500} className="hover:text-hoverColor transition-all cursor-pointer">Our Services</Link>
            <Link to="doctors" spy={true} smooth={true} duration={500} className="hover:text-hoverColor transition-all cursor-pointer">Training Courses</Link>
          </nav>
        </div>
        <div>
          <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">Services</h1>
          <nav className="flex flex-col gap-2">
            <Link to="services" spy={true} smooth={true} duration={500} className="hover:text-hoverColor transition-all cursor-pointer">Website Development</Link>
            <Link to="services" spy={true} smooth={true} duration={500} className="hover:text-hoverColor transition-all cursor-pointer">Mobile App Development</Link>
            <Link to="services" spy={true} smooth={true} duration={500} className="hover:text-hoverColor transition-all cursor-pointer">Digital Marketing</Link>
            <Link to="services" spy={true} smooth={true} duration={500} className="hover:text-hoverColor transition-all cursor-pointer">Hosting & Domain</Link>
            <Link to="services" spy={true} smooth={true} duration={500} className="hover:text-hoverColor transition-all cursor-pointer">Branding</Link>
          </nav>
        </div>
        <div className="w-full md:w-1/4">
          <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">Contact Us</h1>
          <nav className="flex flex-col gap-2">
            <Link to="/" spy={true} smooth={true} duration={500}></Link>
            <Link to="/" spy={true} smooth={true} duration={500}>support@hyperspacesoft.com</Link>
            <Link to="/" spy={true} smooth={true} duration={500}>+ 91 9444990588</Link>
          </nav>
        </div>
      </div>
      <div>
        <p className="text-center py-4">
          @copyright developed by
          <span className="text-hoverColor"> HyperSpace </span> | All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;