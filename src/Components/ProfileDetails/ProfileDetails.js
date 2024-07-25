import React from 'react'
import "./ProfileDetails.css";
import detailsbg from "../Assets/profiledetailbg.webp";
import profileimg from "../Assets/guyprofile.webp";
import achbanner from "../Assets/bannermain.webp";
import Copy from '../Assets/copy.webp';
import Milestone from "../ProfileMilestone/ProfileMilestone.js"

export default function ProfileDetails() {
  return (
    <div className='profile-detail-div'>
      <img src={detailsbg} className='profile-detail-bg' alt='profilebg'/>
      <div className="detail-uppersec">
        <div className="user-details">
            <div className="user-name-section">
                <div className="user-img">
                    <img src={profileimg} className='user-pic' alt='user-pic'/>
                </div>
                <div className="user-name">
                    <h3>Dhruv Bhatia</h3>
                    <h4>India Institute of Technology Roorkee</h4>
                </div>
            </div>
            <div className="referal-code-sec">
            <p className="profilecard-referral-text">Referral Code</p>
                <div className="profilecard-referral-code">
                    <p>165GZXV4</p>
                    <img src={Copy} style={{width:"2vw"}} alt="copy" />
                </div>
            </div>
            <div className="more-info-secc">
                <button className='more-info'>more info!</button>
            </div>
        </div>
        <div className="user-score">
            <img src={achbanner} className='ach-banner' alt="scores"/>
            <div className='ranking'>
                <h3>11th</h3>
                <p>Ranking</p>
            </div>
            <div className='scores'>
                <h3>312</h3>
                <p>Score</p>
            </div>
            <div className='referrals'>
                <h3>15</h3>
                <p>Referrals</p>
            </div>
        </div>
      </div>
      <div className="milstones">
        <Milestone style={{height:"10vh"}}/>
      </div>
    </div>
  )
}
