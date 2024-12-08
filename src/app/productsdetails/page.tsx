import React from 'react'
import Image from 'next/image'

export default function ProductDetails() {
  return (
    <div>
      <div className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {/* Product 1 */}
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-50 rounded overflow-hidden">
                <Image src='/Catalog 1.png' alt="image" width="500" height="500" />
              </a>
              <div className="mt-4 flex justify-between mb-12 items-center">
                <p className="text-lg font-semibold mt-9">$80.00/days</p>
                <button className='bg-blue-500 text-white py-2 px-7  rounded-md'>Add to Cart</button>
              </div>
            </div>
            
            {/* Product 2 */}
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-50 rounded overflow-hidden">
                <Image src='/Catalog 2.png' alt="image" width="500" height="500" />
              </a>
              <div className="mt-4 flex justify-between items-center">
                <p className="text-lg font-semibold mt-9">$96.00/days</p>
                <button className='bg-blue-500 text-white py-2 px-7  rounded-md'>Add to Cart</button>
              </div>
            </div>

            {/* Product 3 */}
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-50 rounded overflow-hidden">
                <Image src='/Catalog 1.png' alt="image" width="500" height="500" />
              </a>
              <div className="mt-4 flex justify-between items-center">
                <p className="text-lg font-semibold mt-9">$72.00/days</p>
                <button className='bg-blue-500 text-white py-2 px-7  rounded-md'>Add to Cart</button>
              </div>
            </div>

            {/* Product 4 */}
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-50 rounded overflow-hidden">
                <Image src='/Catalog 2.png' alt="image" width="500" height="500" />
              </a>
              <div className="mt-4 flex justify-between items-center">
                <p className="text-lg font-semibold mt-9">$80.00/days</p>
                <button className='bg-blue-500 text-white py-2 px-7  rounded-md'>Add to Cart</button>
              </div>
            </div>

            {/* Product 5 */}
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-50 rounded overflow-hidden">
                <Image src='/Catalog 1 (1).png' alt="image" width="500" height="500" />
              </a>
              <div className="mt-4 flex justify-between items-center">
                <p className="text-lg font-semibold mt-9">$74.00/days</p>
                <button className='bg-blue-500 text-white py-2 px-7 rounded-md'>Add to Cart</button>
              </div>
            </div>

            {/* Product 6 */}
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-50 rounded overflow-hidden">
                <Image src='/Catalog 2 (1).png' alt="image" width="500" height="500" />
              </a>
              <div className="mt-4 flex justify-between items-center">
                <p className="text-lg font-semibold mt-9">$76.00/days</p>
                <button className='bg-blue-500 text-white py-2 px-7  rounded-md'>Add to Cart</button>
              </div>
            </div>

            {/* Product 7 */}
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-50 rounded overflow-hidden">
                <Image src="/Catalog 3 (1).png" alt="Catalog Image" width={500} height={500} />
              </a>
              <div className="mt-4 flex justify-between items-center">
                <p className="text-lg font-semibold mt-9">$80.00/days</p>
                <button className='bg-blue-500 text-white py-2 px-7 rounded-md'>Add to Cart</button>
              </div>
            </div>

            {/* Product 8 */}
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-50 rounded overflow-hidden">
                <Image src="/Catalog 1 (2).png" alt="Catalog Image" width={500} height={500} />
              </a>
              <div className="mt-4 flex justify-between items-center">
                <p className="text-lg font-semibold mt-9">$74.00/days
                </p>
                <button className='bg-blue-500 text-white py-2 px-7  rounded-md'>Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
