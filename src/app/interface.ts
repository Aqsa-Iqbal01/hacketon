

export interface fullProduct {
    _id:string;
    name: string;
    image:string;
    pricePerDay:string;
    fuelCapacity:string;
    seatingCapacity: number;
    tags:string;
    transmission:string;

    

    
}
export interface Car {
    _id: string;                 // Unique identifier for the car
    name: string;                // Name of the car
    type: string;                // Type of the car (e.g., Sedan, SUV)
    transmission: string;        // Transmission type (e.g., Automatic, Manual)
    pricePerDay: number;         // Daily rental price
    seatingCapacity: number;     // Number of seats in the car
    fuelCapacity: number;        // Fuel capacity of the car in liters
    imageUrl: string; 
    slug: string                // URL for the car's image
  }

  export interface CarDetails {
                   // Unique identifier for the car
    name: string;                // Name of the car
    type: string;                // Type of the car (e.g., Sedan, SUV)
    transmission: string;        // Transmission type (e.g., Automatic, Manual)
    pricePerDay: number;         // Daily rental price
    seatingCapacity: number;     // Number of seats in the car
    fuelCapacity: number;        // Fuel capacity of the car in liters
    image: string; 
    slug: string              // URL for the car's image
  }
  