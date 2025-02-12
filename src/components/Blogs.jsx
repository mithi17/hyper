//blogs.jsx
import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Button from "../layouts/Button";
import BlogCard from "../layouts/BlogCard";
import soft from "../assets/img/soft.jpg";

const jobPositions = [
  { id: 1, title: "Software Developer", img: soft, link: "/career/Software-development" },
  // Add more job positions here
];

const Blogs = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24">
      <div className="flex flex-col items-center lg:flex-row justify-between">
        <div>
          <h1 className="text-4xl font-semibold text-center lg:text-start">
            Our Careers
          </h1>
          <p className="mt-2 text-center lg:text-start">
            {/* Add a brief description here */}
          </p>
        </div>
        <div className="mt-4 lg:mt-0">
          <Link to="/career/Software-development" className="block">
            <Button title="More Details" />
          </Link>
        </div>
      </div>
      <div className="my-8">
        {jobPositions.map((job) => (
          <div key={job.id}>
            <Link to={job.link} className="block">
              <BlogCard img={job.img} headlines={job.title} className="flex flex-wrap justify-center gap-5" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;