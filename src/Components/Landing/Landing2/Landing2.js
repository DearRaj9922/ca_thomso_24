import React from 'react'
import "./Landing2.css";
import back2 from "../../Assets/land2.svg";
import back2mob from "../../Assets/land2-mobile.webp";
import land2text from "../../Assets/land2textmob.svg";
import scooter from "../../Assets/scooter.svg";

export default function Landing2() {
  return (
    <div className='relative Landing2wrapper'>
      <img src={back2} className=' bg_img_2' alt="bg-2-img" />
      <img src={back2mob} className=' bg_img_2_mob' alt="bg" />
      <div className="landing2">
        <div className="landing2-text-box">
        <div className="landing2-text sansita-bold-italic">
          <h1>
            What is Campus Ambassador Program?
          </h1>
        </div>
          <div className="landing2-details">
            <h1>
              As part of the student campus ambassador program, THOMSO offers students the chance to represent and promote the organization at their colleges and universities. Their responsibilities comprise developing our presence and promoting THOMSO events among students and educators by serving as a link between their colleges and us.
            </h1>
          </div>

        </div>
        <div className="scooter-div">
          <div className="scooter-img-div">
            <img src={scooter} className=' scooter-img' alt="scooter-img" />
          </div>
        </div>
      </div>
      <div className="landing2-mobile">
        <div className="landing2-text-box">
          <div className="landing2-text">
            <img src={land2text} className=' land2text-img' alt="land2-text" />
          </div>
        </div>
        <div className="scooter-div">
          <div className="scooter-img-div">
            <img src={scooter} className='scooter-img' alt="scooter-img" />
          </div>
        </div>
      </div>

    </div>
  )
}
