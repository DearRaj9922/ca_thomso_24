import React, { useEffect } from 'react';
import './CampusAmbassador.css';
import cloud2 from './cloud2.svg';

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
          <h2 id='certificates'>CERTIFICATES</h2>
          <p id='certificate-text'>
            <ul>
              <li>Certificate to add in your Resume. You can use this experience to build a portfolio.</li>
            </ul>
          </p>
        </div>
        <div className="text-item">
          <h2 id='leadershipQualities'>LEADERSHIP QUALITIES</h2>
          <p id='leadershipQualities-text'>
            <ul>
              <li>Campus Ambassador at our fest gets the chance to represent their college in our fest.</li>
            </ul>
          </p>
        </div>
        <div className="text-item">
          <h2 id='freeEntry'>FREE ENTRY</h2>
          <p id='freeEntry-text'>
            <ul>
              <li>Free entry for the Campus Ambassador on 30+ participation.</li>
            </ul>
          </p>
        </div>
        <div className="text-item">
          <h2 id='internshipOpportunity'>INTERNSHIP OPPORTUNITY</h2>
          <p id='internshipOpportunity-text'>
            <ul>
              <li>You can use this experience to grab internship opportunities from our sponsors.</li>
            </ul>
          </p>
        </div>
        <div className="text-item">
          <h2 id='workshops'>WORKSHOPS</h2>
          <p id='workshops-text'>
            <ul>
              <li>Free entry to the workshops conducted by our partners.</li>
            </ul>
          </p>
        </div>
      </div>
      <img src={cloud2} alt="cloud2" id='cloud2'/>
    </div>
  )
}

export default CampusAmbassador;
