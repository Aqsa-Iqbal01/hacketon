import React from 'react';

export default function Form() {
  return (
    <div className="  items-center mt-10 space-x-8 flex ">
      <div className='ml-9 '>
      {/* Left Side: Radio Button */}
      <div className=" ml-16  ">
        <input
          type="radio"
          id="option1"
          name="options"
          className="h-5 w-5  text-blue-500 border-gray-300 rounded"
        />
        <label htmlFor="option1" className="text-lg font-semibold ml-3 mb-5">
          Pick-Up 
        </label>
      
      </div>
      <div className='flex gap-32'>
      <div className='ml-16'>
        <h2 className='text-lg font-bold'>Locations</h2>
        <h4 className='text-sm text-gray-400'>select your city</h4>
        <select> 
          <option></option>
          <option>karachi</option>
          <option>islamabad</option>
          <option>lahore</option>
          

        </select>
      </div>
      <div>
        <h2>Date</h2>
        <h4>select your date</h4>
        <select> 
          <option></option>
          <option>15</option>
          <option>17</option>
          <option>26</option>
          <option>20</option>
          <option>19</option>
          

        </select>
      </div>
      <div>
        <h2>Time</h2>
        <h4>select your date</h4>
        <select> 
          <option></option>
          <option>2:30</option>
          <option>12:30</option>
          <option>4:00</option>
          <option>7:00</option>
          <option>10:30</option>
          

        </select>
      </div>
      </div>
      </div>
      <div className=" relative left-48 mb-24    ">
        <input
          type="radio"
          id="option1"
          name="options"
          className="h-5 w-5  text-blue-500 relative mr-2 border-gray-300 rounded"
        />
        <label htmlFor="option1" className="text-lg  font-semibold  ">
         Drop-Off 
        </label>
      
      </div>
      <div className='flex gap-32'>
      <div className='ml-16'>
        <h2 className='text-lg font-bold'>Location</h2>
        <h4 className='text-sm text-gray-400'>search your city</h4>
        <select> 
          <option></option>
          <option>karachi</option>
          <option>islamabad</option>
          <option>lahore</option>
          

        </select>
      </div>
      
      <div>
        <h2>Date</h2>
        <h4>select your date</h4>
        <select> 
          <option></option>
          <option>15</option>
          <option>17</option>
          <option>26</option>
          <option>20</option>
          <option>19</option>
          

        </select>
      </div>
      <div>
        <h2>Time</h2>
        <h4>select your date</h4>
        <select> 
          <option></option>
          <option>2:30</option>
          <option>12:30</option>
          <option>4:00</option>
          <option>7:00</option>
          <option>10:30</option>
          

        </select>
      </div>
      </div>
      </div>
  );
}
