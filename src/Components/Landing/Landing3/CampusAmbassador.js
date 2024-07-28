import React from 'react';
import './CampusAmbassador.css';
import page_3_bg from '../../Assets/page_3_bg.webp';

const CampusAmbassador = ({ isActive }) => {
  return (
    <div className={`campus-ambassador-container ${isActive ? 'active' : ''}`}>
      <img src={page_3_bg} className="bg_img" alt="landing-bg" />
      <div className="text-frame">
        <div className="text-item">
          <h1 id='certificates'>CERTIFICATES</h1>
          <ul id='certificate-text'>
            <li>Certificate to add in your Resume. You can use this experience to build a portfolio.</li>
          </ul>
        </div>
        <div className="text-item">
          <h1 id='leadershipQualities'>LEADERSHIP QUALITIES</h1>
          <ul id='leadershipQualities-text'>
            <li>Campus Ambassador at our fest gets the chance to represent their college in our fest.</li>
          </ul>
        </div>
        <div className="text-item">
          <h1 id='freeEntry'>FREE ENTRY</h1>
          <ul id='freeEntry-text'>
            <li>Free entry for the Campus Ambassador on 30+ participation.</li>
          </ul>
        </div>
        <div className="text-item">
          <h1 id='internshipOpportunity'>INTERNSHIP OPPORTUNITY</h1>
          <ul id='internshipOpportunity-text'>
            <li>You can use this experience to grab internship opportunities from our sponsors.</li>
          </ul>
        </div>
        <div className="text-item">
          <h1 id='workshops'>WORKSHOPS</h1>
          <ul id='workshops-text'>
            <li>Free entry to the workshops conducted by our partners.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CampusAmbassador;
