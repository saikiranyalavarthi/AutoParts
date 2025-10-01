import React from "react";

const FindPartSection = () => {
  return (
    <div className="w-full">
      {/* Top Yellow Banner */}
      <div className="bg-yellow-400 text-center py-4">
        <h2 className="text-2xl font-bold text-gray-900">(774) 225-0882</h2>
        <p className="text-gray-800 font-semibold">CALL TO ORDER</p>
      </div>

      {/* Find My Part Form */}
      <div className="bg-[url('https://images.unsplash.com/photo-1607962837350-5e8e4a4f1c6b')] bg-cover bg-center py-12">
        <div className="max-w-lg mx-auto bg-white shadow-lg rounded-xl p-6">
          <h3 className="text-xl font-bold text-center text-white bg-blue-700 py-2 rounded">
            FIND MY PART NOW
          </h3>
          <form className="mt-4 space-y-3">
            <select className="w-full border rounded p-2 text-gray-700">
              <option>Select Year</option>
            </select>
            <select className="w-full border rounded p-2 text-gray-700">
              <option>Select Make</option>
            </select>
            <select className="w-full border rounded p-2 text-gray-700">
              <option>Select Model</option>
            </select>
            <select className="w-full border rounded p-2 text-gray-700">
              <option>Engine</option>
            </select>
            <input
              type="text"
              placeholder="Name"
              className="w-full border rounded p-2"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border rounded p-2"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="w-full border rounded p-2"
            />
            <button
              type="submit"
              className="w-full bg-yellow-400 text-gray-900 font-bold py-2 rounded hover:bg-yellow-500"
            >
              FIND MY PART
            </button>
          </form>
        </div>
      </div>

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
      <div className="bg-gradient-to-r from-blue-700 to-blue-500 text-center py-8 text-white">
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
