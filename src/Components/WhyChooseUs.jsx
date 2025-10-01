import React from "react";
import {
  Truck,
  RefreshCcw,
  ShieldCheck,
  Clock,
  DollarSign,
  Award,
} from "lucide-react";

const features = [
  {
    icon: <Truck className="w-8 h-8 text-blue-600" />,
    title: "Shipping's on Us",
    desc: "Get your ordered parts delivered expeditiously. Initial shipping on All Orders is FREE (*T&C Apply).",
  },
  {
    icon: <RefreshCcw className="w-8 h-8 text-blue-600" />,
    title: "Easy Replacements",
    desc: "Enjoy peace of mind with easy returns and replacements.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
    title: "Reliability",
    desc: "We offer reliable and quality used OEM Auto Parts, Engines and Transmissions.",
  },
  {
    icon: <Award className="w-8 h-8 text-blue-600" />,
    title: "Warranty",
    desc: "We provide a standard warranty on all Engines & Transmissions sold by us.",
  },
  {
    icon: <Clock className="w-8 h-8 text-blue-600" />,
    title: "Timely Delivery",
    desc: "We strive and fulfill all our customer orders in a timely manner.",
  },
  {
    icon: <DollarSign className="w-8 h-8 text-blue-600" />,
    title: "Competitive Pricing",
    desc: "We provide competitive pricing with multiple options to meet your budget.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-800 mb-3">
          Why Choose Us?
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Our goal is to make the buying process as seamless and worry-free as
          possible for our customers and to provide after-sales service in a
          professional manner.
        </p>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition duration-300"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-white rounded-xl shadow">
            <h3 className="text-2xl font-bold text-gray-800 mb-3">
              Our Mission
            </h3>
            <p className="text-gray-600">
              Our mission is to be completely transparent with our customers,
              provide fair & competitive pricing, deliver quality parts &
              after-sales service, and make used auto parts buying process as
              seamless and worry-free as possible.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow">
            <h3 className="text-2xl font-bold text-gray-800 mb-3">
              Our Vision
            </h3>
            <p className="text-gray-600">
              Our vision is to revolutionize auto parts sourcing for our
              customers & for the automotive repair industry and to be an
              industry leader in providing unmatched quality automotive products
              and services.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
