import React from 'react'
import Image from 'next/image'
const Foodcat = () => {
    return (
        <div>

            <div className="bg-black h-[470] text-white w-full px-6">
                <div className=''>
                    <h1 className='text-center font-serif text-orange-500 text-2xl'>Food Category</h1></div>
                <h1 className="text-orange-400 font-bold text-4xl text-center mt-4 ">Choose Food Item</h1>
                <br />

                <div className='  mt-7 gap-10 sm:flex-col-1 md:flex ml-8'>
                    <div>
                        <div className='w-[270px] h-[250px] bg-black outline-white flex justify-center items-center'>
                            <Image src={"/image6.jpg"} width={200} height={150} className='h-64 w-64' alt="image" />
                        </div>
                    </div>
                    
                <div>
                        <div className='w-[270px] h-[250px] bg-black outline-white flex justify-center items-center'>
                            
                            <Image src={"/image7.jpg"} width={200} height={150} className='h-64 w-64' alt="image"/>

                        </div>


                    </div>

                    <div>
                        <div className='w-[270px] h-[250px]  bg-black outline-white flex justify-center items-center'>
                            
                            <Image src={"/image8.jpg"} width={200} height={150} className='h-64 w-64' alt="image" />

                        </div>

                    </div>

                    <div>
                        <div className='w-[270px] h-[250px]  bg-black outline-white flex justify-center items-center'>
                            
                            <Image src={"/image9.jpg"} width={200} height={150} className='h-64 w-64' alt="image" />

                        </div>


                    </div>
                </div>




            </div>

        </div>
    )
}

export default Foodcat