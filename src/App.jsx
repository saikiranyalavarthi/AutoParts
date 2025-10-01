import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Features from "./Components/Features";
import EngineCards from "./Components/EngineCards";
import PartsCards from "./Components/PartsCards";
import FooterSection from "./Components/FooterSection";
import Testimonials from "./Components/Testimonials";
import PromoSection from "./Components/PromoSection";
import HeroSection from "./Components/HeroSection";
import BlogSection from "./Components/BlogSection";
import Engines from "./Pages/Engines";
import Transmisson from "./Pages/Transmisson";
import PartsList from "./Pages/PartsList";

// Import your new Engines page

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <Features />
              <PromoSection />
              <EngineCards />
              <PartsCards />
              <Testimonials />
              <BlogSection />
            </>
          }
        />

        {/* Engines Page */}
        <Route path="/engines" element={<Engines />} />
        <Route path="/Transmisson" element={<Transmisson />} />
        <Route path="/PartsList" element={<PartsList />} />
      </Routes>
      <FooterSection />
    </Router>
  );
};

export default App;
