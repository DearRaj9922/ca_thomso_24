import React ,{useState} from 'react'
import hamburger from '../Assets/menu.svg';
import thomsologo from '../Assets/thomsologo.svg';
import cross from "../Assets/cross.svg";
import  "./mobnavbar.css";
import { useNavigate} from 'react-router-dom';

export default function Mobnavbar() {

const navigate=useNavigate();
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
            <li onClick={()=>navigate('/leaderboard')}>Leaderboard</li>
            <li onClick={()=>navigate('/feeds')}>Feeds</li>
            <li onClick={()=>navigate('/referrals')}>Referrals</li>
            <li onClick={()=>navigate('/profile')}>Profile</li>
            <li onClick={()=>navigate('/profile')}>CA Guide</li>
        </ul>
    </div>
    </>
  )
}
