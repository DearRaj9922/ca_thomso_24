import React from "react";
import "./hero.css";
import clouds from "../../Assets/clouds-hero.webp";
import landing from "../../Assets/Landing page image.webp";
import Footer from "../../Footer/Footer";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const HeroSection = () => {
  return (
    <div>
      {/* <Navbar/> */}
      <div className="hero_wrapper ">
        <div className="hero_content">
          <p>CAMPUS AMBASSADOR</p>
          <p className="program-text">PROGRAM</p>
        </div>

        <div className="hero-reg-btn">
          <Link
          to="/registration">
              <button className="hero-reg ml-[50px]">Register Now</button>
          </Link>

        </div>

        <div className="hero_image">
          <img className="clouds-landing" src={clouds} alt="" />
          <img src={landing} alt="" className="landingImage" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HeroSection;
