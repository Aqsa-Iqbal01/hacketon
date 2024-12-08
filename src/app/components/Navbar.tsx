import React from 'react'
import Image from 'next/image'

    import { FiSearch } from 'react-icons/fi'
import { LuSettings2 } from 'react-icons/lu'
import { FaBell, FaHeart } from 'react-icons/fa'
import { IoSettingsSharp } from 'react-icons/io5'

export default function Navbar() {
  return (
    <div className='flex justify-between shadow-md bg-white '>
      <div  className='mt-5 ml-3 md:ml-24'>
        {/* left side div  */}
        <Image src="/Logo (1).jpg" alt='img' width="150" height="100" className='w-20 md:mr-96 mt-3'></Image>
      </div>
      <div className=' border-md text-grey-500'>
        {/* center side div  */}
        
        <div className="flex flex-row md:flex items-center mb-5 mr-96  bg-gray-100 border border-gray-300 px-6 py-3 w-96 mt-3 rounded-full">
            <input
              type="text"
              placeholder="Search somthing here?" 
              className="outline-none bg-transparent text-sm text-gray-700 text-center ml-7 "
            />
            <FiSearch className="text-gray-500 text-2xl cursor-pointer relative right-48 size-6" />
            <LuSettings2 className='relative left-24 size-6 text-gray-500' />
          </div>
          </div>
      <div className='flex gap-7 md:mr-24 mt-5 text-xl mb-5 '>
        {/* right side div  */}
        {/* icons  */}
        <FaHeart className='mt-3' />
        <FaBell className='mt-3' />
        <IoSettingsSharp className='mt-3' />
        <Image src="/Image.png" alt='img' width="40" height="40" className='mr-2'></Image>

      </div>
    </div>
  )
}
