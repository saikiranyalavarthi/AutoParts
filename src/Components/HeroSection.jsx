import React, { useState, useEffect } from "react";

import Hero1 from "../assets/Heroimages/Hero1.jpg";
import Hero2 from "../assets/Heroimages/Hero2.jpg";
import Hero3 from "../assets/Heroimages/Hero3.jpg";
import Hero4 from "../assets/Heroimages/Hero4.jpg";

const images = [Hero1, Hero2, Hero3, Hero4];

const makes = [
  "Toyota", "Honda", "Ford", "Chevrolet", "BMW",
  "Mercedes", "Audi", "Hyundai", "Kia", "Nissan",
  "Volkswagen", "Lexus", "Mazda", "Subaru", "Jeep",
  "Dodge", "GMC", "Cadillac", "Acura", "Infiniti",
  "Mitsubishi", "Chrysler", "Buick", "Tesla", "Volvo",
  "Jaguar", "Land Rover", "Porsche", "Fiat", "Mini",
  "Alfa Romeo", "Ram", "Genesis", "Lincoln", "Suzuki",
  "Peugeot", "Renault", "Seat", "Skoda", "Bentley",
  "Maserati", "Ferrari", "Lamborghini", "Rolls-Royce", "Aston Martin"
];

const models = [
  "Corolla", "Civic", "Mustang", "Camry", "Accord",
  "X5", "A4", "Elantra", "Soul", "Altima",
  "Silverado", "Tahoe", "F-150", "Malibu", "Explorer",
  "Escape", "CR-V", "Rav4", "Santa Fe", "Sorento",
  "Sentra", "Jetta", "Passat", "Golf", "Fusion",
  "Impala", "Charger", "Challenger", "Wrangler", "Grand Cherokee",
  "CX-5", "CX-9", "Outback", "Forester", "Legacy",
  "G80", "G70", "RX", "NX", "Q50",
  "Q60", "X3", "X1", "A6", "A3",
  "S-Class", "E-Class", "C-Class", "Tucson", "Kona",
  "Venza", "Model S", "Model 3", "Model X", "Model Y",
  "F-Pace", "Range Rover", "Cayenne", "911", "Panamera"
];


const parts = [
  "Used Engines", "Used Transmissions", "Transfer Case", "Rear Axle",
  "ABS", "Drive Shaft", "Temperature Control", "Cylinder Head",
  "Steering Column", "Engine Cradle", "Radio", "Other Parts",
];

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const yearOptions = [];
  for (let y = 1996; y <= 2025; y++) {
    yearOptions.push(<option key={y} value={y}>{y}</option>);
  }

  return (
    <section className="bg-[#002b5e] py-10">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row gap-8">
        {/* Left: Images */}
        <div className="flex-1 flex flex-col gap-4">
          {/* Big Hero Image */}
          <div className="relative h-80 lg:h-[400px] rounded-xl overflow-hidden shadow-xl">
            <img
              src={images[currentImage]}
              alt="Hero"
              className="w-full h-full object-cover rounded-xl transition-opacity duration-1000"
            />
            <div className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white max-w-xs md:max-w-sm">
              <h2 className="text-3xl md:text-5xl font-extrabold leading-tight drop-shadow-lg">
                OEM Auto Parts <br /> for Sale
              </h2>
              <button className="mt-4 md:mt-6 bg-yellow-400 hover:bg-yellow-500 transition text-black font-semibold px-5 py-2 rounded shadow-lg hover:scale-105 transform">
                SHOP NOW
              </button>
            </div>
          </div>

          {/* Two Small Images with Always-Visible Overlay */}
          <div className="flex gap-4 mt-4">
            <div className="relative flex-1 h-40 rounded-xl overflow-hidden shadow-lg">
              <img
                src={Hero2}
                alt="Small 1"
                className="w-full h-full object-cover rounded-xl"
              />
              <div className="absolute inset-0  bg-opacity-50 flex flex-col items-center justify-center text-center text-white px-2">
        
              <p className="mt-1 text-sm font-bold bg-yellow-400 text-black px-3 py-1 rounded-full inline-block">
  Used Engines
</p>

              </div>
            </div>

            <div className="relative flex-1 h-40 rounded-xl overflow-hidden shadow-lg">
              <img
                src={Hero3}
                alt="Small 2"
                className="w-full h-full object-cover rounded-xl"
              />
              <div className="absolute inset-0  bg-opacity-50 flex flex-col items-center justify-center text-center text-white px-2">
    
              <p className="mt-1 text-sm font-bold bg-yellow-400 text-black px-3 py-1 rounded-full inline-block">
  Used Transimissons
</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Form */}
        <div className="flex-1 w-full lg:w-1/2 flex flex-col gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition">
            <h3 className="text-blue-900 text-xl md:text-2xl font-semibold text-center mb-6">
              FIND MY PART NOW
            </h3>
            <form className="space-y-4">
              {/* Year */}
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

              {/* Make */}
              <div className="relative">
                <select
                  id="make"
                  className="peer w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                  <option value="">Select Make</option>
                  {makes.map((make) => (
                    <option key={make} value={make}>{make}</option>
                  ))}
                </select>
                <label
                  htmlFor="make"
                  className="absolute left-3 -top-3.5 text-gray-500 text-sm bg-white px-1 transition-all peer-focus:-top-3.5 peer-focus:text-blue-600 peer-focus:text-sm"
                >
                  Make
                </label>
              </div>

              {/* Model */}
              <div className="relative">
                <select
                  id="model"
                  className="peer w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                  <option value="">Select Model</option>
                  {models.map((model) => (
                    <option key={model} value={model}>{model}</option>
                  ))}
                </select>
                <label
                  htmlFor="model"
                  className="absolute left-3 -top-3.5 text-gray-500 text-sm bg-white px-1 transition-all peer-focus:-top-3.5 peer-focus:text-blue-600 peer-focus:text-sm"
                >
                  Model
                </label>
              </div>

              {/* Part */}
              <div className="relative">
                <select
                  id="part"
                  className="peer w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                  <option value="">Select Part</option>
                  {parts.map((part) => (
                    <option key={part} value={part}>{part}</option>
                  ))}
                </select>
                <label
                  htmlFor="part"
                  className="absolute left-3 -top-3.5 text-gray-500 text-sm bg-white px-1 transition-all peer-focus:-top-3.5 peer-focus:text-blue-600 peer-focus:text-sm"
                >
                  Part
                </label>
              </div>

              {/* Details */}
              {/* <input
                type="text"
                placeholder="Details"
                className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-blue-600 focus:outline-none"
              /> */}

              {/* VIN */}
              <input
                type="text"
                placeholder="VIN / Additional Details"
                className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-blue-600 focus:outline-none"
              />

              {/* Name */}
              <input
                type="text"
                placeholder="Name"
                className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-blue-600 focus:outline-none"
              />

              {/* Email */}
              <input
                type="email"
                placeholder="Email"
                required
                className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-blue-600 focus:outline-none"
              />

              {/* Phone */}
              <input
                type="tel"
                placeholder="Phone Number"
                required
                className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-blue-600 focus:outline-none"
              />

              {/* Submit */}
              <button className="w-full bg-yellow-400 hover:bg-yellow-500 transition text-black font-semibold py-2 rounded mt-2 hover:scale-105 transform">
                FIND MY PART
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
