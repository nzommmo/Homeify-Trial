import {testimonials} from "../Constants";
const Testimonials = () => {
  return (
    <div className="mt-20 tracking-wide">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mx-10 my-10 lg:my-20 tracking-tight">What Our Client's are saying</h2>
        <div className="flex flex-wrap justify center">
            {testimonials.map((testimonial,index)=>(
                <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
                    <div className="shadow-lg  bg-white rounded-lg w-full p-6 text-md  font-thin">
                    <div className="flex flex-col gap-4 mt-8 items-start">
                            <img className="w-12 h-12 mr-6 rounded-full border border-neutral-300" src={testimonial.image} alt={testimonial.user} />
                            <div>
                                <h1>{testimonial.user}</h1>
                                <span className="text-sm font-normla italic text-neutral-600">{testimonial.company}</span>
                            </div>

                        </div>
                        <div className="pt-4">
                        <p>{testimonial.text}</p>

                        </div>
                       
                    </div>

                </div>
            ))}

        </div>

    </div>
  )
}

export default Testimonials