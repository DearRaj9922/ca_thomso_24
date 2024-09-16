import React from "react";
import "./Card.css";
import { message } from "antd";
import copy from "../Assets/copy.png";
import {Link} from "react-router-dom";
export const Card = ({Perma, Img, AltImg, Heading, Content, Points, ShareCount , Pointstotal, Copylink}) => {

  const copyItem = (link) => {
    navigator.clipboard.writeText(link);
    message.success("Link copied to clipboard");
  };
  return (
    <div className="card feedcard">
      <div className="card-image">
      <Link to={Perma} target="_blank" rel="noopener noreferrer">
        <img src={Img} alt={AltImg} />
      </Link>
      </div>
      <div className="card-content">
        <h2 className="heading">{Heading}</h2>
        <p className="content">{Content}</p>
        <p className="note">Note: {Points} points per share</p>
        <div className="bottom">
          <div className="copybtn">
            <div className="copybutton" onClick={()=>copyItem(Copylink)}>
              <img src={copy} alt="" />{" "}
              <div className="copyfont">Copy link</div>
            </div>
            <p className="sharecount">{ShareCount} times shared</p>
          </div>

          <div className="points-earned">
            <span className="points-number">{Pointstotal}</span>
            <span className="points-text">Total Points<br/>Earned</span>
          </div>
        </div>
      </div>
    </div>
  );
};
