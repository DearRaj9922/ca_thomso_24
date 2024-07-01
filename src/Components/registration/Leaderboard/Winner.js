import React from "react";
import first from "../../../assets/1st.png";
import second from "../../../assets/2nd.png";
import third from "../../../assets/3rd.png";
import mobfirst from "../../../assets/mob-1st.png";
import mobsecond from "../../../assets/mob-2nd.png";
import mobthird from "../../../assets/mob-3rd.png";
import "./Leaderboard.scss";

function Winner({ users }) {
  let top_3 = [];

  for (let i = 0; i < 3; i++) {
    if (users[i]) {
      top_3.push(users[i]);
    }
  }
  return (
    <div className="winners">
      {top_3.length !== 0 && (
        <>
          <div className="win-bg leader-2">
            <img src={second} alt="" />
            <div className="info">
              <h2>{top_3[1].name}</h2>
              <h4>{top_3[1].college.slice(0,25)}... </h4>
            </div>
            <div className="details6">
              <div className="score">
                <h1>{top_3[1].total_score}</h1>
                <hr className="line6" />
                Score
              </div>
              <div className="ref">
                <h1>{top_3[1].referral_score}</h1>
                <hr className="line6" />
                Referrals
              </div>
            </div>
          </div>

          <div className="win-bg leader-1">
            <img src={first} alt="" />
            <div className="info">
              <h2>{top_3[0].name}</h2>
              <h4>{top_3[0].college.slice(0,25)}...</h4>
            </div>
            <div className="details7">
              <div className="score">
                <h1>{top_3[0].total_score} </h1>
                <hr className="line6" />
                Score
              </div>
              <div className="ref">
                <h1>{top_3[0].referral_score}</h1>
                <hr className="line6" />
                Referrals
              </div>
            </div>
          </div>
          <div className="win-bg leader-3">
            <img src={third} alt="" />
            <div className="info">
              <h2>{top_3[2].name}</h2>
              <h4>{top_3[2].college.slice(0,25)}...</h4>
            </div>
            <div className="details8">
              <div className="score">
                <h1>{top_3[2].total_score}</h1>
                <hr className="line6" />
                Score
              </div>
              <div className="ref">
                <h1>{top_3[2].referral_score}</h1>
                <hr className="line6" />
                Referrals
              </div>
            </div>
          </div>
          <div className="mob-win-bg mob-leader-2">
            <img src={mobsecond} alt="" />
            <div className="info">
              <h2>{top_3[1].name}</h2>
              <h4 className="hideKro">{top_3[1].college}</h4>
            </div>
            <div className="points">
              <h5>{top_3[1].total_score} pts</h5>
            </div>
          </div>
          <div className="mob-win-bg mob-leader-1">
            <img src={mobfirst} alt="" />
            <div className="info">
              <h2>{top_3[0].name}</h2>
              <h4 className="hideKro">{top_3[0].college}</h4>
            </div>
            <div className="points">
              <h5>{top_3[0].total_score} pts</h5>
            </div>
          </div>
          <div className="mob-win-bg mob-leader-3">
            <img src={mobthird} alt="" />
            <div className="info">
              <h2>{top_3[2].name}</h2>
              <h4 className="hideKro">{top_3[2].college}</h4>
            </div>
            <div className="points">
              <h5>{top_3[2].total_score} pts</h5>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Winner;
