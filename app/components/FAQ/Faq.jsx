import Image from 'next/image';
import './Faq.scss';

import React from 'react'

const Faq = () => {
  return (
    <section className='faq-container'>
        <div className='faq-heading'>  
            <h1 className='heading'>FAQs</h1>
        </div>
        <div className='faq-section'>
            <div className='faq-question'>
            <p className='question'>Who's eligible for the Card?
            <div className='angle-up'>
            <Image src="angle-up.svg" width={20} height={20} />
            </div>
            </p>
            <p className='answer'>If you’re between 23-60 years of age, have a monthly income of ₹25,000 or more, and have never defaulted on a credit card or loan payment, we’d encourage you to apply. However, your application will be declined if your location isn’t serviceable or if your credit score is low.</p>
            <hr className='line-break'/>
            </div>
        </div>
        <div className='faq-section1'>
            <div className='faq-question'>
            <p className='question'>Is my location serviceable?
            <div className='angle-up'>
            <Image src="vector-lower.svg" width={20} height={20} />
            </div>
            </p>
            <hr className='line-break'/>
            </div>
        </div>
        <div className='faq-section1'>
            <div className='faq-question'>
            <p className='question'>What if I don't want to pay at all?
            <div className='angle-up'>
            <Image src="vector-lower.svg" width={20} height={20} />
            </div>
            </p>
            <hr className='line-break'/>
            </div>
        </div>
    </section>
  )
}

export default Faq
