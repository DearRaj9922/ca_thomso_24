import React from "react";
import "./Leaderboard.scss";
import contact1 from "../../../assets/contact.png"

function Participants1({srNo, name, ID, contact, feeStatus}) {
  return (
    <div>
      <div className="head4">
        <div className="head-child">{srNo}</div>
        <div className="head-child">{name}</div>
        <div className="head-child ID">{ID}</div>
        <div className="head-child contact">{contact}</div>
        <div className="head-child" style={feeStatus==="Paid"?{color:"#15BF11"}:{color:"#DF3F39"}}>{feeStatus}</div>
        <div className="head-child contact1"><img src={contact1} alt="" /></div>
      </div>
      <hr className="line2" />
    </div>
  );
}

export default Participants1;
