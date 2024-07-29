import React from 'react';
import './CampusAmbassador.css';

import group from '../../Assets/page_3_bg.webp';
import page_3_bg from '../../Assets/Group.webp';
import object from '../../Assets/Object.webp';
import free from '../../Assets/free.webp';
import certificate from '../../Assets/certificate.svg';
import vacancy from '../../Assets/vacancy.svg';
import presentation from '../../Assets/presentation.svg';
import background from '../../Assets/Page 19.webp';
import backgroundmob from '../../Assets/land3mobbg.webp';
import whatdoweoffer from '../../Assets/WHAT DO WE OFFER_.svg';
import Navbar from '../Hero Section/Navbar';

function CampusAmbassador() {
  return (
    <div className='campus-ambassador-container'>
      <Navbar />
      <img src={background} alt="bg" className='background-web' />
      <img src={backgroundmob} alt="bg" className='background-mob' />
      <div className="text-frame">
        {/* <h1 className="text-title">WHAT DO WE OFFER?</h1> */}
        <img src={whatdoweoffer} alt="WHAT DO WE OFFER?" className='whatdoweoffer' />
        <div className="text-items">
          <div className="text-item">
            <img src={certificate} className="point_img" alt="landing-bg" />
            <p id='certificate-text'>
              Certificate to add in your Resume. You can use this experience to build a portfolio.
            </p>
          </div>
          <div className="text-item">
            <img src={object} className="point_img" alt="landing-bg" />
            <p id='leadershipQualities-text'>
              Campus Ambassador at our fest gets the chance to represent their college in our fest.
            </p>
          </div>
          <div className="text-item">
            <img src={free} className="point_img" alt="landing-bg" />
            <p id='freeEntry-text'>
              Free entry for the Campus Ambassador on 30+ participation.
            </p>
          </div>
          <div className="text-item">
            <img src={vacancy} className="point_img" alt="landing-bg" />
            <p id='internshipOpportunity-text'>
              You can use this experience to grab internship opportunities from our sponsors.
            </p>
          </div>
          <div className="text-item">
            <img src={presentation} className="point_img" alt="landing-bg" />
            <p id='workshops-text'>
              Free entry to the workshops conducted by our partners.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CampusAmbassador;
