import React from 'react'
import { CiSearch } from "react-icons/ci";
import Link from 'next/link';
const Header = () => {
    return (

        <div className="bg-black text-white w-full h-[100] px-6 p-4">
            <div className=''>
            <h1 className='text-center font-bold text-yellow-400 text-3xl'>Food Tuck</h1>
            </div>
            {/* Header */}
            <header className="flex justify-between items-center py-4">
                <nav className="flex space-x-6">
                    <a href="#" className="hover:text-orange-500">Home</a>
                    <a href="#" className="hover:text-orange-500">Menu</a>
                    <a href="#" className="hover:text-orange-500">Blog</a>
                    <a href="#" className="hover:text-orange-500">Pages</a>
                    <Link href="/about" className="hover:text-orange-500">About</Link>
                    <a href="#" className="hover:text-orange-500">Shop</a>
                    <a href="#" className="hover:text-orange-500">Contact</a>
                </nav>
                <div className='relative'>
                    <input
                        type="text"
                        placeholder="Search..."
                        className="bg-gray-800 text-white px-3 py-1 rounded-md" />

                    <CiSearch className='absolute right-2 top-2'/>

                </div>
            </header>
        </div>

    )
}

export default Header
