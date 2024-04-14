


import React from 'react';
import Section from './Section';
import Heading from './Heading';
import { check, service1, service2, service3 } from '../assets';
import { brainwaveServices, brainwaveServicesIcons } from '../constants';  
import Generating from './Generating';
import { Gradient, PhotoChatMessage, VideoBar, VideoChatMessage } from "./design/Services"; 
const Services = () => {
  return (
    <Section id="how-to-use">
      <div className="container">
        <Heading title="Generative AI made for creators."
          text="Brainwave unlocks the potential of AI-powered applications" />
        <div className="relative">
          <div className="relative z-1 flex items-center
            h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className='absolute top-0 left-0 w-full pointer-events-none md:w-3/5 xl:w-auto'>
              <img className='w-full h-full object-cover md:object-right'
                width={800}
                alt='Services AI'
                src={service1} />
            </div>

            <div className="relative z-1 max-w-[17rem] ml-auto">
              <h4 className='h4 mb-4'>Smartest AI</h4>
              <p className='body-2 mb-[3rem] text-n-3'>Brainwave unlocks the potential of AI-powered applications</p>
              <ul className='body-2'>
                {brainwaveServices.map((item, index) => (
                  <li
                    key={index} className='flex items-start py-4 border-t border-n-6'>

                    <img width={24} height={24} src={check} alt="check" />

                    <p className='ml-4'>{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            <Generating className="absolute bottom-4 border-n-1/10 border lg:left-1/2 lg:right-auto lg:bottom-0 lg:-translate-x-1/2 px-4 left-5 right-5" />
          </div>
          <div className='relative z-1 grid gap-5 lg:grid-cols-2'>
            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                <img className='h-full w-full object-cover'
                  width={630}
                  height={750} src={service2} alt="service2" />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h4 className='h4 mb-4'>Photo editing</h4>
                <p className='body-2 mb-[3rem] text-n-3'>Automatically enhance your photos using our AI app's photo editing feature. Try it now!</p>
              </div>
              <PhotoChatMessage />
            </div>
            <div className="p-4 bg-n-7 overflow-hidden lg:min-h-[46rem]">
              <div className="py-12 px-4 xl:px-8">
                <h4 className='h4 mb-4'>Video generation</h4>
                <p className='body-2 mb-[2rem] text-n-3'>Unleash your creativity with the world’s leading AI art generator for photos and videos. What will you design?</p>
                <ul className='flex items-center justify-between'>
                  {brainwaveServicesIcons.map((item, index) => (
                    <li key={index}>
                      <div>
                        <img src={item} alt="" />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className='relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem] ' >
                <img src={service3} width={520}
                height={400}
                 alt="AI-Service3" />
                 <VideoChatMessage/>
                 <VideoBar/>
              </div>
            </div>
          </div>
          <Gradient/>
        </div>
      </div>
    </Section>
  )
};
//video Gen items are not fully css driven.Will update later

export default Services;
