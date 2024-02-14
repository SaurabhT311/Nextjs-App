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
          <p className="step-2-p2-res">Whether you like a minimal look or something that catches everyone’s eyes. We have a Card design for you</p>
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
