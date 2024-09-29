import React from 'react'
import image1 from '../assets/Images/4.jpeg';

const History = () => {
  return (
    <div className='mt-10'>
      <div className='flex flex-col items-center justify-center'>
        <h2 className='lg:text-4xl md:text-2xl'>Company History</h2>
        <div className='text-center w-1/2'>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia nihil sunt, qui voluptate accusantium fugit vitae beatae officiis sequi eveniet. Animi illum amet debitis nulla? Libero vero possimus ab soluta?</p>

        </div>
      </div>
      <div className='mt-5 md:p-10 p-5'>
      <div className='flex items-center gap-5 justify-center bg-[#98FF98] rounded-md'>
        <div>
          <img src={image1} alt="placholderimage" />
        </div>
        <div className='flex flex-col'>
          <div className=''>
          <div>
            <h1 className='lg:text-4xl md:text-2xl'>How We Started</h1>
          </div>
          <div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium odio natus, eligendi possimus, libero at asperiores ullam ad soluta expedita pariatur officiis temporibus perspiciatis adipisci impedit repellendus. Sed, aliquid ratione!</p>
          </div>
          </div>

        </div>

      </div>
      </div>

    </div>
  )
}

export default History