import React from "react";
import PartForm from "../Components/PartForm";

const FindPartSection = () => {
  return (
    <div className="w-full">
      {/* Top Yellow Banner */}
      <div className="bg-yellow-400 text-center py-4">
        <h2 className="text-2xl font-bold text-gray-900">(774) 225-0882</h2>
        <p className="text-gray-800 font-semibold">CALL TO ORDER</p>
      </div>

      {/* Find My Part Form */}
     <PartForm/>

      {/* Used Engines Section */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Used Engines</h2>
        <p className="text-gray-600 leading-relaxed">
          Now you can stop worrying about engine break down and other expenses
          added to it. Get online virtual access to various high quality Used
          Car & Truck engines available in our inventory. Forget the stress of
          receiving numerous spam calls or running between different auto parts
          stores. Just list the year, make and model of the vehicle/engine you
          are looking for, sit back and relax. We will run the request through
          our inventory and our nationwide partner network of junkyards, salvage
          yards and recycling centers within USA to deliver the engine that fits
          perfectly to your needs and expectation.
        </p>
        <p>
          Get a warranty for recycled OEM parts. Our nationwide network and huge
          inventory allows us to provide you with the best pricing in the
          market. Customer satisfaction is our main priority, all our engines go
          through our multiple-step quality check before it reaches you. Buying
          used and remanufactured auto parts have never been this easy, contact
          us and find the part right for you. Our staff will be eager to answer
          all your questions and make your customer experience worthwhile.
        </p>
      </div>

      {/* Contact Assistance */}
      <div className="bg-[#002b5e] text-center py-8 text-white">
        <h3 className="text-lg font-medium">Free Assistance: Contact Us</h3>
        <h2 className="text-2xl font-bold my-2">(774) 225-0882</h2>
        <div className="flex justify-center gap-4 mt-4">
          <button className="bg-yellow-400 text-gray-900 px-5 py-2 rounded font-semibold hover:bg-yellow-500">
            📞 CALL US
          </button>
          <button className="bg-white text-gray-900 px-5 py-2 rounded font-semibold hover:bg-gray-100">
            ✉️ EMAIL US
          </button>
        </div>
      </div>
    </div>
  );
};

export default FindPartSection;
