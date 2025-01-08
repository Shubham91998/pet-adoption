import React from 'react'
import Home from "./home/Home";
import Service from "./ServicePage/ServicesPage"
import { Route, Routes } from "react-router-dom";


function App() {

  return (
    <>
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Services' element={<Service/>}/>
      </Routes>
    </div>
    </>
  )
}

export default App
