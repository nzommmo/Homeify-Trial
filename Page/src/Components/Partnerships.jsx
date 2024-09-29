import React from 'react'
import {partnerships} from "../Constants";

const Partnerships = () => {
  return (
    <div className='relative mt-10'>
        <div className='flex items-center justify-center '>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl">Partnerships</h1>
        </div>
        <div className='flex items-center justify-center gap-4 pt-10'>
            {partnerships.map((brand,index)=>(
                <div key={index}>
                    <img src={brand.image} alt="" className='w-[100px]'/>

                </div>
            ))}
            
        </div>
        

    </div>
  )
}

export default Partnerships