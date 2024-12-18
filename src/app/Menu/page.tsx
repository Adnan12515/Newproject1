import React from 'react'
import Image from 'next/image'


const page = () => {
  return (



    <section className="bg-black text-white justify-center py-12 px-2 w-full pl-8">

      <div>
        <p className='text-4xl font-bold text-center justify-center text-yellow-500 py-3 underline underline-offset-4'>Our Menu</p>

        <Image src='/m-image1.jpg' height={600} width={400} className='md:rounded md:w-full md:h-[600px] sm:w-[500] sm:h-[250] ' alt="j"/>
      </div>


      <div className="gap-[200px] md:flex flex-col-2 pr-16 pl-4 mt-20">

        <div className='md:w-[50%] text-center items-center'>
          <Image src='/start-1.jpg' height={100} width={200} className='md:pl-24 md:w-[500] h-[250] rounded-md' alt="h" />
        </div>

        <div className='md:w-[50%] md:font-medium text-2xl text-center items-center'>
          <h1 className="text-2xl font-bold py-3 underline underline-offset-4 ">
            Duck, chicken a<span className="text-yellow-500">nd sour cherry terrine</span></h1>

          <p className='font-normal text-xl hover hover:text-orange-400'>This indulgent terrine is an impressive starter recipe to make for your guests. Packed with rich meats and pistachio jewels, this is a starter your guests will remember.</p>
        </div>
      </div>

      <div className="gap-[200px] md:flex flex-col-2 pr-16 pl-4 mt-20">

        <div className='md:w-[50%] md:font-medium text-2xl text-center items-center'>
          <h1 className="text-2xl font-bold py-3 underline underline-offset-4 ">
            Chicken <span className="text-yellow-500">Nachos</span></h1>

          <p className='font-normal text-xl hover hover:text-orange-400'>Take this sheet pan of nachos straight from the oven to the table so the whole family can dig in. Since the pan is lined with aluminum foil, cleanup will be a breeze.</p>
        </div>

        <div className='md:w-[50%] text-center items-center'>
          <Image src='/start-2.jpg' height={100} width={200} className='md:pl-24 md:w-[500] h-[250] rounded-md'alt="u" />
        </div>

      </div>

      <div className="gap-[200px] md:flex flex-col-2 pr-16 pl-4 mt-20">

        <div className='md:w-[50%] text-center items-center'>
          <Image src='/start-3.jpg'height={100} width={200} className='md:pl-24 md:w-[500] h-[250] rounded-md'alt="t" />
        </div>

        <div className='md:w-[50%] md:font-medium text-2xl text-center items-center'>
          <h1 className="text-2xl font-bold py-3 underline underline-offset-4 ">
            Pan-Seared <span className="text-yellow-500">Strip Steaks</span></h1>

          <p className='font-normal text-xl hover hover:text-orange-400'>We are sharing the secret to cooking up a restaurant-quality steak at home: mayonnaise. Just trust us, once you prepare your steaks this way, you will never return to any other method.</p>
        </div>
      </div>


      <div className="gap-[200px] md:flex flex-col-2 pr-16 pl-4 mt-20">

        <div className='md:w-[50%] md:font-medium text-2xl text-center items-center'>
          <h1 className="text-2xl font-bold py-3 underline underline-offset-4 ">
            Mississippi P<span className="text-yellow-500">ork Chops</span></h1>

          <p className='font-normal text-xl hover hover:text-orange-400'>Just like in classic Mississippi pot roast, this recipe gets its flavor from a cup of pepperoncini peppers. However, unlike the pot roast which cooks all day, this main dish comes together in just 35 minutes.</p>
        </div>

        <div className='md:w-[50%] text-center items-center'>
          <Image src='/start-4.jpg'height={100} width={200} className='md:pl-24 md:w-[500] h-[250] rounded-md' alt="e"/>
        </div>
      </div>


      <div className="gap-[200px] md:flex flex-col-2 pr-16 pl-4 mt-20">

        <div className='md:w-[50%] text-center items-center'>
          <Image src='/start-5.jpg' height={100} width={200} className='md:pl-24 md:w-[500] h-[250] rounded-md' alt="r" />
        </div>

        <div className='md:w-[50%] md:font-medium text-2xl text-center items-center'>
          <h1 className="text-2xl font-bold py-3 underline underline-offset-4 ">
          Desserts for A<span className="text-yellow-500">fter Dinner</span></h1>

          <p className='font-normal text-xl hover hover:text-orange-400'>Balance out the salt with the sweet with these delectable dessert and sweet treat recipes! Dessert does not have to wait until after dinner.
          </p>
        </div>
      </div>
    </section>
  )
}

export default page
