import React from 'react';
import './Landing1.css';
import Heading from './heading';
import Register from './register';
import Background from './background';
const Landing1 = () => {
  return (
    <div className="landing-container">
      <div className='animationtotop'>
        <Heading className="landing-heading" />
      </div>
        
        <div className="main_container">
          <Register className="landing-register" />
          <Background className="landing-background" />
        </div>
        
    </div>
  )
}

export default Landing1