"use client";

import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import Wrap from "./Wrap";

const ProductList: React.FC = () => {
  // Full list of cars
  const allCars = [
    { id: 1,  image: "/Catalog 1.png", price: 50 },
    { id: 2,  image: "/Catalog 2.png", price: 40 },
    { id: 3,  image: "/Catalog 3 (3).png", price: 45 },
    { id: 4,  image: "/Catalog 2.png", price: 70 },
    { id: 5,  image: "/Catalog 1 (1).png", price: 55 },
    { id: 6,  image: "/Catalog 2 (1).png", price: 80 },
    { id: 7, image: "/Catalog 3 (1).png", price: 90 },
    { id: 8, image: "/Catalog 2 (1).png", price: 85 },
    { id: 9, image: "/Catalog 1 (2).png",price: 100 },
    { id: 10, image: "/Catalog 2 (3).png", price: 60 },
    { id: 11, image: "/Catalog 1 (2).png", price: 65 },
    { id: 12, image: "/Catalog 2 (3).png", price: 120 },
  ];

  // State to handle visible cars
  const [visibleCars, setVisibleCars] = useState(8);

  const handleShowMore = () => {
    setVisibleCars(allCars.length); // Show all cars
  };

  return (
    <Wrap>
      <div className="bg-gray-50 overflow-x-hidden">
        {/* Product Grid */}
        <div className="py-10">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">Explore Our Cars</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {allCars.slice(0, visibleCars).map((car) => (
              <div
                key={car.id}
                className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition"
              >
               

                {/* Car Image */}
                <img
                  src={car.image}
                  
                  className="w-full object-cover rounded-lg mb-4"
                />

                {/* Car Price */}
                <p className="text-xl font-semibold text-gray-500 mb-4">${car.price}/Day</p>

                {/* Rent Button aligned to the left */}
                <div className="flex justify-start">
                  <button className="bg-blue-500 text-white py-2 px-7 ml-40  md:px-5 md:ml-24 lg:ml-44 rounded-lg hover:bg-blue-600 transition">
                    Rent Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Show More Button */}
          {visibleCars < allCars.length && (
            <div className="flex justify-center mt-6">
              <button
                onClick={handleShowMore}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                Show More Cars
              </button>
            </div>
          )}
        </div>
      </div>
    </Wrap>
  );
};

export default ProductList;
