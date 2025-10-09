import React, { useState } from "react";
import { ShoppingCart, Phone, Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  const resourcesLinks = [
    { name: "Policies and T&C", href: "/policies" },
    { name: "Make a Payment", href: "/payment" },
    { name: "Find My", href: "/findmy" },
    { name: "Track my Order", href: "/track" },
    { name: "Submit a Ticket", href: "/ticket" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "About Us", href: "/about" },
  ];

  return (
    <nav className="w-full shadow-md bg-white relative">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/">
          <h1 className="font-medium text-2xl">
  <span className="text-blue-500">Zentro</span>{" "}
  <span className="text-black">Auto Parts</span>
</h1>

          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a
            href="/engines"
            className="text-gray-800 font-medium hover:text-teal-600"
          >
            ENGINES
          </a>
          <a
            href="/Transmission"
            className="text-gray-800 font-medium hover:text-teal-600"
          >
            TRANSMISSIONS
          </a>
          <a
            href="/PartsList"
            className="text-gray-800 font-medium hover:text-teal-600"
          >
            PARTS LIST
          </a>

          {/* Resources Dropdown */}
          <div className="relative group">
            <button
              onClick={() => setIsResourcesOpen(!isResourcesOpen)}
              className="flex items-center text-gray-800 font-medium hover:text-teal-600"
            >
              RESOURCES <ChevronDown className="w-4 h-4 ml-1" />
            </button>
            {isResourcesOpen && (
              <div className="absolute left-0 mt-2 w-56 bg-white border rounded-md shadow-lg z-50">
                <ul className="py-2">
                  {resourcesLinks.map((link, idx) => (
                    <li key={idx}>
                      <a
                        href={link.href}
                        className="block px-4 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-600"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

         
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          <a
            href="/contact"
            className="hidden md:flex items-center bg-yellow-400 text-gray-900 font-semibold px-4 py-2 rounded-md hover:bg-yellow-500 transition"
          >
            {/* <Phone className="w-4 h-4 mr-2" /> */}
           Contact
          </a>

          {/* Cart */}
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-800"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t shadow-md">
          <div className="flex flex-col space-y-3 px-4 py-4">
            <a
              href="/engines"
              className="text-gray-800 font-medium hover:text-teal-600"
            >
              ENGINES
            </a>
            <a
              href="/Transmission"
              className="text-gray-800 font-medium hover:text-teal-600"
            >
              TRANSMISSIONS
            </a>
            <a
              href="/PartsList"
              className="text-gray-800 font-medium hover:text-teal-600"
            >
              PARTS LIST
            </a>

            {/* Mobile Resources Dropdown */}
            <details className="group">
              <summary className="flex items-center justify-between cursor-pointer text-gray-800 font-medium hover:text-teal-600">
                RESOURCES
              </summary>
              <ul className="mt-2 pl-4 space-y-2">
                {resourcesLinks.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.href}
                      className="block text-gray-700 hover:text-teal-600"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </details>

           
            <a
              href="/contact"
              className="flex items-center bg-yellow-400 text-gray-900 font-semibold px-4 py-2 rounded-md hover:bg-yellow-500 transition"
            >
              {/* <Phone className="w-4 h-4 mr-2" /> */}
     Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
