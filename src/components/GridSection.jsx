import React from 'react'

const GridSection = () => {
  return (
    <div className="relative md:mb-20 flex flex-col items-center max-w-screen-xl mx-auto md:flex-row sm:py-8">
    <div className="flex items-center md:w-1/2 ">
        <div className="text-left">
            <h2
                className="text-5xl font-semibold leading-10 tracking-tight text-black-600 sm:text-3xl sm:leading-none md:text-5xl">
                About Projects
            </h2>
            <p className="max-w-md mx-auto text-1xl text-black-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Situated next to The Oberoi Beach Resort, Al Zorah, Gateway Porto Al Zorah is a premium marina-front project by Al Zorah Development Company. Nestled amidst lush mangroves and sitting on the waterfront, the complex houses comfortable studios, 1-3 bedroom apartments and 2-3 bedroom duplexes.
            </p>
            <div className="mt-5 md:mt-8">
                <hr className='border-t-2 border-black-500'/>
                <p className='uppercase mt-3'>Start Price</p>
                <p className='uppercase mb-3'>AED 8,800,000</p>
                <hr className='border-t-2 border-black-500'/>
                <p className='uppercase mt-3'>Payment Plan</p>
                <p className='uppercase mb-3'>Easy 70/30</p>
                <hr className='border-t-2 border-black-500'/>
                <p className='uppercase mt-3'>Handover</p>
                <p className='uppercase mb-3'>2026-12-29</p>
                
            </div>
        </div>
    </div>
    <div className="flex items-center md:w-1/2 ">
        <div className="relative w-full rounded  ">
            <div className="rounded-lg bg-white text-black w-full flex justify-end">
                <img className='rounded-xl' src="https://picsum.photos/400/300" />
            </div>
        </div>
    </div>
</div>
  )
}

export default GridSection