import React from 'react'
import "./leaderboard.css";
import profilebackground from "../Assets/profilebackimg.webp";
import Navbar from '../Navbar/Navbar.js';
// import ReferralList from "../Profile/CaPaymentList.jsx";
// import PositionCard from '../Profile/PositionCard.jsx';
import ProfileDetail from "../ProfileDetails/ProfileDetails.js";
import Footer from "../Footer/Footer.js";
import MobNavbar from "../Navbar/mobnavbar.js";

export default function leaderboard() {
  return (
    <>
    <div className='leaderboard-main-div'>
        <Navbar/>
        <div className="leaderboard-wrap">
        {/* <div className="position-card">
            <PositionCard/>
        </div> */}
        <div className="profile-details">
            <ProfileDetail/>
        </div>
        </div>
        <div className="fooetr-div">
          <Footer/>
        </div>

        {/* <img src={profilebackground} className='referral-bg' alt='bg'/> */}
      
    </div>
    <div className="leaderboard-mob-div">
      <MobNavbar/>
      {/* <div className="position-card">
            <PositionCard/>
        </div> */}
    </div>
    </>
  )
}
