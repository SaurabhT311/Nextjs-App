import React from 'react'
import './Hero.scss';
import Image from 'next/image';
const Hero = () => {
  return (
    <section className='hero-container'>
      

      {/* LEFT-SIDE */}
      <div className="section-container z-20 flex flex-1 flex-col xl:w-1/2">
        <h1 className='h1-container'>Build a Credit Card That is Definitely Yours</h1>
        <p className='text-container mt-6 xl:max-w-[520px]'>With the OneSync Credit Card you can customise your card the way you want</p>
        <button className="section-button text-base text-center" type="button">Get Started</button>
      </div>
      {/* RIGHT-SIDE */}
      <div className='credit-card'>
        <Image src="credit-card.svg" 
        alt="credit card" 
        width={600} 
        height={410} />
        </div>
    </section>
  )
}

export default Hero