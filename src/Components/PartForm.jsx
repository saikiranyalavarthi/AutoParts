import React from "react";

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

const PartForm = () => {
  const yearOptions = [];
  for (let y = 1999; y <= 2025; y++) {
    yearOptions.push(
      <option key={y} value={y}>
        {y}
      </option>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition w-full max-w-md mx-auto">
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
              <option key={make} value={make}>
                {make}
              </option>
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
              <option key={model} value={model}>
                {model}
              </option>
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
              <option key={part} value={part}>
                {part}
              </option>
            ))}
          </select>
          <label
            htmlFor="part"
            className="absolute left-3 -top-3.5 text-gray-500 text-sm bg-white px-1 transition-all peer-focus:-top-3.5 peer-focus:text-blue-600 peer-focus:text-sm"
          >
            Part
          </label>
        </div>

        {/* VIN / Additional Details */}
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
  );
};

export default PartForm;
