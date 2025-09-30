import React from "react";

export default function PartsCards() {
  const parts = [
    { img: "/Parts/Part1.jpg", title: "Used Engines" },
    { img: "/Parts/Part2.jpg", title: "Used Transmissions" },
    { img: "/Parts/Part3.jpeg", title: "Transfer Case" },
    { img: "/Parts/Part4.png", title: "Rear Axle" },
    { img: "/Parts/Part5.jpg", title: "ABS" },
    { img: "/Parts/Part6.jpg", title: "Drive Shaft" },
    { img: "/Parts/Part7.jpg", title: "Temperature Control Unit" },
    { img: "/Parts/Part8.jpg", title: "Cylinder Head" },
    { img: "/Parts/Part9.jpg", title: "Steering Column" },
    { img: "/Parts/Part10.jpg", title: "Engine Cradle" },
    { img: "/Parts/Part11.jpg", title: "Radio" },
    { img: "/Parts/Part12.jpg", title: "Other Parts" },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800 inline-block relative">
            Our Parts
            <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-10 h-1 bg-yellow-400 rounded"></span>
          </h2>
        </div>

        {/* Parts Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {parts.map((part, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden flex flex-col items-center"
            >
              <img
                src={part.img}
                alt={part.title}
                className="w-full h-32 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-gray-800 font-semibold text-sm sm:text-base">
                  {part.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
