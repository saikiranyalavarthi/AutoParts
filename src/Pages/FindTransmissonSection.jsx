import React from "react";
import PartForm from "../Components/PartForm";

const FindTransmissonSection = () => {
  return (
    <div className="w-full">
      {/* Top Yellow Banner */}
      <div className="bg-yellow-400 text-center py-4">
        <h2 className="text-2xl font-bold text-gray-900">(774) 225-0882</h2>
        <p className="text-gray-800 font-semibold">CALL TO ORDER</p>
      </div>

      {/* Find My Part Form */}
     <PartForm/>

      {/* Used Transmissions Section */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Used Transmissions
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Searching for a reliable transmission replacement? We’ve got you
          covered with our large selection of high-quality used transmissions
          for cars, trucks, and SUVs. Save money compared to buying new, without
          compromising on performance. Each transmission in our inventory is
          inspected for durability and efficiency, ensuring you get back on the
          road with confidence. Just provide your vehicle details, and we’ll
          help you find the right match instantly.
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

export default FindTransmissonSection;
