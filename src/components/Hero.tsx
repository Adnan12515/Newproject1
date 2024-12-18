import React from 'react'
import Image from 'next/image'
const Hero = () => {
  return (
    
    <div className='bg-black'>
      <main className="flex flex-col lg:flex-row items-center justify-between ml-14">
        {/* Left Section */}
        <div className="max-w-lg text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-bold">
            <span className="text-orange-400 font-serif text-2xl">It&apos;s Quick & Amusing!</span>
            <br/>
            
            <span className="text-yellow-500 ">The Art of speed food Quality</span>
          </h1>
          <p className="text-gray-400 mt-4">
          The customer is very important, the customer will be followed by the customer.
          </p>
          <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-black font-bold py-2 px-6 rounded-md">
            See Menu
          </button>
          </div>

              {/* Right Section */}
        <div className="relative mt-12 lg:mt-0">
          <Image
            src="/image1.png"
            alt="Delicious Food"
            width={500}
            height={600}
            className="rounded-lg"/>
          {/* Circular Decorative Images */}
        </div>
            {/* Decorative Images */}
        <div className="ml-20 top-0 left-0 -translate-x-8 -translate-y-8">
          <Image
            src="/image2.png"
            alt="Small Dish"
            width={300}
            height={400}
            className="  " />
        </div>



          </main>
    </div>
  )
}

export default Hero
