import React from 'react'
import './Navbar.css'


import { useNavigate,Link } from 'react-router-dom';

import logoblack from "../../Assets/logoblack.webp"

const Navbar = ({display, classs}) => {
  const navigate = useNavigate();

  // const handleLogout = () => {
  //   navigate("/");
  //   localStorage.removeItem("token");
  //   localStorage.removeItem("user_id");
  // };
  return (
    <div className={`Nav-Wrapper ${classs}`}>
        <div className="nav-logo-div">
            <img src={logoblack} alt="" />

        </div>

        <div className="login-nav">
        <div className="Mobnav-top">
          <button onClick={()=>navigate('/login')}className="login ">LOG IN</button>          
        </div>
      
            {/* <button className="nav-login">Log In</button> */}
        </div>
    </div>
  )
}

export default Navbar