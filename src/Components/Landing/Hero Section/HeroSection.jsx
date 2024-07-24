import React, { useEffect } from "react";
import "./hero.css";
import clouds from "../../Assets/clouds-hero.svg";
import landing from "../../Assets/Landing page image.svg";
import Footer from "../../Footer/Footer";
import { Link } from "react-router-dom";
import AOS from "aos";
import 'aos/dist/aos.css';

const HeroSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    AOS.refresh();
  }, []);

  return (
    <div>
      {/* <Navbar/> */}
      <div className="hero_wrapper" data-aos="fade-up">
        <div className="hero_content">
          <p>CAMPUS AMBASSADOR</p>
          <p className="program-text">PROGRAM</p>
        </div>

        <div className="hero-reg-btn">
          <Link to="/registration">
            <button className="hero-reg ml-[50px]">Register Now</button>
          </Link>

        </div>

        <div className="hero_image">
          <img className="clouds-landing" src={clouds} alt="Clouds" />
          <img src={landing} alt="Landing" className="landingImage" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HeroSection;
