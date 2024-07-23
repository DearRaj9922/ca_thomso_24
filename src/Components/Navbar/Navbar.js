import React from 'react'
import thomsologo from '../Assets/thomsologo.svg'
import './navbar.css'
import hamburger from '../Assets/menu.svg'

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
            <div className="hamburger"><img src={hamburger} alt="ham"/></div>
        </div>
    )
}
