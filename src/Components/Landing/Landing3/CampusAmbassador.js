import React from 'react';
import './CampusAmbassador.css';

// import landingdesktop from '../../Assets/page3desktop.svg'
// import page_3_bg from '../../Assets/page_3_bg.webp';
import group from '../../Assets/page_3_bg.webp';
import page_3_bg from '../../Assets/Group.webp';



function CampusAmbassador() {

  return (
    <div className='campus-ambassador-container'>



      <div className="text-frame">
        <h1 className="text-title">WHAT DO WE OFFER?</h1>
        <div className="text-item">

          <p id='certificate-text'>
            Certificate to add in your Resume. You can use this experience to build a portfolio.
          </p>
        </div>
        <div className="text-item">
          <img src={page_3_bg} className="bg_img" alt="landing-bg" />


          <p id='leadershipQualities-text'>
            Campus Ambassador at our fest gets the chance to represent their college in our fest.
          </p>
        </div>
        <div className="text-item">

          <p id='freeEntry-text'>
            Free entry for the Campus Ambassador on 30+ participation.
          </p>
        </div>
        <div className="text-item">

          <p id='internshipOpportunity-text'>
            You can use this experience to grab internship opportunities from our sponsors.
          </p>
        </div>
        <div className="text-item">

          <p id='workshops-text'>
            Free entry to the workshops conducted by our partners.
          </p>
        </div>
      </div>
      {/* <img src={cloud1} alt="cloud1" id='cloud1'/> */}
      {/* <img src={cloud2} alt="cloud2" id='cloud2'/> */}
    </div>
  );
}

export default CampusAmbassador
