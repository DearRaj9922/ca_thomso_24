import React from "react";
import "./Card.css";

import copy from "../Assets/copy.png";

export const Card = ({ Img, AltImg, Heading, Content, Points, ShareCount }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={Img} alt={AltImg} />
      </div>
      <div className="card-content">
        <h2 className="heading">{Heading}</h2>
        <p className="content">{Content}</p>
        <p className="note">Note: {Points} points per share</p>
        <div className="bottom">
          <div className="copybtn">
            <div className="copybutton">
              <img src={copy} alt="" />{" "}
              <div className="copyfont">Copy link</div>
            </div>
            <p className="sharecount">{ShareCount} times shared</p>
          </div>

          <div className="points-earned">
            <span className="points-number">260</span>
            <span className="points-text">Total Points<br/>Earned</span>
          </div>
        </div>
      </div>
    </div>
  );
};
