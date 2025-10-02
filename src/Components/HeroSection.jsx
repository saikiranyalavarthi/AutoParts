import React, { useState, useEffect } from "react";

import Hero1 from "../assets/Heroimages/Hero1.jpg";
import Hero2 from "../assets/Heroimages/Hero2.jpg";
import Hero3 from "../assets/Heroimages/Hero3.jpg";
import Hero4 from "../assets/Heroimages/Hero4.jpg";

const images = [Hero1, Hero2, Hero3, Hero4];

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const yearOptions = [];
  for (let y = 2000; y <= 2025; y++) {
    yearOptions.push(
      <option key={y} value={y}>
        {y}
      </option>
    );
  }

  return (
    <section className="relative bg-gray-100 py-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 px-6">
        {/* Left: Carousel */}
        <div className="relative flex-1 w-full md:w-1/2 h-96 md:h-[500px] rounded-xl overflow-hidden shadow-xl">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Slide ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover rounded-xl transition-opacity duration-1000 ${
                index === currentImage ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          <div className="absolute left-20 top-60 text-white max-w-xs">
            <h2 className="text-8xl md:text-4xl font-extrabold leading-tight drop-shadow-lg">
              OEM Auto Parts <br /> for Sale
            </h2>
            <button className="mt-6 bg-yellow-400 hover:bg-yellow-500 transition text-black font-semibold px-6 py-2 rounded shadow-lg hover:scale-105 transform">
              SHOP NOW
            </button>
          </div>
        </div>

        {/* Right: Form + Quote */}
        <div className="flex-1 w-full md:w-1/2 flex flex-col gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition">
            <h3 className="text-blue-900 text-xl font-semibold text-center mb-6">
              FIND MY PART NOW
            </h3>
            <form className="space-y-5">
              {["year", "make", "model", "part"].map((field) => (
                <div className="relative" key={field}>
                  <select
                    id={field}
                    className="peer w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  >
                    <option value="">
                      {`Select ${
                        field.charAt(0).toUpperCase() + field.slice(1)
                      }`}
                    </option>
                    {field === "year" && yearOptions}
                  </select>
                  <label
                    htmlFor={field}
                    className="absolute left-3 -top-3.5 text-gray-500 text-sm bg-white px-1 transition-all peer-focus:-top-3.5 peer-focus:text-blue-600 peer-focus:text-sm"
                  >
                    {field.charAt(0).toUpperCase() + field.slice(1)}
                  </label>
                </div>
              ))}
              <button className="w-full bg-yellow-400 hover:bg-yellow-500 transition text-black font-semibold py-2 rounded mt-2 hover:scale-105 transform">
                FIND MY PART
              </button>
            </form>
          </div>

          <div
            className="relative rounded-xl shadow-lg p-6 flex flex-col gap-3 transition transform hover:scale-105 bg-cover bg-center"
            style={{ backgroundImage: `url(${Hero4})` }} // replace with your image path
          >
            {/* Overlay for dark tint */}
            <div className="absolute inset-0  bg-opacity-60 rounded-xl"></div>

            {/* Content */}
            <div className="relative z-10 text-white">
              <h4 className="text-xl font-semibold">
                Used Engines & Transmissions
              </h4>
              <p className="text-sm">
                Get top quality, well-tested used engines and transmissions
              </p>
              <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-4 rounded transition transform hover:scale-105 mt-2">
                GET QUOTE
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
