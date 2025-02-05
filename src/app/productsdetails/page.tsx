import { client } from "@/sanity/lib/client";
import Link from "next/link";
import Image from "next/image";
import { Car } from "../interface";
import Wrap from "../components/Wrap";

// Fetching the car data
async function getData() {
  const query = `*[_type == "car"][0..14]{
    _id,
    name,
    pricePerDay,
    "slug": slug.current,
    "imageUrl": image.asset->url
  }`;
  const data = await client.fetch(query);
  return data;
}

export default async function Products() {
  const data: Car[] = await getData();

  return (
    <div className="bg-gray-50 lg:px-2 overflow-x-hidden">
      <Wrap>
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-800 mb-6 ml-2">
            Our Newest Cars
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {data.map((car: Car) => (
              <div
                key={car._id}
                className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition translate-y-4 flex flex-col h-full"
              >
                {/* Car Name */}
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  <Link href={`/product/${car.slug}`}>{car.name}</Link> {/* Fixed syntax for href */}
                </h3>

                {/* Car Image */}
                <div className="w-full aspect-video mb-4 overflow-hidden rounded-md bg-white">
                  <Image
                    src={car.imageUrl || '/default-image.jpg'} // Added fallback for image
                    alt={car.name}
                    width={500}
                    height={300}
                    layout="responsive"
                    objectFit="cover" // Ensures image covers the area without stretching
                  />
                </div>

                {/* Car Price */}
                <p className="text-xl font-semibold text-gray-500 mb-4 flex-grow">
                  {car.pricePerDay}
                </p>

                {/* Rent Button */}
                <div className="flex justify-start mt-auto">
                  <Link href={`/product/${car.slug}`}> {/* Fixed syntax for href */}
                    <button className="bg-blue-600 text-white py-2 px-7 rounded-lg hover:bg-blue-400 duration-300 hover:scale-105 transition">
                      Rent Now
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Wrap>
    </div>
  );
}
