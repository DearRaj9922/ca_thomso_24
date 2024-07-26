import React, { useEffect, useState } from 'react';
import HeroSection from '../Landing/Hero Section/HeroSection';
import Landing2 from '../Landing/Landing2/Landing2';
import CampusAmbassador from '../Landing/Landing3/CampusAmbassador';
import Landing4 from '../Landing/Landing4/Landing4';
import Landing5 from '../Landing/Landing5/Landing5';
import Footer from '../Footer/Footer';
import './CombinedLandingPage.css';

const CombinedLandingPage = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll('.landing-section');
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !transitioning) {
          const nextSectionIndex = parseInt(entry.target.dataset.index);
          if (nextSectionIndex !== currentSection) {
            setTransitioning(true);
            setTimeout(() => {
              setCurrentSection(nextSectionIndex);
              setTransitioning(false);
            }, 500); // Duration of the exit animation
          }
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, [currentSection, transitioning]);

  return (
    <div className="combined-landing-page">
      <div className='combined-pages'>
        <div className={`landing-section ${currentSection === 0 ? 'active' : ''}`} data-index="0">
          <HeroSection />
        </div>
        <div className={`landing-section ${currentSection === 1 ? 'active' : ''}`} data-index="1">
          <Landing2 />
        </div>
        <div className={`landing-section ${currentSection === 2 ? 'active' : ''}`} data-index="2">
          <Landing5 />
        </div>
        <div className={`landing-section ${currentSection === 3 ? 'active' : ''}`} data-index="3">
          <CampusAmbassador />
        </div>
        <div className={`landing-section ${currentSection === 4 ? 'active' : ''}`} data-index="4">
          <Landing4 />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CombinedLandingPage;
