import React from 'react';
import HeroSection from '../Landing/Hero Section/HeroSection';
import Landing2 from '../Landing/Landing2/Landing2';
import CampusAmbassador from '../Landing/Landing3/CampusAmbassador';
import Landing4 from '../Landing/Landing4/Landing4';
import Landing5 from '../Landing/Landing5/Landing5';
import Footer from '../Footer/Footer';
import './CombinedLandingPage.css';

const CombinedLandingPage = () => {
  return (
    <div className="combined-landing-page">
      <HeroSection />
      <Landing2 />
      <Landing5 />
      <CampusAmbassador />
      <Landing4 />
      <Footer />
    </div>
  );
};

export default CombinedLandingPage;
