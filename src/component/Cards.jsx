import React from "react";



const Cards = ({ item }) => {
    return (
        <>
        <div className="mt-4 my-3 p-3">
      <div className="bg-white p-4 shadow rounded-md">
        <img
          src={item.image || ""}
          alt={item.name}
          className="w-full h-60 md:h-80 object-cover rounded-md"
        />
        
        <h3 className="mt-2 text-lg font-semibold">{item.name}</h3>
        <p className="text-sm text-gray-600">Breed: {item.breed}</p>
        <p className="text-sm text-gray-600">Age: {item.age}</p>
        <button className="bg-red-500 py-2 px-5 rounded-xl text-white mt-3 hover:bg-red-400 hover:text-blue-600 translate-x-1">Adopt Me</button>
      </div>
      </div>
      </>
    );
  };
  
  export default Cards;