import React from "react";
import { Link } from "react-router-dom";


const Cards = ({ item }) => {
  return (
    <div className="mt-4 my-3 p-3">
      <div className="bg-white p-4 shadow-md rounded-md hover:shadow-lg transition-shadow">
        <img
          src={item.image || "https://via.placeholder.com/150"} // Fallback image if `item.image` is not available
          alt={item.name}
          className="w-full h-60 md:h-80 object-cover rounded-md"
        />
        <h3 className="mt-2 text-lg font-semibold text-gray-800">{item.name}</h3>

        <p className="text-sm text-gray-600">Breed: {item.breed}</p>
        <p className="text-sm text-gray-600">Age: {item.age} years</p>
        <button className="bg-red-500 py-2 px-5 rounded-xl text-white mt-3 hover:bg-red-600 transition-all">
          Adopt Me
        </button>
      </div>
    </div>
  );
};

export default Cards;
