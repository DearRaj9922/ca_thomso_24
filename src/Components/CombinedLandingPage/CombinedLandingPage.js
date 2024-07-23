import React from 'react';
import HeroSection from '../Landing/Hero Section/HeroSection';
import Landing2 from '../Landing/Landing2/Landing2';
import CampusAmbassador from '../Landing/Landing3/CampusAmbassador';
import Landing4 from '../Landing/Landing4/Landing4';
import Landing5 from '../Landing/Landing5/Landing5';
import './CombinedLandingPage.css';

const CombinedLandingPage = () => {
  return (
    <div className="combined-landing-page">
      <section className="parallax-section" id="section1"><HeroSection /></section>
      <section className="parallax-section" id="section2"><Landing2 /></section>
      <section className="parallax-section" id="section5"><Landing5 /></section>
      <section className="parallax-section" id="section3"><CampusAmbassador /></section>
      <section className="parallax-section" id="section4"><Landing4 /></section>
    </div>
  );
};

export default CombinedLandingPage;
