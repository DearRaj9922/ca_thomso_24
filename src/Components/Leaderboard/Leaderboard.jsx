import React, {useEffect, useState} from 'react'
import "./Leaderboard.css";
import profilebackground from "../Assets/profilebackimg.webp";
import Navbar from '../Navbar/Navbar';
import LeaderList from "../Profile/Leaderboardlist.jsx";
import ProfileDetail from "../ProfileDetails/ProfileDetails.js";
import Footer from "../Footer/Footer.js";
import MobNavbar from "../Navbar/mobnavbar.js";
import {fetchReferrals, fetchUser, logout} from "../User/UserActions";
import {connect} from "react-redux";
import Winner from '../registration/Leaderboard/Winner.js';
import axios from "axios";

 function Leaderboard(props) {
    const [users, setUser] = useState([]);

  return (
    <>
    <div className='referrals-main-div'>
        <Navbar/>
        <div className="refer-wrap">
        <div className="referral-list leaderboard-list">
            <div className='leaderboard-left-wrapper'>
                <Winner users={users} />
                <LeaderList/>
            </div> 
        </div>
        <div>
        <div className="profile-details">
            <ProfileDetail/>
        </div>
        </div>
        
        </div>
        <div className="fooetr-div">
          <Footer/>
        </div>

        {/* <img src={profilebackground} className='referral-bg' alt='bg'/> */}
      
    </div>
    <div className="referral-mob-div">
      <MobNavbar/>
      <div className="referral-list">
        <Winner users={users} />
            <LeaderList/>
        </div>
    </div>
    </>
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

export default connect(mapStateToProps, mapDispatchToProps)(Leaderboard);
