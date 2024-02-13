import React from 'react'
import './Section.scss';
import Image from 'next/image';

function Section() {
    return (
      <section className="new-section">
        <div className="left-div">
          {/* Content for the left div */}
          <h1>The Freedom to Create
            The Credit Card You Want</h1>
        </div>
        <div className="right-div">
          {/* Content for the right div */}
          <p className='p1-text'>That's why it comes with benefits & rewards chosen by you. Available in multiple designs, your card comes in a style selected by you. You can come back each year, to edit your benefits or update your style.</p>
          <p className='p1-text p2-text'>Your OneSync Credit Card stays true to you, year after year. It’s the only card you’ll ever need.</p>
          <p className='section-footer'>
          <button className='button' type='button' href="#"> Get Started</button>
          <div className='angle'>
          <Image src="angle-right.svg" width={8} height={14} color='#FFFFFF'/>
          </div>
          </p>
        </div>
      </section>
    );
  }

  export default Section