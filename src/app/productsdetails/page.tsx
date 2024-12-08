'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from "next/link";
import { Card,CardContent,CardFooter, CardHeader,} from "@/components/ui/card";

 
export default function Page() {
  const [showMore, setShowMore] = useState(false); 

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    // products images 
    <div className='w-full flex'>
      <div className="first hidden sm:flex w-[20%]">
        <Image src={'/Nav Bar Side.png'} alt='' width={360} height={1600}/>
      </div>
      <div className="sec w-full sm:w-[80%] bg-[#f6f7f9] p-4 sm:p-6  flex flex-col gap-10 font-[family-name:var(--font-geist-sans)]">
        <section className="w-full flex flex-col sm:flex-row items-center justify-center sm:justify-between ">
          <Image src={"/Pick - Up.png"} alt="" width={582} height={132} className="w-[200px] md:w-[270px] lg:w-[582px]" />
          <Image src={"/Switch.png"} alt="" width={60} height={60} className="w-[80px]" />
          <Image src={"/Drop - Off.jpg"} alt="" width={582} height={132} className=' w-[200px] md:w-[270px] lg:w-[582px]' />
        </section>
        <section className="popular w-full flex flex-col gap-4">
          <div className="sec grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {  image: '/catalog 1.png',  },
              {  image: '/catalog 2.png',  },
              {  image: '/catalog 3.png',  },
              {  image: '/catalog 1.png', },
              {  image: '/Catalog 2 (3).png',  },
              {  image: '/Catalog 1 (2).png',},
              {  image: '/Catalog 1 (1).png',  },
              {  image: '/Catalog 1 (2).png',  },
            ].map((car, index) => (
              <Card key={index} className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
                
                <CardContent className="w-full flex md:flex-col items-center justify-center gap-4">
                  <Image src={car.image} alt="" width={220} height={68} />
                 
                </CardContent>
                <CardFooter className="w-full flex items-center justify-between">
                  <p>
                    $99.00/<span className="text-gray-500">day</span>
                  </p>
                  <Link href={'/details'}>
                  <button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button></Link>
                </CardFooter>
              </Card>
            ))}
          </div>
          {showMore && (
            <div className="sec grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {  image: '/Catalog 1.png', },
                {   image: '/Catalog 2.png', },
                {  image: '/Catalog 3.png',  },
                {  image: '/Catalog 1.png',  },
              ].map((car, index) => (
                <Card key={index} className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
                  
                  <CardContent className="w-full flex md:flex-col items-center justify-center gap-4">
                    <Image src={car.image} alt="" width={220} height={68} />
                    
                  </CardContent>
                  <CardFooter className="w-full flex items-center justify-between">
                    <p>
                      $99.00/<span className="text-gray-500">day</span>
                    </p>
                    <button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
        </section>

        <section className="button w-full text-center">
          <button 
            onClick={toggleShowMore} 
            className="bg-[#3563e9] px-4 py-2 text-white rounded-md mt-5"
          >
            {showMore ? "Show Less Cars" : "Show More Cars"}
          </button>
        </section>
      </div>
    </div>
  );
}
