import React from "react";
import { Truck, RefreshCcw, ShieldCheck, Tag } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Truck className="w-8 h-8 text-white" />,
      title: "Free Shipping",
      desc: "For eligible orders",
    },
    {
      icon: <RefreshCcw className="w-8 h-8 text-white" />,
      title: "Easy Returns",
      desc: "Hassle free returns",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-white" />,
      title: "Secure Payment",
      desc: "Guaranteed Safe Checkout",
    },
    {
      icon: <Tag className="w-8 h-8 text-white" />,
      title: "Best Prices",
      desc: "Offers Lowest Price",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-teal-700 via-teal-600 to-teal-500 py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row flex-wrap justify-between items-center gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-center space-x-3 text-white hover:scale-105 transition transform w-full sm:w-[48%] md:w-[23%]"
          >
            <div className="bg-white/20 p-3 rounded-full">{feature.icon}</div>
            <div>
              <h3 className="text-lg font-semibold">{feature.title}</h3>
              <p className="text-sm opacity-80">{feature.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
