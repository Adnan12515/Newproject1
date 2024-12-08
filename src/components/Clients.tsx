import React from 'react'
import { PiChefHat } from "react-icons/pi";
import { ImSpoonKnife } from "react-icons/im";
import { IoFastFoodOutline } from "react-icons/io5";
import { LiaRestroomSolid } from "react-icons/lia";



export default function Clients() {
  return (

    <div>
    <div className=' h-[100] relative  sm:flex-col-1 md:flex text-6xl text-yellow-500 bg-black'>
        <PiChefHat className='ml-48'/>
        <ImSpoonKnife className='ml-56'/>
        <IoFastFoodOutline className='ml-60' />
        <LiaRestroomSolid className='ml-72' />
    
    </div>    

        <div className='text-white gap-32 h-[60] font-bold text-2xl bg-black px-16 sm:flex-col-1 md:flex '>
            <h1 className='ml-4'>Professional Chefs</h1>
            <h1>Items of Food</h1>
            <h1>Years of Experience</h1>
            <h1>Happy Customer</h1>

        </div>
    
        <div className='text-white gap-64 h-[50] font-bold text-4xl bg-black px-16 sm:flex-col-1 md:flex '>
            <h1 className='ml-20'>420</h1>
            <h1>320</h1>
            <h1>30 + </h1>
            <h1 className='ml-8'>220</h1>

        </div>

    </div>
  )
}
