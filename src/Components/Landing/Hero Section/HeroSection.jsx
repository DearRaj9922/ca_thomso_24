import React from "react";
import "./hero.css";
// import clouds from "../../Assets/clouds-hero.webp";
import landing from "../../Assets/landing1.webp";
import Footer from "../../Footer/Footer";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import landingmob from "../../Assets/landing1mob.webp";
const HeroSection = () => {
  return (
    <>
    <div className="lan-one">
      <img src={landing} alt="" className="landingImage" />
      <Navbar/>
      <div className="hero_wrapper ">
        <div className="hero_content">
          <p>CAMPUS AMBASSADOR </p>
          <p className="program-text">PROGRAM</p>
        </div>

        <div className="hero-reg-btn">
          <Link
          to="/registration">
              <button className="hero-reg ">Register Now</button>
          </Link>

        </div>

        <div className="hero_image">
          {/* <img className="clouds-landing" src={clouds} alt="" /> */}
          
        </div>
      </div>
      <Footer />
    </div>
    <div className="lan-one-mob">
      <img src={landingmob} className="lan-mob-bg" alt= "bg-mob"/>
      <Navbar/>
      <div className="hero_wrapper ">
        <div className="hero_content">
          <p>CAMPUS</p>
          <p>AMBASSADOR</p>
          <p className="program-text" style={{marginTop:"5vh"}}>PROGRAM</p>
        </div>

        <div className="hero-reg-btn">
          <Link
          to="/registration">
              <button className="hero-reg ">Register Now</button>
          </Link>

        </div>

        <div className="hero_image">
          {/* <img className="clouds-landing" src={clouds} alt="" /> */}
          
        </div>
      </div>

    </div>
    </>
  );
};

export default HeroSection;
