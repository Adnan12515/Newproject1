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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque <br /> diam
            pellentesque  bibendum non dui volutpat fringilla bibendum.<br /> Urna, elit
            augue urna, vitae feugiat pretium donec id elementum.<br /> Ultrices mattis
            sed vitae mus risus. Lacus nisi, et ac dapibus.
          </p>
          <ul className="space-y-2 mt-3 mb-3">
            <li className="">
              <span className="text-green-400 mr-2">✔</span> Lacus nisi, et ac dapibus sit eu velit in consequat.
            </li>
            <li className="">
              <span className="text-green-400 mr-2">✔</span> Quisque diam pellentesque bibendum non dui volutpat fringilla.
            </li>
            <li className="">
              <span className="text-green-400 mr-2">✔</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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

