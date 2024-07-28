import React from 'react'
import "./ProfileDetails.css";
import detailsbg from "../Assets/profiledetailbg.webp";
import profileimg from "../Assets/guyprofile.webp";
import achbanner from "../Assets/bannermain.webp";
import Copy from '../Assets/copy.webp';
import Milestone from "../ProfileMilestone/ProfileMilestone.js"
import {fetchReferrals, fetchUser, logout} from "../User/UserActions";
import {connect} from "react-redux";
import {getNumberWithOrdinal} from "../Profile/helper";
import { message } from "antd";

function ProfileDetails(props) {
 const getCode = () => {
    navigator.clipboard.writeText(props.userDetails?.thomso_id);
    message.success("Code copied to clipboard");
  };
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
                    <h3>{props.userDetails? props.userDetails.name: "-"}</h3>
                    <h4>{props.userDetails? props.userDetails.college: "-"}</h4>
                </div>
            </div>
            <div className="referal-code-sec">
            <p className="profilecard-referral-text">Referral Code</p>
                <div className="profilecard-referral-code">
                    <p>{props.userDetails? props.userDetails.thomso_id: "-"}</p>
                    <div onClick={()=>getCode()}><img src={Copy} style={{width:"2vw"}} alt="copy" /></div>
                </div>
            </div>
            <div className="more-info-secc">
                <button className='more-info'>more info!</button>
            </div>
        </div>
        <div className="user-score">
            <img src={achbanner} className='ach-banner' alt="scores"/>
            <div className='ranking'>
                <h3>{props.userDetails? getNumberWithOrdinal(props.userDetails.rank): '-'}</h3>
                <p>Ranking</p>
            </div>
            <div className='scores'>
                <h3>{props.userDetails? props.userDetails.total_score: "-"}</h3>
                <p>Score</p>
            </div>
            <div className='referrals'>
                <h3>{props.userDetails? props.userDetails.referral_score: "-"}</h3>
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
const mapStateToProps = (state) => {
    let userDetails = state.user.user;
    let loading = state.user.loading;
    let referrals = state.user.referrals;

    return {
        userDetails,
        loading,
        referrals
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsers: (params) => dispatch(fetchUser(params)),
        logouts: (params) => dispatch(logout(params)),
        fetchReferral: (params)=>dispatch(fetchReferrals(params))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileDetails);
