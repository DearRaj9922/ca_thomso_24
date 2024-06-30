import React from "react";
import "./Landing4.css";
import landingbgdesk4 from "../../Assets/landing4desktopbg.svg";
import landingbgmon4 from "../../Assets/landing4mobilebg.svg";
import textimg from "../../Assets/WHAT ARE YOU WAITING FOR_.svg";
import cloud4 from "../../Assets/cloud4.svg";

function Landing4() {
  return (
    <>
    <div className="landing4">
      <img src={landingbgdesk4} className="bg_img_4" alt="land-bg-4"/>
      <div className="text-div">
      <img src={textimg} className="head-text" alt="text-i"/>
      </div>
      <div className="reg-button-div">
        <button className="reg-button">Register Now!</button>
      </div>
      <img src={cloud4} className="cloud4" alt="cloud-4"/>
      
    </div>
    <div className="landing4mobile">
      <img src={landingbgmon4} className="bg-mob-4" alt="land-bg-mob-4"/>
      <div className="text-div">
      <img src={textimg} className="head-text" alt="text-i"/>
      </div>
      
    </div>
    </>
  );
}

export default Landing4;
