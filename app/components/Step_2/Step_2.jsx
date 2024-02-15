import React from "react";
import "./Step_2.scss";
import Image from "next/image";

const Step_2 = () => {
  return (
    <section className="step-2-container">
      <div className="step-2-section">
        <div className="step-2-left-div">
          {/* Content for the left div */}
          <div className="stars">
            <Image src="stars.svg" width={24} height={24} />
          </div>
          <p className="step-2-p1">Choose Your Rewards</p>
          <p className="step-2-p2">
            Match your card to your lifestyle. We’ve got benefits from across
            brands & categories for you to choose from. Each benefit has an
            attached fee. Just add the ones you like to your card.
          </p>
          <p className="step-2-p2-res">Choose rewards from brands and categories that fit in with your personality. Your card’s annual fee will based on the rewards you select. </p>
          <p className='step_2-footer'>
          <button className='step_2-button' type='button' href="#"> Get Started</button>
          <div className='step_2-angle'>
            <Image src="angle-right-black.svg" width={8} height={14}/>
          </div>
          </p>
        </div>
        <div className="step-2-right-div">
          <div className="image-my">
            <Image src="my.svg" width={328} height={400} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Step_2;
