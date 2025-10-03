import React from "react";
import { FaCarSide } from "react-icons/fa";
import {
  SiAudi,
  SiBmw,
  SiFord,
  SiHyundai,
  SiMercedes,
  SiToyota,
  SiHonda,
  SiMazda,
  SiJeep,
  SiSubaru,
  SiAlfaromeo,
  SiChevrolet,
  SiFiat,
  SiNissan,
  SiVolkswagen,
  SiVolvo,
  SiLandrover,
  SiCadillac,
} from "react-icons/si";


// Array of colors
const colors = [
  "text-red-500",
  "text-green-500",
  "text-blue-500",
  "text-yellow-500",
  "text-purple-500",
  "text-pink-500",
  "text-indigo-500",
  "text-teal-500",
  "text-orange-500",
  "text-cyan-500",
  "text-lime-500",
  "text-fuchsia-500",
  "text-rose-500",
  "text-violet-500",
  "text-emerald-500",
  "text-sky-500",
  "text-stone-500",
  "text-gray-500",
  "text-blue-700",
  "text-green-700",
  "text-red-700",
  "text-purple-700",
  "text-pink-700",
  "text-indigo-700",
  "text-yellow-700",
  "text-orange-700",
  "text-cyan-700",
  "text-lime-700",
  "text-fuchsia-700",
  "text-gray-700",
];

const brands = [
  { name: "Audi", icon: <SiAudi /> },
  { name: "BMW", icon: <SiBmw /> },
  { name: "Ford", icon: <SiFord /> },
  { name: "Hyundai", icon: <SiHyundai /> },
  { name: "Mercedes", icon: <SiMercedes /> },
  { name: "Toyota", icon: <SiToyota /> },
  { name: "Honda", icon: <SiHonda /> },
  { name: "Mazda", icon: <SiMazda /> },
  { name: "Jeep", icon: <SiJeep /> },
  { name: "Subaru", icon: <SiSubaru /> },
  { name: "Alfa Romeo", icon: <SiAlfaromeo /> },
  { name: "Chevrolet", icon: <SiChevrolet /> },
  { name: "Fiat", icon: <SiFiat /> },
  { name: "Nissan", icon: <SiNissan /> },
  { name: "Volkswagen", icon: <SiVolkswagen /> },
  { name: "Volvo", icon: <SiVolvo /> },
  { name: "Land Rover", icon: <SiLandrover /> },
  { name: "Cadillac", icon: <SiCadillac /> },
  // fallback brands
  { name: "Scion", icon: <FaCarSide /> },
  { name: "Acura", icon: <FaCarSide /> },
  { name: "Buick", icon: <FaCarSide /> },
  { name: "Chrysler", icon: <FaCarSide /> },
  { name: "Genesis", icon: <FaCarSide /> },
  { name: "Jaguar", icon: <FaCarSide /> },
  { name: "Opel", icon: <FaCarSide /> },
  { name: "Corvette", icon: <FaCarSide /> },
  { name: "Infiniti", icon: <FaCarSide /> },
  { name: "More Brands", icon: <FaCarSide /> },
];

const ShopByMake = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Shop by Make
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {brands.map((brand, index) => {
          const colorClass = colors[index % colors.length]; // rotate colors
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition duration-300 cursor-pointer"
              onClick={() => console.log(`Clicked ${brand.name}`)}
            >
              <div
                className={`text-4xl mb-3 transition-colors duration-300 hover:opacity-80 ${colorClass}`}
              >
                {brand.icon}
              </div>
              <p className={`font-medium ${colorClass}`}>{brand.name}</p>
            </div>
          );
        })}
      </div>
  
    </div>
  );
};

export default ShopByMake;
