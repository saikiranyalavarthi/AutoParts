import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "William Calhoun",
    message:
      "They are a really good service and they work with you by letting you make payments on the car part you are trying to get delivers in good condition.",
  },
  {
    name: "Anita Murphy",
    message:
      "I really like the service of Ready To Start. They let me know my delivery date and I was real happy that it was delivered when they said it was delivered.",
  },
  {
    name: "Alan Asef",
    message:
      "I recently had an exceptional experience with 'Ready to Start Auto Parts' from the beginning.. when I wasn't so certain and just wanted to inquire about replacing a transmission, to the end.. when it was delivered perfectly in a timely fashion as promised.",
  },
  {
    name: "Jessica Lee",
    message:
      "Amazing experience! The team helped me find the exact part I needed and delivered it on time. Highly recommended!",
  },
  {
    name: "Mark Thompson",
    message:
      "The service was top-notch. Very professional and helpful. I will definitely use them again for future auto parts needs.",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prevTestimonial = () => {
    setCurrent(current === 0 ? testimonials.length - 1 : current - 1);
  };

  const nextTestimonial = () => {
    setCurrent(current === testimonials.length - 1 ? 0 : current + 1);
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-blue-700 inline-block mb-10 relative">
          Trusted by Customers
          <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-16 h-1 bg-yellow-400 rounded"></span>
        </h2>

        <div className="relative flex items-center justify-center">
          {/* Left Arrow */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 text-gray-500 hover:text-blue-700 transition-colors"
          >
            <ChevronLeft size={28} />
          </button>

          {/* Testimonial Cards */}
          <div className="flex overflow-hidden w-full sm:w-3/4 gap-6 justify-center">
            {testimonials.slice(current, current + 3).map((testi, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-blue-100 via-blue-50 to-white p-6  shadow-lg flex-1 min-w-[250px] max-w-[300px] flex flex-col justify-center items-center transition-transform transform hover:scale-105"
              >
                {/* Message */}
                <p className="text-gray-800 text-sm sm:text-base text-center mb-4">
                  "{testi.message}"
                </p>

                {/* Name */}
                <span className="font-semibold text-blue-700 text-sm sm:text-base">
                  - {testi.name}
                </span>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextTestimonial}
            className="absolute right-0 text-gray-500 hover:text-blue-700 transition-colors"
          >
            <ChevronRight size={28} />
          </button>
        </div>
      </div>
    </section>
  );
}
