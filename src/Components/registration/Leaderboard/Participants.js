import React, { useState } from "react";
import "./Leaderboard.scss";

function Participants({ srNo, name, college, score }) {
  const [openClg, setOpenClg] = useState(false);

 
  return (
    <>
      <div className="head2">
        <div className="head-child">{srNo}</div>
        <div className="head-child">{name}</div>
        <div className="head-child child-college" onClick={()=>{openClg===false?setOpenClg(true):setOpenClg(false)}}>{!openClg?(college).split(" ").splice(0,4).join(" "):college}</div>
        <div className="head-child score1">{score}</div>
      </div>
      <hr className="line2" />
    </>
  );
}

export default Participants;
