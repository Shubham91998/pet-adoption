import React from 'react'

const NeutritionChart = () => {
  return (
    <>
      <div>
      <div className="grid grid-rows-2 gap-10 display sm:flex py-10 bg-orange-500 md:px-32 md:justify-between">
                    
            <div className="pl-7 sm:px-5 pb-5">
                <h2 className='py-3 font-serif text-2xl'><b >Pet Nutrition Chart</b></h2>
                <img className='w-80 sm:w-72 h-72 rounded-md' src="image/dog nutrition.webp" alt="Pet Nutrition Chart" />
            </div>
            
                
            
            <div className="px-10 mx-5 pt-5 sm:px-5 bg-white rounded-md">
                <h2>Fill up the form to get the FREE nutrition chart!</h2>
                <form action="download.php" method="post">
                    <div className='py-10 grid grid-rows-2 gap-10'>
                        <input className='border border-slate-400 rounded-md h-10 px-3' type="text" name='name' placeholder='Full Name' required />
                        <input className='border border-slate-400 rounded-md h-10 px-3' type="email" name='email' placeholder='Email' />
                    </div>

                    <button className=' bg-blue-500 py-2 px-5 sm:px-10 rounded-lg mx-10 text-white'>Download Now</button>
                    
                </form>
            </div>
            
        </div>
        
      </div>
    </>
  )
}

export default NeutritionChart
