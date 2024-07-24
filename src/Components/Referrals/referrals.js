import React from 'react'
import "./referrals.css";
import profilebackground from "../Assets/profilebackimg.webp";
import Navbar from '../Navbar/Navbar';
import ReferralList from "../Profile/CaPaymentList.jsx";
import ProfileDetail from "../ProfileDetails/ProfileDetails.js";
import Footer from "../Footer/Footer.js";
import MobNavbar from "../Navbar/mobnavbar.js";

export default function referrals() {
  return (
    <>
    <div className='referrals-main-div'>
        <Navbar/>
        <div className="refer-wrap">
        <div className="referral-list">
            <ReferralList/>
        </div>
        <div className="profile-details">
            <ProfileDetail/>
        </div>
        </div>
        <div className="fooetr-div">
          <Footer/>
        </div>

        {/* <img src={profilebackground} className='referral-bg' alt='bg'/> */}
      
    </div>
    <div className="referral-mob-div">
      <MobNavbar/>
    </div>
    </>
  )
}
