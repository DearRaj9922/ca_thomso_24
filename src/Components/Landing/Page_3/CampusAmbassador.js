import React, { useEffect } from 'react';
import './CampusAmbassador.css';
import cloud1 from './assets/cloud2.svg';
import cloud2 from './assets/cloud2.svg';

function CampusAmbassador() {
  useEffect(() => {
    const textItems = document.querySelectorAll('.text-item');
    textItems.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add('animate');
      }, index * 500); //delay (500ms for each item)
    });
  }, []);

  return (
    <div className='campus-ambassador-container'>
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
      <img src={cloud2} alt="cloud1" id='cloud1'/>
      <img src={cloud2} alt="cloud2" id='cloud2'/>
    </div>
  );
}

export default CampusAmbassador;
