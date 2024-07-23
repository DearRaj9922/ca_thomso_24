import React from 'react'
import './Navbar.css'
import NavLogo from '../../../Components/Assets/navbarLeft.svg'
const Navbar = () => {
  return (
    <div className='navMain' style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginRight: "40px" }}>
      <div>
        <img className='logo' src={NavLogo} alt="navbarLogo" />
      </div>
      <div >
        <button className="registerNow">LOG IN</button>
      </div>
    </div>
  )
}

export default Navbar