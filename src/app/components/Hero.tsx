import React from 'react'
import Image from 'next/image'

export default function Hero() {
  return (
    <div className='flex justify-between mx-28 my-32 '>
<div className='bg-blue-400 py-24 px-20 rounded-lg '>
      <div className=''>
{/* left side  */}
<h2 className='text-4xl text-white font-semibold text-start '>The Best Platform <br /> for Car Rental</h2>
<h4 className='text-xl font-sans text-white mt-3'>Ease of doing a car rental safely and <br /> reliably. Of course at a low price.</h4>
<button className='text-xl py-4 px-9 bg-blue-800 text-white mt-5 rounded-md'>Rental Car</button>
<div>
    <Image src='/image 7.png' alt='hero.img' width='500' height='500' className='mt-16 ml-10'></Image>
</div>
      </div>
      </div>
      <div className='bg-blue-700 py-24 px-14  rounded-lg mr-14 hidden md:flex'>
      <div className=''>
{/* right side  */}
<h2 className='text-4xl text-white font-semibold mb-12'>Easy way to rent a car at a low price</h2>
<h4 className='text-xl font-sans text-white mt-3'>Providing cheap car rental services <br /> and safe and comfortable facilities.</h4>
<button className='text-xl py-4 px-9 bg-blue-400 text-white mt-5 rounded-md'>Rental Car</button>
<div>
<Image src='/image 8.png' alt='hero.img' width='500' height='500' className='mt-16 ml-24'></Image></div>
      </div>
      </div>
    </div>

  )
}
