import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './ParallaxWrapper.css';

const ParallaxWrapper = ({ children }) => {
  const location = useLocation();
  const routesWithParallax = ['/', '/landing2', '/landing3', '/landing4', '/landing5'];

  useEffect(() => {
    if (routesWithParallax.includes(location.pathname)) {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const elements = document.querySelectorAll('.parallax-element');
        elements.forEach(el => {
          const speed = el.getAttribute('data-speed');
          el.style.transform = `translateY(${scrollPosition * speed}px)`;
        });
      };
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [location.pathname]);

  return <div className="parallax-container">{children}</div>;
};

export default ParallaxWrapper;
