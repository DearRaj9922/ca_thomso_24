import React from 'react'
import "./Landing5.css";
import land5bg from "../../Assets/land5.webp";
import land5bgmob from "../../Assets/land5-mobile.webp";
import Footer from "../../Footer/Footer";
import Navbar from '../Hero Section/Navbar';


export default function Landing5() {
  return (
    <div>
      <Navbar />
      <div className='landing-5-wrapper'>
      <img src={land5bg} className='land5-bg' alt='land5-bg-img' />
      <img src={land5bgmob} className='land5-bg-mob' alt='land5-bg-img-mob' />
      </div>

    </div>
  )
}
