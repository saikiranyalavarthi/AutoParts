// AboutSection.jsx
import React from "react";
import WhyChooseUs from "../Components/WhyChooseUs";

const AboutSection = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 flex flex-col lg:flex-row items-center gap-10">
        {/* Text Content */}
        <div className="lg:w-1/2">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-6">
            About Ready To Start Auto Parts
          </h2>
          <p className="text-gray-700 mb-4">
            Ready to Start Auto Parts is a comprehensive online marketplace for
            quality used OEM auto parts, with a nationwide network of warehouses
            and sourcing partners within the USA –{" "}
            <span className="font-semibold">all at the best price!</span>
          </p>
          <p className="text-gray-700 mb-4">
            We're a team of car lovers and automotive professionals working to
            revolutionize auto parts sourcing for our customers and the
            automotive repair industry. We offer a large selection of
            high-quality OEM replacement auto parts at a competitive price.
          </p>
          <p className="text-gray-700 mb-4">
            Our company was founded to help customers like you find
            high-quality, low-mileage OEM replacement engines, transmissions,
            and other auto parts. Simply submit a part finder request or call
            us, and we'll make the process of finding your replacement part
            easy.
          </p>
          <p className="text-gray-700 mb-4">
            Even though buying a replacement engine or transmission can be a
            large expense, it's much more affordable than getting locked into a
            new car payment. Just tell us your year, make, model, and part
            description, and we'll provide a custom quote including shipping.
          </p>
          <p className="text-gray-800 font-semibold mt-4">
            Call us at{" "}
            <a href="tel:8887875603" className="text-blue-600 hover:underline">
              (888) 787-5603
            </a>{" "}
            /{" "}
            <a href="tel:7817872755" className="text-blue-600 hover:underline">
              (781) 787-2755
            </a>{" "}
            or fill out our free online quote today!
          </p>
        </div>

        {/* Images */}
        <div className="lg:w-1/2 flex flex-col gap-6">
          <img
            src="/About/about1.jpg"
            alt="Quality Auto Parts"
            className="w-full rounded-xl shadow-lg object-cover h-54 md:h-60"
          />
          <img
            src="/About/about2.jpg"
            alt="Automotive Professionals"
            className="w-full rounded-xl shadow-lg object-cover h-54 md:h-60"
          />
        </div>
      </div>
      <WhyChooseUs />
    </section>
  );
};

export default AboutSection;
