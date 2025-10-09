import React from "react";
import { Routes, Route } from "react-router-dom"; // no Router here
import Navbar from "./Components/Navbar";
import Features from "./Components/Features";
// import EngineCards from "./Components/EngineCards";
import PartsCards from "./Components/PartsCards";
import FooterSection from "./Components/FooterSection";
import Testimonials from "./Components/Testimonials";
import PromoSection from "./Components/PromoSection";
import HeroSection from "./Components/HeroSection";
import BlogSection from "./Components/BlogSection";
import Engines from "./Pages/Engines";
import Transmission from "./Pages/Transmission";
import PartsList from "./Pages/PartsList";
import Policies from "./Pages/Policies";
import TestimonialsSection from "./Pages/TestimonialsSection";
import AboutSection from "./Pages/AboutSection";
import Contact from "./Pages/Contact";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <Features />
              <PromoSection />
              {/* <EngineCards /> */}
              <PartsCards />
              <Testimonials />
              <BlogSection />
            </>
          }
        />
        <Route path="/engines" element={<Engines />} />
        <Route path="/transmission" element={<Transmission />} />
        <Route path="/PartsList" element={<PartsList />} />
        <Route path="/policies" element={<Policies />} />
        <Route path="/testimonials" element={<TestimonialsSection />} />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <FooterSection />
    </>
  );
};

export default App;
