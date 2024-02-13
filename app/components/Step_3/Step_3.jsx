import React from 'react'
import './Step_3.scss';
import Image from 'next/image';

const Step_3 = () => {
  return (
    <section className="step-3-container">
        <div className='step-3-section'>
        <div className="step-3-left-div">
          {/* Content for the left div */}
          <div className='stars'>
          <Image src="cc.svg" width={389} height={243}/>
          </div>
          <div className='layout'>
            <Image src="blacklayout.svg" width={72} height={46}/>
          <p className='step-2-p1'>Choose Your Rewards</p>
          <p className='step-2-p2'>Match your card to your lifestyle. We’ve got benefits from across brands & categories for you to choose from. Each benefit has an attached fee. Just add the ones you like to your card.</p>
          </div>
        </div>
        {/* COntent for right side */}
        <div className="step-2-right-div">
            <h2>Hello</h2>
            {/* <div className='image-my'>
            <Image src="my.svg" width={328} height={400}/>
            </div> */}
        </div>
        </div>
      </section>
  )
}

export default Step_3