import React from 'react'
import { Link } from 'react-router-dom'

const Glancepart = () => {
  return (
    <>
      <div className="overflow-hidden bg-[url('https://iadopt.in/wp-content/uploads/2020/02/Background-V1.png')] bg-cover bg-center">
      <div className="py-12 px-5 grid md:grid-cols-2 gap-6">
            <div className="grid sm:grid-cols-2 bg-white py-5 px-5 rounded-xl">
                <div className="order-2 sm:order-1">
                    <h2><strong>Pet At A Glance</strong></h2>
                    <p className='text-sm mt-4'>Furever Friends is a passionate initiative dedicated to helping stray dogs and cats find their forever homes.

                        We are a modern animal welfare platform that utilizes innovative approaches to connect our lovable pets with caring individuals who are ready to be responsible pet owners.
                        
                        Furever Friends is pioneering a streamlined, foster-based adoption process. We collaborate with a close-knit network of carefully vetted foster caregivers to ensure that all animals become familiar with a loving home environment before being adopted. Join us in making a difference—consider becoming a foster parent today!</p>
                    <button className="mt-4 hover:text-blue-700">Know More</button>
                </div>
                <div className="order-1 sm:pl-5 pt-10 sm:w-[320px] sm:h-[300px]">
                    <img src="image/dog2.jpg" alt="Adopt a pet"/>
                </div>
            </div>
            <div className='py-10'>

            <div className="display flex gap-10 sm:justify-between sm:mx-5">
                <div id="adoption-applications" className="">
                    <h3 id="adoption-applications" className='flex px-7 sm:justify-center sm:items-center py-2'>0</h3>
                    <p>Adoption Applications</p>
                </div>
                <div id="dogs-adopted" className="stat-item">
                    <h3 id="dogs-adopted" className='flex px-5 sm:justify-center sm:items-center py-2'>0</h3>
                    <p>Dogs Adopted</p>
                </div>
                <div id="fosters-onboarded" className="stat-item">
                    <h3 id="fosters-onboarded" className='flex px-7 sm:justify-center sm:items-center py-2'>0</h3>
                    <p>Fosters Onboarded</p>
                </div>
            </div>
            <div className='pt-4 flex justify-center items-center '>
            <Link to="/Availablepet" className="mt-5 bg-teal-400 rounded-xl justify-center py-2 px-2 hover:bg-teal-500 cursor-pointer">Apply for Adoption</Link>
            </div>
            </div>
        </div>
        
      </div>
    </>
  )
}

export default Glancepart
