import React ,{useState} from 'react'
import hamburger from '../Assets/menu.svg';
import thomsologo from '../Assets/thomsologo.svg';
import cross from "../Assets/cross.svg";
import  "./mobnavbar.css";
import {useLocation, useNavigate} from 'react-router-dom';

export default function Mobnavbar() {

const navigate=useNavigate();
const location = useLocation();
const [isOpen, setIsOpen] = useState(false);
const toggleNav = () => {
      setIsOpen(!isOpen);
  }; 
  return (
    <>
    <div className='mobnavcontain'>
      <div className="navlogo">
        <img src={thomsologo} onClick={()=>navigate('/')}  className='nav-logo' alt='logo'/>
      </div>
      <div className="menu">
        <img src={hamburger} className='ham-burger'onClick={toggleNav}  style={{display:isOpen?"none":"block"}} alt= "ham"/>
        <img src={cross} className='cross-logo' onClick={toggleNav}  style={{display:isOpen?"block":"none"}} alt="cross"/>
      </div>
      
    </div>
    <div id="sideNav" className={isOpen ? 'visible' : 'hidden'}>
        <ul className='page-opt'>
            <li className={location.pathname === '/leaderboard' ? 'active' : ''} onClick={()=>navigate('/leaderboard')}>Leaderboard</li>
            <li className={location.pathname === '/feeds' ? 'active' : ''} onClick={()=>navigate('/feeds')}>Feeds</li>
            <li className={location.pathname === '/referrals' ? 'active' : ''} onClick={()=>navigate('/referrals')}>Referrals</li>
            <li className={location.pathname === '/profile' ? 'active' : ''} onClick={()=>navigate('/profile')}>Profile</li>
            <li className={location.pathname === '/profile' ? 'active' : ''} onClick={()=>navigate('/profile')}>CA Guide</li>
            <li className='logout' onClick={()=>navigate('/logout')}>Logout</li>
        </ul>
    </div>
    </>
  )
}
