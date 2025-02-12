import React from "react";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Blogs from "./components/Blogs";
import Footer from "./components/Footer";
import Training from "./components/Training";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Career from "./pages/Career";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/courses" element={<Training />} />
            <Route path="/career">
              <Route path="career-1" element={<Blogs />} />
              <Route path="Software-development" element={<Career />} />
            </Route>

            {/* Add a 404 Not Found route */}
            <Route path="*" element={<h2>404 Not Found</h2>} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;