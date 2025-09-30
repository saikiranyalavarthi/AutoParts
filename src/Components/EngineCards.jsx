import React from "react";

export default function EngineCards() {
  const engines = [
    {
      img: "/EnigineCards/Engine1.jpg",
      title: "2002 Ford F-150 Used Engine - 4.2L (VIN 2, 8th digit)",
      grade: "Grade A",
      price: "$1,200.00",
    },
    {
      img: "/EnigineCards/Engine2.jpg",
      title:
        "2010 Chevrolet Camaro Used Engine - 3.6L (VIN V, 8th digit, opt LLT)",
      grade: "Grade A",
      price: "$2,270.00",
    },
    {
      img: "/EnigineCards/Engine3.jpg",
      title:
        "2013 Chevrolet Malibu Used Engine - 2.0L (VIN X, 8th digit, opt LTG)",
      grade: "Grade A",
      price: "$1,850.00",
    },
    {
      img: "/EnigineCards/Engine4.jpg",
      title:
        "2014 Chevrolet Impala Used Engine - VIN 1 (4th digit, New Style) 2.4L",
      grade: "Grade A",
      price: "$950.00",
    },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}

        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800 inline-block relative">
            Top Selling
            <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-10 h-1 bg-yellow-400 rounded "></span>
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          {engines.map((engine, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white"
            >
              <img
                src={engine.img}
                alt={engine.title}
                className="w-full h-60 object-cover"
              />
              <div className="p-4">
                <h3 className="text-gray-800 font-semibold text-lg">
                  {engine.title}
                </h3>
                <p className="text-gray-500 text-sm">{engine.grade}</p>
                <p className="text-teal-600 font-bold mt-1">{engine.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
