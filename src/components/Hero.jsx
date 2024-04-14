


import { curve, heroBackground, robot } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from './design/Hero';
import { heroIcons } from '../constants';
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import Generating from "./Generating";
import Notification from "./Notification";
import CompanyLogos from "./CompanyLogos";

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section className="pt-[14rem] -mt-[5.25]" crosses crossesOffset="lg:translate-y-[5.25rem]" customPaddings id="hero">
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb-[6rem]">
          <h1 className="h1 mb-6 mt-8">
            {/* Explore the Possibilities of&nbsp;AI&nbsp;Chatting with {`  `} */}
            Discover the Potential of AI Conversations with{` `}

            <span className="inline-block relative">Brainwave <img src={curve} className="absolute top-full left-0 w-full xl:mt-2" width={624} height={28} alt="Curve" />
            </span>
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
          Embrace the possibilities of AI in Brainwave. Step up your productivity with Brainwave, the open AI dialogue system.
          </p>
          <Button href="/pricing" white>Get Started</Button>
        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
          <div className="relative bg-n-8 rounded-[1rem]">
  <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />
  <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">  {/* Restored original aspect ratios */}
    <img 
      src={robot} 
      className="w-full object-cover object-top" 
      style={{ transform: 'translateY(-10%)' }} 
      alt="AI"
    />
    <div className="absolute inset-0 flex justify-center items-center" style={{ top: "calc(100% - 4rem)" }}>
      <Generating className="w-[38rem]" />
    </div>
    <ScrollParallax isAbsolutelyPositioned>
      <ul className="hidden absolute left-[-3.7rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex ">
        {heroIcons.map((icon, index) => (
          <li className="p-5" key={index}>
            <img src={icon} width={24} height={25} alt="icon" />
          </li>
        ))}
      </ul>
    </ScrollParallax>
    <ScrollParallax isAbsolutelyPositioned>
      <Notification className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex"
        title="Code Generation"/>
    </ScrollParallax>
  </div>
</div>

            <Gradient />
          </div>
          <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
            <img className="w-full" width={1440} height={1800} src={heroBackground} alt="hero" />
          </div>
          <BackgroundCircles />
        </div>


         <CompanyLogos className="hidden relative z-10 mt-20 lg:block"/>

      </div>
      <BottomLine />
    </Section>
  )
}

export default Hero;


