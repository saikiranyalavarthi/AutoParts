import React from "react";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export default function FooterSection() {
  return (
    <footer className="bg-teal-800 text-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-6 grid gap-8 sm:grid-cols-2 md:grid-cols-4">
        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2">
            {["Home", "Find a Part", "Search by Make/Model", "Contact Us"].map(
              (link, idx) => (
                <li
                  key={idx}
                  className="hover:text-yellow-400 cursor-pointer transition-colors duration-200"
                >
                  {link}
                </li>
              )
            )}
          </ul>
        </div>

        {/* What We Sell */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">
            What We Sell
          </h3>
          <ul className="space-y-2">
            {["Used Engines", "Used Transmissions", "OEM Used Auto Parts"].map(
              (item, idx) => (
                <li
                  key={idx}
                  className="hover:text-yellow-400 cursor-pointer transition-colors duration-200"
                >
                  {item}
                </li>
              )
            )}
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Resources</h3>
          <ul className="space-y-2">
            {[
              "Policies and T&C",
              "Track my Order",
              "Make a Payment",
              "Submit a Ticket",
              "Financing",
              "Testimonials",
              "About",
              "Blogs",
            ].map((res, idx) => (
              <li
                key={idx}
                className="hover:text-yellow-400 cursor-pointer transition-colors duration-200"
              >
                {res}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Contact Us</h3>
          <p className="text-sm mb-2">US Toll Free: (774) 225-0882</p>
          <p className="text-sm mb-2">Fax: (774) 225-0882</p>
          <p className="text-sm mb-2">E-Mail: Info@rtsautoparts.com</p>
          <p className="text-sm mb-2">Website: autoparts.us</p>
          <p className="text-sm mb-4">
            Location: 11 Apex Dr Ste 300 A, Marlborough, MA 01752, USA
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-2">
            <Facebook className="w-5 h-5 hover:text-yellow-400 cursor-pointer transition-colors duration-200" />
            <Instagram className="w-5 h-5 hover:text-yellow-400 cursor-pointer transition-colors duration-200" />
            <Twitter className="w-5 h-5 hover:text-yellow-400 cursor-pointer transition-colors duration-200" />
            <Linkedin className="w-5 h-5 hover:text-yellow-400 cursor-pointer transition-colors duration-200" />
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 mt-10 text-sm">
        &copy; {new Date().getFullYear()} Auto Parts. All rights reserved.
      </div>
    </footer>
  );
}
