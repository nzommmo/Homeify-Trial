import team1 from '../assets/Images/Profiles/Team/team1.png';



const Team = () => {
  return (
    <div className='relative mt-10'>
        <div className='flex flex-col text-center gap-4 items-center justify-center'>
            <h1 className='md:text-4xl sm:text-2xl '>Meet The Squad</h1>
            <div className='w-1/2'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis aspernatur fuga optio odio maxime facere veritatis, inventore alias cumque dolorem vitae harum quod ipsa fugiat voluptas, labore nihil eum. Veritatis.</p>

            </div>

        </div>
        <div className='flex md:flex-row sm:flex-row flex-col s items-center justify-center gap-6 p-12'>
            <div>
              <img src={team1} alt="" className='rounded-full border' />
            </div>
            <div>
            <img src={team1} alt="" className='rounded-full border' />
            </div>
            <div>
            <img src={team1} alt="" className='rounded-full border' />
            </div>
             
        </div>
        

    </div>
  )
}

export default Team