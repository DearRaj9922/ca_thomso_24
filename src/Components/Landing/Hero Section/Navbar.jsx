import React from 'react'
import './Navbar.css'
import logo from "../../Assets/ThomsoLogoBlack.svg"

const Navbar = () => {
  return (
    <div className='Nav-Wrapper'>
        <div className="nav-logo">
            <img src={logo} alt="" />

        </div>

        <div className="login-nav">
            {/* <button className="nav-login">Log In</button> */}
        </div>
    </div>
  )
}

export default Navbar