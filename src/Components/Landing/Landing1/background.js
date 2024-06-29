import React from 'react';
import './background.css';
import Desktopbackground from './assets/Group 2.svg';
import Mobilebackground from './assets/Group 37330.svg';


const background = () => {
  return (
    <div className='image-container'>
        <img className='desktop-image BackgroundImage ' src={Desktopbackground} alt='indian-culture'/>
        <img className='mobile-image BackgroundImage' src={Mobilebackground} alt='indian-culture' />
    </div>
  );
}

export default background;