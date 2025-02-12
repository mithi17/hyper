// Services.jsx
import React from "react";
import Button from "../layouts/Button";
import ServicesCard from "../layouts/ServicesCard";
import { FaConnectdevelop } from "react-icons/fa6";
import { MdOutlineDeveloperMode, MdOutlineDeveloperBoard, MdOutlineBrandingWatermark } from "react-icons/md";
import { GrDomain } from "react-icons/gr";

const Services = () => {
  const icon1 = <FaConnectdevelop size={35} className="text-backgroundColor" />;
  const icon2 = <MdOutlineDeveloperMode size={35} className="text-backgroundColor" />;
  const icon3 = <MdOutlineDeveloperBoard size={35} className="text-backgroundColor" />;
  const icon4 = <GrDomain size={35} className="text-backgroundColor" />;
  const icon5 = <MdOutlineBrandingWatermark size={35} className="text-backgroundColor" />;

  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24 lg:pt-16">
      <div className="flex flex-col items-center lg:flex-row justify-between">
        <div>
          <h1 className="text-4xl font-semibold text-center lg:text-start">Our Services</h1>
          <p className="mt-2 text-center lg:text-start"></p>
        </div>
        <div className="mt-4 lg:mt-0">
          <Button title="See Services" />
        </div>
      </div>
      <div className="flex flex-wrap lg:flex-row gap-5 pt-14 justify-center">
        <ServicesCard 
          icon={icon1} 
          title="Website Development" 
          description="Whether you need to build a custom web app from scratch, migrate your legacy backend, existing front-end functionality." 
        />
        <ServicesCard 
          icon={icon2} 
          title="Mobile App Development" 
          description="Stay ahead in the digital age with our strategic digital marketing solutions. We offer comprehensive SEO, social media marketing, and content strategies." 
        />
        <ServicesCard 
          icon={icon3} 
          title="Digital Marketing" 
          description="Stay ahead in the digital age with our strategic digital marketing solutions. We offer comprehensive SEO, social media marketing, and content strategies." 
        />
        <ServicesCard 
          icon={icon4} 
          title="Domain & Hosting" 
          description="We specialize in affordable Linux hosting with Cpanel, business email, domain register." 
        />
        <ServicesCard 
          icon={icon5} 
          title="Branding" 
          description="Branding is the art of connecting a brand’s mission, vision, and purpose with its target audience." 
        />
      </div>
    </div>
  );
};

export default Services;