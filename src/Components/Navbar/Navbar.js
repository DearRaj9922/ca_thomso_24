import React from 'react'
import thomsologo from '../Assets/thomsologo.svg'
import './navbar.css';
import hamburger from '../Assets/menu.svg';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
    const navigate = useNavigate();
    return (
        <div className="navcontainer">
            <img src={thomsologo}/>
            <div className="rightcontainer">
                <div onClick={()=>navigate('/learderboard')}>Leaderboard</div>
                <div onClick={()=>navigate('/feeds')}>Feeds</div>
                <div onClick={()=>navigate('/referrals')}>Referrals</div>
                <div onClick={()=>navigate('/profile')}>Profile</div>
                <div onClick={()=>navigate('/profile')}>CA Guide</div>
                <div className="authbtn">Log Out</div>
            </div>
            <div className="hamburger"><img src={hamburger} alt="ham"/></div>
        </div>
    )
}
