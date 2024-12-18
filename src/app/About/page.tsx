import React from 'react'
import Image from 'next/image'

const About = () => {
    return (

        <section className="bg-black text-white justify-center py-12 px-2 w-full pl-8">
            <div className="gap-[200px] md:flex flex-col-2 items-center justify-between pr-4">
                {/* Left Text Section */}
                <div className="space-y-3 md:w-[60%]">
                    <h2 className="text-orange-600 font-semibold text-3xl text-center underline underline-offset-1">About us</h2>
                    <h1 className="text-2xl font-bold">
                        Welco<span className="text-yellow-500">me to Best Food</span></h1>
                    <p className='font-normal text-xl'>your ultimate destination for discovering and celebrating the world of flavors!
                        <br />
                        At Best Food, we believe food is not just about nourishment it is an experience, a story, and a way to bring people together. Our mission is to inspire and connect food enthusiasts by providing a space where taste meets creativity, and everyone can explore the joys of cooking, dining, and culinary innovation.</p>
                </div>

                <div className=' md:w-[40%]'>
                    <Image src="/a-image1.jpg" height={100} width={200} className='rounded-md h-[300px] w-[300px] py-8 justify-center' alt="pic"/>
                </div>
            </div>


            <div className="gap-[200px] md:flex flex-col-2 items-center justify-between pr-4 pt-4">
                {/* Left Text Section */}
                <div className="space-y-3 md:w-[60%]">
                    <h2 className="text-orange-600 font-semibold text-3xl underline underline-offset-1 text-center">Who We Are
                    </h2>
                    <h1 className="text-2xl font-bold">
                    We are a passio<span className="text-yellow-500">nate team of chefs,</span></h1>
                    <p className='font-normal text-xl'>food critics, and culinary explorers who have one thing in common: a love for great food. Whether it is exploring hidden gems in the world of fine dining or sharing simple, heartwarming recipes for your kitchen, we are here to make every bite count.</p>
                </div>

                <div className=' md:w-[40%]'>
                    <Image src="/a-image2.jpg" height={100} width={200} className='rounded-md h-[300px] w-[300px] py-12' alt="photo"/>
                </div>
            </div>

            <div className="gap-[200px] md:flex flex-col-2 items-center justify-between pr-4 pt-4">
                {/* Left Text Section */}
                <div className="space-y-3 md:w-[60%]">
                    <h2 className= "text-orange-600 font-semibold text-3xl underline underline-offset-1 text-center">What We Offer</h2>
                    
                    <h1 className="text-2xl font-bold py-3">
                    Recipes You <span className="text-yellow-500">will love</span></h1>
                    <p className='font-normal text-xl'>From quick weeknight dinners to indulgent desserts, our recipes are crafted and tested to ensure they delight every time</p>

                    <h1 className="text-2xl font-bold py-3">
                    Foodie In<span className="text-yellow-500">sights:</span></h1>
                    <p className='font-normal text-xl'>Discover tips, trends, and stories that help you deepen your love for all things food.</p>

                    <h1 className="text-2xl font-bold py-3">
                    Restaur<span className="text-yellow-500">ant Reviews:</span></h1>
                    <p className='font-normal text-xl'>Honest and in-depth reviews of the best food spots across the globe.</p>
                 

                </div>

                <div className=' md:w-[40%]'>
                    <Image src="/a-image3.jpg" height={100} width={200} className='rounded-md h-[370px] w-[300px] mt-12' alt="v" />
                </div>
            </div>


        </section>







    )
}

export default About