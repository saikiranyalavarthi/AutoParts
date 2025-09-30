import React, { useState, useEffect } from "react";

const images = ["/Heroimages/Hero1.jpg", "/Heroimages/Hero2.jpg"];

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);

  // Auto-slide images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Year options 2000-2025
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
        <div className="relative flex-1 w-full md:w-1/2 rounded-xl overflow-hidden shadow-xl">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Slide ${index + 1}`}
              className={`absolute inset-0 w-full h-96 md:h-[500px] object-cover rounded-xl transition-opacity duration-1000 ${
                index === currentImage ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          <div className="absolute left-6 top-6 text-white max-w-xs animate-fadeIn">
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight drop-shadow-lg">
              OEM Auto Parts <br /> for Sale
            </h2>
            <button className="mt-6 bg-yellow-400 hover:bg-yellow-500 transition text-black font-semibold px-6 py-2 rounded shadow-lg hover:scale-105 transform">
              SHOP NOW
            </button>
          </div>
        </div>

        {/* Right: Form + Quote */}
        <div className="flex-1 w-full md:w-1/2 flex flex-col gap-6">
          {/* Form */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition">
            <h3 className="text-blue-900 text-xl font-semibold text-center mb-6">
              FIND MY PART NOW
            </h3>
            <form className="space-y-5">
              <div className="relative">
                <select
                  id="year"
                  className="peer w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                  <option value="">Select Year</option>
                  {yearOptions}
                </select>
                <label
                  htmlFor="year"
                  className="absolute left-3 -top-3.5 text-gray-500 text-sm bg-white px-1 transition-all peer-focus:-top-3.5 peer-focus:text-blue-600 peer-focus:text-sm"
                >
                  Year
                </label>
              </div>
              <div className="relative">
                <select
                  id="make"
                  className="peer w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                  <option value="">Select Make</option>
                </select>
                <label
                  htmlFor="make"
                  className="absolute left-3 -top-3.5 text-gray-500 text-sm bg-white px-1 transition-all peer-focus:-top-3.5 peer-focus:text-blue-600 peer-focus:text-sm"
                >
                  Make
                </label>
              </div>
              <div className="relative">
                <select
                  id="model"
                  className="peer w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                  <option value="">Select Model</option>
                </select>
                <label
                  htmlFor="model"
                  className="absolute left-3 -top-3.5 text-gray-500 text-sm bg-white px-1 transition-all peer-focus:-top-3.5 peer-focus:text-blue-600 peer-focus:text-sm"
                >
                  Model
                </label>
              </div>
              <div className="relative">
                <select
                  id="part"
                  className="peer w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                  <option value="">Select Part</option>
                </select>
                <label
                  htmlFor="part"
                  className="absolute left-3 -top-3.5 text-gray-500 text-sm bg-white px-1 transition-all peer-focus:-top-3.5 peer-focus:text-blue-600 peer-focus:text-sm"
                >
                  Part
                </label>
              </div>
              <button className="w-full bg-yellow-400 hover:bg-yellow-500 transition text-black font-semibold py-2 rounded mt-2 hover:scale-105 transform">
                FIND MY PART
              </button>
            </form>
          </div>

          {/* Quote Card */}
          <div className="bg-black bg-opacity-80 text-white rounded-xl shadow-lg p-6 flex flex-col gap-3 hover:bg-opacity-90 transition transform hover:scale-105">
            <h4 className="text-xl font-semibold">
              Used Engines & Transmissions
            </h4>
            <p className="text-sm">
              Get top quality, well-tested used engines and transmissions
            </p>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-4 rounded transition transform hover:scale-105">
              GET QUOTE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
