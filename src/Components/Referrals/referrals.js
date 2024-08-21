import React, { useEffect, useState } from 'react'
import "./referrals.css";
import profilebackground from "../Assets/profilebackimg.webp";
import Navbar from '../Navbar/Navbar';
import ReferralList from "../Profile/CaPaymentList.jsx";
import ProfileDetail from "../ProfileDetails/ProfileDetails.js";
import Footer from "../Footer/Footer.js";
import MobNavbar from "../Navbar/mobnavbar.js";
import { fetchReferrals, fetchUser, logout } from "../User/UserActions";
import { connect } from "react-redux";

function Referrals(props) {
    useEffect(() => {
        console.log("reff", props)
    }, [])
    return (
        <>
            <div className='referrals-main-div'>
                <Navbar />
                <div className="refer-wrap">
                    <div className="referral-list">
                        <ReferralList />
                    </div>
                    <div className="profile-details">
                        <ProfileDetail />
                    </div>
                </div>
                <div className="fooetr-div">
                    <Footer />
                </div>

                {/* <img src={profilebackground} className='referral-bg' alt='bg'/> */}

            </div>
            <div className="referral-mob-div">
                <MobNavbar />
                <div className="referral-list">
                    <ReferralList />
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
        fetchReferral: (params) => dispatch(fetchReferrals(params))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Referrals);
