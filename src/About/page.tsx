import React from 'react'
import Image from 'next/image'
const About = () => {
  return (

    <section className="bg-black text-white py-12 px-6">
      <div className="flex flex-col lg:flex-row items-center justify-between pr-4">
        {/* Left Text Section */}
        <div className="space-y-6">
          <h2 className="text-orange-400 font-semibold text-2xl">About us</h2>
          <h1 className="text-4xl font-bold">
            We Create the best <span className="text-yellow-500">foody product</span>
          </h1>
          <p className="text-gray-400 mt-2">
            From witty to serious reflections on the fast food industry<br/> finding the right words can elevate your post and resonate with your audience.  </p>
          <ul className="space-y-2 mt-3 mb-3">
            <li className="">
              <span className="text-green-400 mr-2">✔</span> 
              If the lake is not, and the protein is the football he wants in the result.
            </li>
            <li className="">
              <span className="text-green-400 mr-2">✔</span>"The best part of waking up is Folgers in your cup."
            </li>
            <li className="">
              <span className="text-green-400 mr-2">✔</span> "Happiness is a well-made sandwich."
            </li>
          </ul>
          <button className="bg-orange-500 hover:bg-orange-600 text-black font-bold mt-4 py-2 px-6 rounded-md">
            Read More </button>
        </div>

        {/* Right Image Section */}
        <div className="lg:w-1/2 grid grid-cols-2 mt-10 mr-6">

          <Image
            src="/image3.jpg"
            alt="Egg Toast"
            width={400}
            height={100}
            className="rounded-lg"
          />

        </div>
      </div>
    </section>







  )
}

export default About

