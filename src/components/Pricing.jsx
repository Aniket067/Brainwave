
import React from 'react'
import { smallSphere, stars } from '../assets'
import Heading from './Heading'
import PricingList from './PricingList'
import { LeftLine, RightLine } from "./design/Pricing";

const Pricing = () => {
    return (
        <section className='overflow-hidden' id='pricing'>
            <div className="container relative z-10">
       
                <div className="flex justify-center mb-20 lg:mb-28 relative">
                  
                    <img className='relative z-20 w-40 h-40 lg:w-64 lg:h-64 xl:w-80 xl:h-80 2xl:w-[255px] 2xl:h-[255px] mx-auto'
                        src={smallSphere}
                        alt="small sphere" />
                    {/* Stars Image - Use responsive utility classes for position and size adjustments */}
                    <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none w-full max-w-[60rem] px-4 lg:px-0'>
                        <img className='w-full h-auto'
                            src={stars} alt="stars" />
                    </div>
                </div>
             
                <Heading
                    tag="GET STARTED WITH BRAINWAVE"
                    title="Single Payment, Eternal Usage"
                />
                <div className='relative'>
                    <PricingList />
                    <LeftLine/>
                    <RightLine/>



                </div>
            </div>



        </section>
    )
}

export default Pricing;
