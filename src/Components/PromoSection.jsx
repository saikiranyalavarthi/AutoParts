import React from "react";

const promotions = [
  {
    title: "AMERICA'S ENGINES DESTINATION",
    subtitle: "Get 10% Off your regular qualifying purchase*",
    highlight: "#1 ENGINES",
    buttonText: "SHOP NOW",
    image: "/Banner/banner1.jpg", // replace with your image path
  },
  {
    title: "AMERICA'S TRANSMISSIONS DESTINATION",
    subtitle: "Get 10% Off your regular qualifying purchase*",
    highlight: "#1 TRANSMISSIONS",
    buttonText: "SHOP NOW",
    image: "/Banner/banner2.jpg", // replace with your image path
  },
];

const banner = {
  title: "Used Engines & Transmissions",
  subtitle: "Get top quality, well tested used engines and transmissions",
  buttonText: "GET QUOTE",
  image: "/Banner/banner3.jpg", // replace with your image path
};

export default function PromoSection() {
  return (
    <section className="py-12 px-6 max-w-7xl mx-auto space-y-6">
      {/* Top 2 Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {promotions.map((promo, index) => (
          <div
            key={index}
            className="relative rounded-xl overflow-hidden shadow-lg group"
          >
            <img
              src={promo.image}
              alt={promo.title}
              className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0  bg-opacity-40 flex flex-col justify-center p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">
                <span className="text-white">{promo.highlight}</span>
              </h3>
              <p className="text-sm sm:text-base mb-4">{promo.title}</p>
              <p className="text-sm mb-4">{promo.subtitle}</p>
              <button className="bg-yellow-400 text-black px-4 py-2 rounded font-semibold hover:bg-yellow-500 transition">
                {promo.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Full Width Banner */}
      <div className="relative rounded-xl overflow-hidden shadow-lg">
        <img
          src={banner.image}
          alt={banner.title}
          className="w-full h-54 sm:h-80 object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0  bg-opacity-40 flex flex-col justify-center p-6 text-white">
          <h3 className="text-3xl font-bold mb-2">{banner.title}</h3>
          <p className="text-sm sm:text-base mb-4">{banner.subtitle}</p>
          <button className="bg-yellow-400 text-black px-4 py-2 rounded font-semibold hover:bg-yellow-500 transition">
            {banner.buttonText}
          </button>
        </div>
      </div>
    </section>
  );
}
