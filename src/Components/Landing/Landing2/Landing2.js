import React from 'react'
import "./Landing2.css";
import back2 from "../../Assets/background.svg";
import monument2 from "../../Assets/page2bg.svg";
import scooter from "../../Assets/scooter.svg";

export default function Landing2() {
  return (
    <div>
      <div className="landing2">
        <img src={back2} className='bg_img_2' alt="bg-2-img"/>
        <div className="bgpart-2">
        <img src={monument2} className='bg_img_monumnet' alt="bg-monumnet"/>
        </div>
        <div className="landing2-text-box">
        <div className="landing2-text">
          <h1>
            What is Campus Ambassdor Program?
          </h1>
        </div>
        </div>
        <div className="scooter-div">
          <div className="scooter-img-div">
            <img src={scooter} className='scooter-img' alt="scooter-img"/>
          </div>
        </div>
      </div>
      
    </div>
  )
}
