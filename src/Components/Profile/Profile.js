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
           <Navbar/>

            <div className="container">
                <div><ProfileCard/></div>
                <div className="banner"><div>Achievements</div><img src={banner}/></div>
                <div><ProfileMilestone/></div>
            </div>
            <Footer/>
        </div>
    );
}

export default Profile;