import React from "react";
import Navbar from "./Components/Navbar";
import Features from "./Components/Features";
import EngineCards from "./Components/EngineCards";
import PartsCards from "./Components/PartsCards";
import FooterSection from "./Components/FooterSection";
import Testimonials from "./Components/Testimonials";
import PromoSection from "./Components/PromoSection";
import HeroSection from "./Components/HeroSection";

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Features />
      <PromoSection />
      <EngineCards />
      <PartsCards />

      <Testimonials />
      <FooterSection />
    </div>
  );
};

export default App;
