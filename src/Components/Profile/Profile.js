import React from 'react';
import './Profile.css'
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import ProfileCard from "../ProfileCard/ProfileCard";
import banner from '../Assets/bannermain.svg'
import ProfileMilestone from "../ProfileMilestone/ProfileMilestone";

function Profile(props) {
    return (
        <div className="main-container">
            <Navbar />

            <div className="container">
                <div><ProfileCard /></div>
                <div className="banner">

                    <div className="banner-title">Achievements</div>
                    <div className="banner-data-container">
                        <img src={banner} alt="banner" />

                        <div className="banner-data">
                            <div className="banner-section">
                                <div>11th</div>
                                <div>
                                    <hr />
                                </div>
                                <div>Ranking</div>
                            </div>
                            <div className="banner-section">
                                <div>312</div>
                                <div>
                                    <hr />
                                </div>
                                <div>Score</div>
                            </div>
                            <div className="banner-section">
                                <div>15</div>
                                <div>
                                    <hr />
                                </div>
                                <div>Referrals</div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="milestone-container">
                    <div>Recent Milestones</div>
                    <ProfileMilestone />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Profile;