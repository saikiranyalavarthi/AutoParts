import React, { useState } from "react";
import { ShoppingCart, Phone, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full shadow-md bg-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="flex items-center">
          {/* <img
            src="/logo.png" // replace with your logo path
            alt="Logo"
            className="h-10 w-auto"
          /> */}
          <h1 className=" font-medium">Auto Parts</h1>
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
            href="/Transmisson"
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
          <a href="#" className="text-gray-800 font-medium hover:text-teal-600">
            RESOURCES
          </a>
          <a href="#" className="text-gray-800 font-medium hover:text-teal-600">
            FINANCING
          </a>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          <a
            href="tel:7742250882"
            className="hidden md:flex items-center bg-yellow-400 text-gray-900 font-semibold px-4 py-2 rounded-md hover:bg-yellow-500 transition"
          >
            <Phone className="w-4 h-4 mr-2" />
            (774) 225-0882
          </a>

          {/* Cart */}
          <div className="flex items-center cursor-pointer text-gray-800 hover:text-teal-600">
            <ShoppingCart className="w-5 h-5 mr-1" />
            <span className="hidden md:block">Cart</span>
          </div>

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
              href="/Transmisson"
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
            <a
              href="#"
              className="text-gray-800 font-medium hover:text-teal-600"
            >
              RESOURCES
            </a>
            <a
              href="#"
              className="text-gray-800 font-medium hover:text-teal-600"
            >
              FINANCING
            </a>
            <a
              href="tel:7742250882"
              className="flex items-center bg-yellow-400 text-gray-900 font-semibold px-4 py-2 rounded-md hover:bg-yellow-500 transition"
            >
              <Phone className="w-4 h-4 mr-2" />
              (774) 225-0882
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
