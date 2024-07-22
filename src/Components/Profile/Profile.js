import React from 'react';
import './Profile.css'
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import ProfileCard from "../ProfileCard/ProfileCard";
function Profile(props) {
    return (
        <div className="main-container">
           <Navbar/>

            <div className="container">
                <div><ProfileCard/></div>
                <div></div>
                <div></div>
            </div>
            <Footer/>
        </div>
    );
}

export default Profile;