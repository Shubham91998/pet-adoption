import axios from "axios";
import React, { useEffect, useState } from "react";

const ManagePet = () => {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true); // Initialize as true
  const [error, setError] = useState(null); // Initialize as null

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const res = await axios.get("http://localhost:4001/pets/allpets");
        setPets(res.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };
    fetchPets();
  }, []);

  if (loading) return <div>Loading...</div>; // Correct spelling
  if (error) return <div>Error: {error}</div>; // Display error message

  return (
    <div className="mt-28 mx-5">
      <h1 className="text-2xl font-bold mb-4">Pet List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {pets.map((pet) => (
          <div key={pet._id} className="bg-white shadow-md rounded-lg p-4">
            <img
              src={pet.image} // Assuming pet.image contains the URL of the image
              alt={pet.name}
              className="w-full h-64 object-cover rounded-md mb-2"
            />
            <h2 className="text-lg font-semibold">{pet.name}</h2>
            <div className="display flex justify-between">
              <div>
              <p><strong>Breed:</strong> {pet.breed}</p>
            <p><strong>Age:</strong> {pet.age}</p>
              </div>
              <div>
              <p><strong>Type:</strong> {pet.type}</p>
              <p><strong>Category:</strong> {pet.category}</p>
              </div>
            </div>
            <p><strong>User ID:</strong> {pet.userid}</p>
            <div className="mt-4 flex justify-between">
              <button
                className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
                // onClick={() => console.log('Edit functionality here')}
              >
                Add
              </button>
              <button
                className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                // onClick={() => onDelete(pet._id)} // Call the delete function passed as a prop
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4">
        
      </div>
    </div>
  );
};

export default ManagePet;