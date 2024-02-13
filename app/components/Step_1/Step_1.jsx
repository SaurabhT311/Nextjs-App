import React from 'react'
import './Step_1.scss';
import Image from 'next/image';

const Step_1 = () => {
  return (
    <section className='step_1-container'>
      <div className="step-1-section-container ">
        <div className='form-layout'>
          <input className='input block rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
' type='text' placeholder='Place your phone number'/>
          <input className='input input2 block rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
' type='text' placeholder='Enter your PAN number'/>
          <input className='input input3 block  rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
' type='text' placeholder='Enter Your Address'/>
        </div>
      </div>
      <div className='step-1-right-div'>
        <div className='step-1-text-div'>
          <div className='image-div'>
        <Image src="insurance.svg" width={22} height={28}/>
        <Image className='svg' src="insurance-2.svg" width={16} height={19}/>
        </div>
        <p className='step-1-p1'>Fill Eligibility Form</p>
        <p className='step-1-p2'>Tell us about yourself, to find out if you’re eligible to apply.</p>
        </div>
      </div>
      </section>

  )
}

export default Step_1;