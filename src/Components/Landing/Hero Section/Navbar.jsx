import React from 'react'
import './Navbar.css'
import logo from "../../Assets/ThomsoLogoBlack.webp";
import { useNavigate,Link } from 'react-router-dom';

const Navbar = ({display}) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
    localStorage.removeItem("token");
    localStorage.removeItem("user_id");
  };
  return (
    <div className='Nav-Wrapper'>
        <div className="nav-logo-div">
            <img src={logo} alt="" />

        </div>

        <div className="login-nav">
        {localStorage.getItem("token") ? (
        <div className="Mobnav-top" onClick={handleLogout}>
          <a className="btn-top">
            LOG OUT
          </a>
        </div>
      ) : (
        <div className="Mobnav-top">
          {/* <Link
          to="/login"> */}
              <button onClick={()=>navigate('/login')}className="hero-reg ">LOG IN</button>
          {/* </Link> */}
          {/* <a href="/login"> LOG IN</a> */}

            
        
        </div>
      )}
            {/* <button className="nav-login">Log In</button> */}
        </div>
    </div>
  )
}

export default Navbar