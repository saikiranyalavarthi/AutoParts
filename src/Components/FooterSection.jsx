import React from "react";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export default function FooterSection() {
  return (
    <footer className="bg-[#002b5e] text-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-6 grid gap-8 sm:grid-cols-2 md:grid-cols-4">
        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2">
            {[
              { name: "Home", href: "/" },
              
              { name: "Contact Us", href: "/contact" },
            ].map((link, idx) => (
              <li key={idx}>
                <a
                  href={link.href}
                  className="hover:text-yellow-400 transition-colors duration-200"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* What We Sell */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">
            What We Sell
          </h3>
          <ul className="space-y-2">
            {[
              { name: "Used Engines", href: "/parts/engines" },
              { name: "Used Transmissions", href: "/parts/transmissions" },
              { name: "OEM Used Auto Parts", href: "/parts/oem" },
            ].map((item, idx) => (
              <li key={idx}>
                <a
                  href={item.href}
                  className="hover:text-yellow-400 transition-colors duration-200"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Resources</h3>
          <ul className="space-y-2">
            {[
              { name: "Policies and T&C", href: "/policies" },
              { name: "Track my Order", href: "/track-order" },
              { name: "Make a Payment", href: "/payment" },
              { name: "Submit a Ticket", href: "/support" },
             
              { name: "Testimonials", href: "/testimonials" },
              { name: "About", href: "/about" },
              { name: "Blogs", href: "/blogs" },
            ].map((res, idx) => (
              <li key={idx}>
                <a
                  href={res.href}
                  className="hover:text-yellow-400 transition-colors duration-200"
                >
                  {res.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Contact Us</h3>
          <p className="text-sm mb-2">US Toll Free: (774) 225-0882</p>
          <p className="text-sm mb-2">Fax: (774) 225-0882</p>
          <p className="text-sm mb-2">
            E-Mail:{" "}
            <a
              href="mailto:Info@rtsautoparts.com"
              className="hover:text-yellow-400"
            >
              Info@rtsautoparts.com
            </a>
          </p>
          <p className="text-sm mb-2">
            Website:{" "}
            <a
              href="https://autoparts.us"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400"
            >
              autoparts.us
            </a>
          </p>
          <p className="text-sm mb-4">
            Location: 10127 Alameda St Los Angeles, CA 90002, USA
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-2">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Facebook className="w-5 h-5 hover:text-yellow-400 cursor-pointer transition-colors duration-200" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-5 h-5 hover:text-yellow-400 cursor-pointer transition-colors duration-200" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Twitter className="w-5 h-5 hover:text-yellow-400 cursor-pointer transition-colors duration-200" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5 hover:text-yellow-400 cursor-pointer transition-colors duration-200" />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 mt-10 text-sm">
        &copy; {new Date().getFullYear()} Auto Parts. All rights reserved.
      </div>
    </footer>
  );
}
