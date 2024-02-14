import React from 'react'
import './Step_3.scss';
import Image from 'next/image';

const Step_3 = () => {
  return (
    <section className="step-3-container">
        <div className='step-3-section'>
        <div className="step-3-left-div">
          {/* Content for the left div */}
          <div className='card'>
          <Image src="cc.svg" width={389} height={243}/>
          </div>
          <div className='layout'>
            <Image src="blacklayout.svg" width={72} height={46}/>
            <Image src="bluelayout.svg" width={66} height={40} />
            <Image src="redlayout.svg" width={66} height={40}/>
            <Image src="mixlayout.svg" width={66} height={40}/>
          </div>
        </div>
        {/* COntent for right side */}
        <div className="step-2-right-div">
            <div className='cable-logo'>
            <Image className="textlogo" src="textlogo.svg" width={30} height={30}/>
            </div>
            <p className='step-3-p1'>Select Your Style</p>
            <p className='step-3-p2'>Match your card to your personality. Whether you like a minimal look or something that catches everyone’s eyes, we’ve got a style for you. You can update your style every year, for a small fee </p>
            {/* <div className='image-my'>
            <Image src="my.svg" width={328} height={400}/>
            </div> */}
        </div>
        </div>
      </section>
  )
}

export default Step_3