import React from 'react'
import Button from './Button'
import Brochure from "../assets/brochurebook.png";

const DownloadBrochure = () => {
  return (
    <div className='relative rounded rounded-xl shadow-xl border border-gray-600'>
    <div
    className="items-center w-10/12 grid-cols-2 mx-auto overflow-x-hidden lg:grid md:py-14 lg:py-24 xl:py-14 lg:mt-3 xl:mt-5"
    data-aos="fade-right"
    data-aos-duration={800}
  >
    <div className=" md:mb-14 py-14 md:py-0">
      <h1 className="text-2xl font-semibold text-primary xl:text-4xl lg:text-2xl">
        Download Brochure
      </h1>
        <div className='py-4 text-lg text-gray-500 2xl:py-8 md:py-6 2xl:pr-5'>
            <input type='text' placeholder='Full Name' className='placeholder-primary text-base w-full lg:w-64 border-b text-primary border-primary focus:border-primary'/>
        </div>
        <div className='py-4 text-lg text-gray-500 2xl:py-8 md:py-6 2xl:pr-5'>
            <input type='text' placeholder='Phone with Country Code' className='placeholder-primary text-base w-full lg:w-64 border-b text-primary border-primary focus:border-primary'/>

        </div>

      <div className="mt-4 text-white">
        <Button text="Download Brochure" />
      </div>
    </div>
    <div></div>
    <div className="sm:relative md:relative lg:absolute xl:absolute lg:right-0 xl:right-0 lg:mt-5 xl:mt-5 md:p-10 lg:p-0 sm:pb-0">
      <img
        id="heroImg1"
        className=" transition-all duration-300 ease-in-out hover:scale-105 "
        src={Brochure}
        alt="Awesome hero page image"
       
      />
    </div>
  </div>
  </div>
  )
}

export default DownloadBrochure