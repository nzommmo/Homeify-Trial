import React from 'react'
import image2 from '../assets/Images/3.jpg';


const Success = () => {
  return (
    <div className='mt-10'>
        <div className='flex justify-between'>
            <div className='flex flex-col gap-4 ml-12'>
                <div className='lg:w-2/3 w-1/2 m'>
                    <h2 className='lg:text-4xl md:text-2xl'>A Company's Success is An ongoig Stream of happiness</h2>
                </div>
                <div className='w-1/2'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque eligendi inventore necessitatibus id ipsum aut consectetur dolor voluptates omnis in, non mollitia ab sed quasi rerum iure fugit, ullam autem.</p>
                </div>
                
            </div>
            <div className='mr-5'>
               <img src={image2} alt="" />
            </div>
        </div>

    </div>
  )
}

export default Success