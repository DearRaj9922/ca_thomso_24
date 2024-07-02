import React from "react";
import "./hero.css";
import clouds from "../../Assets/clouds-hero.svg";
import landing from "../../Assets/Landing page image.svg";

const HeroSection = () => {
  return (
    <div>
      <div className="hero_wrapper">
        <div className="hero_content">
          <p>CAMPUS AMBASSADOR</p>
          <p className="program-text">PROGRAM</p>
        </div>

        <div className="hero-reg-btn">
          <button className="hero-reg">Register Now</button>
        </div>

        <div className="hero_image">
          <img className="clouds-landing" src={clouds} alt="" />
          <img src={landing} alt="" className="landingImage" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
