import React from 'react'
import thomsologo from '../Assets/thomsologo.svg'
import './navbar.css'

export default function Navbar() {
    return (
        <div className="navcontainer">
            <img src={thomsologo}/>
            <div className="rightcontainer">
                <div>Leaderboard</div>
                <div>Feeds</div>
                <div>Referrals</div>
                <div>Profile</div>
                <div>CA Guide</div>
                <div className="authbtn">Log Out</div>
            </div>
        </div>
    )
}
