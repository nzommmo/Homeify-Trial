import React from 'react'

const Stats = () => {
  return (
    <div className='relative p-10'>
        <div className='grid md:grid-cols-2 sm:grid-cols-2  gap-6'>
            <div className='flex flex-col gap-4'>
                <div className='lg:w-3/5 w-full'>
                    <h1 className='lg:text-5xl md:text-3xl  text-lg '>Property has to have more than just uildings </h1>
                </div>
                <div className='lg:w-3/4 w-3/2'>
                    
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum eaque, voluptate consectetur ex eos voluptas! Maxime veritatis, atque assumenda, cum ad eligendi delectus ea consequuntur reprehenderit ut voluptates laudantium veniam.</p>
                </div>
                
            </div>

            <div className='w-full lg:w-1/2 '>
            <div className=''>

            
                <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4'>
                    <div className='shadow-lg p-10 bg-white rounded-lg w-full  '>
                        <div className='flex flex-col items-center justify-center lg:text-base sm:text-xs tracking-tight '>
                        <p className='text-2xl'>64+</p>
                        <p className='text-md'>Listed Property</p>

                        </div>
                    </div>
                    <div className='shadow-lg p-10 bg-white rounded-lg w-full  '>
                        <div className='flex flex-col items-center justify-center lg:text-base sm:text-xs tracking-tight '>
                        <p className='text-2xl'>64+</p>
                        <p className='text-md'>Listed Property</p>

                        </div>
                    </div>
                    <div className='shadow-lg p-10 bg-white rounded-lg w-full  '>
                        <div className='flex flex-col items-center justify-center lg:text-base sm:text-xs tracking-tight '>
                        <p className='text-2xl'>64+</p>
                        <p className='text-md'>Listed Property</p>

                        </div>
                    </div>
                    <div className='shadow-lg p-10 bg-white rounded-lg w-full  '>
                        <div className='flex flex-col items-center justify-center lg:text-base sm:text-xs tracking-tight '>
                        <p className='text-2xl'>64+</p>
                        <p className='text-md'>Listed Property</p>

                        </div>
                    </div>

                </div>

            </div>
            </div>

             

        </div>

    </div>
  )
}

export default Stats