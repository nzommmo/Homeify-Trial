import {features} from "../Constants/"

const Creative = () => {
  return (
    <div className='relative mt-20  min-h-[800px]'> 
    <div className="text-center">
        <span className='bg-green-500  rounded-full h-6 text-xl font-medium px-2 py-1 uppercase'>
            Features
        </span>
        <h2 className='text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking'>
            Lorem ipsum 
            <span className='bg-gradient-to-r from-green-600 to-blue-900 text-transparent bg-clip-text'>
               {" "}
                 dolor sit amet.
                </span>
        </h2>
    </div>

    <div className='flex flex-wrap mt-10 lg:mt-20'>
        {features.map((feature, index)=>(
            <div key={index} className="w-full sm:1/2 lg:w-1/3">
                <div className="flex">
                    <div className="flex mx-6 h-10 w-10 p-2  text-customGreen justify-center items-center rounded-full">
                        {feature.icon}
                    </div>
                    <div>
                        <h1 className="mt-1 mb-6 text-xl">
                            {feature.text}
                        </h1>
                        <p className="text-md p-2 mb-20 text-neutral-500">{feature.description}</p>
                    </div>
                </div>

            </div>
        ))}
    </div>


    </div>
  )
}

export default Creative;