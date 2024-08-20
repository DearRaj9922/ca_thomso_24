import React from 'react'
import thomsologo from '../Assets/logoblack.webp'
import './navbar.css';
import hamburger from '../Assets/menu.webp';
import {useLocation, useNavigate,Link} from 'react-router-dom';
import Mobnavbar from './mobnavbar.js';

export default function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();
    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user_id");
        localStorage.removeItem("state");
        localStorage.removeItem("id");
        navigate("/");
    };
    return (
        <>
            <div className="navcontainer">
                <img className='thomso-logo' src={thomsologo}/>
                <div className="rightcontainer">
                    <div className={location.pathname === '/leaderboard' ? 'active' : ''}
                         onClick={() => navigate('/leaderboard')}>Leaderboard
                    </div>
                    <div className={location.pathname === '/feeds' ? 'active' : ''}
                         onClick={() => navigate('/feeds')}>Feeds
                    </div>
                    <div className={location.pathname === '/referrals' ? 'active' : ''}
                         onClick={() => navigate('/referrals')}>Referrals
                    </div>
                    <div className={location.pathname === '/profile' ? 'active' : ''}
                         onClick={() => navigate('/profile')}>Profile
                    </div>
                    {/* <Link to="/login"> */}
                    <div>
                    <p onClick={()=>window.open('https://drive.google.com/file/d/1-x6Ki3dwDX9EtAK-ePOTZDwlMMgWw1BP/view?usp=sharing','_blank')}>CA Guide</p>
                        
                    </div>
                    
                    <div onClick={handleLogout} className="authbtn">Log Out</div>
                </div>
                {/* // <div className="hamburger"><img src={hamburger} alt="ham"/></div> */}
            </div>
            <div className="mobview">
                <Mobnavbar/>
            </div>
        </>
    )
}
