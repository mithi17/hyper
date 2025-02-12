import React, { useState } from "react";
import { Link } from "react-router-dom"; // Changed to react-router-dom for routing
import Button from "../layouts/Button";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Contact from "../models/Contact";
import logo from "../assets/img/logo.png";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  const openForm = () => {
    setShowForm(true);
    setMenu(false);
  };

  const closeForm = () => {
    setShowForm(false);
  };

  return (
    <div className="fixed w-full z-10 text-black ">
      <div className="">
        <div className="flex flex-row justify-between p-5 md:px-32 px-5 bg-NavbarColour shadow-[rgba(68, 208, 199, 0.8)]">
          <div className="flex flex-row items-center cursor-pointer">
            <Link to="/" onClick={closeMenu}>
              <img src={logo} alt="Logo" className="h-8 mr-2" />
              {/* <h1 className="text-2xl font-semibold">HyperSpace</h1> */}
            </Link>
          </div>

          <nav className="hidden lg:flex flex-row items-center text-lg font-medium gap-8">
            <Link to="/" className="hover:text-hoverColor transition-all cursor-pointer" onClick={closeMenu}>
              Home
            </Link>
            <Link to="/about" className="hover:text-hoverColor transition-all cursor-pointer" onClick={closeMenu}>
              About Us
            </Link>
            <Link to="/services" className="hover:text-hoverColor transition-all cursor-pointer" onClick={closeMenu}>
              Our Services
            </Link>
            <Link to="/courses" className="hover:text-hoverColor transition-all cursor-pointer" onClick={closeMenu}>
              Training Courses
            </Link>
            <Link to="/career/career-1" className="hover:text-hoverColor transition-all cursor-pointer" onClick={closeMenu}>
              Our Careers
            </Link>
          </nav>

          <div className="hidden lg:flex">
            <button
              className="bg-brightColor text-white px-4 py-2 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out"
              onClick={openForm}
            >
              Contact Us
            </button>
          </div>

          {showForm && <Contact closeForm={closeForm} />}

          <div className="lg:hidden flex items-center">
            {menu ? (
              <AiOutlineClose size={28} onClick={handleChange} />
            ) : (
              <AiOutlineMenu size={28} onClick={handleChange} />
            )}
          </div>
        </div>

        <div
          className={`${
            menu ? "translate-x-0" : "-translate-x-full"
          } lg:hidden flex flex-col absolute bg-backgroundColor text-white left-0 top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
        >
          <Link to="/" className="hover:text-hoverColor transition-all cursor-pointer" onClick={closeMenu}>
            Home
          </Link>
          <Link to="/about" className="hover:text-hoverColor transition-all cursor-pointer" onClick={closeMenu}>
            About Us
          </Link>
          <Link to="/services" className="hover:text-hoverColor transition-all cursor-pointer" onClick={closeMenu}>
            Our Services
          </Link>
          <Link to="/courses" className="hover:text-hoverColor transition-all cursor-pointer" onClick={closeMenu}>
            Training Courses
          </Link>
          <Link to="/career/career-1" className="hover:text-hoverColor transition-all cursor-pointer" onClick={closeMenu}>
            Our Careers
          </Link>

          <div className="lg:hidden">
            <button
              className="bg-brightColor text-white px-4 py-2 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out"
              onClick={openForm}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;