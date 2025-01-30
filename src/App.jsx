import React from 'react'
import Home from "./home/Home";
import Service from "./ServicePage/ServicesPage"
import { Route, Routes } from "react-router-dom";
import AllPet from './component/Pet/AllPet';
import ProcessForm from './component/Process/ProcessForm';
import Signup from './component/Signup';
import { Toaster } from 'react-hot-toast';
import ManageRoute from './component/ManagePets/ManageRoute';
import AdoptionForm from './component/AdoptionForm';



function App() {
 

  return (
    <>
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Services' element={<Service/>}/>
        <Route path='/Availablepet' element={<AllPet/>}/>
        <Route path='/Process' element={<ProcessForm/>}/>
        <Route path="/signup" element={<Signup />} />
        <Route path='/PetManage' element={<ManageRoute/>}/>
        <Route path='/form' element={<AdoptionForm/>}/>
      </Routes>
      <Toaster />
    </div>
    </>
  )
}

export default App
