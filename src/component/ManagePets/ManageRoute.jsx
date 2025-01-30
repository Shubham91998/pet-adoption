import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import ManagePet from "./ManagePet";

const ManageRoute = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <ManagePet />
      </main>
      <Footer className="bg-gray-800 text-white text-center p-4" />
    </div>
  );
}

export default ManageRoute;
