import React, { useEffect, useState } from "react";
import "./Leaderboard.scss";
import profilepic from "../../../assets/profilepic.webp";
import profilepic1 from "../../../assets/femalepp.png";
import copy from "../../../assets/Copy.png";
import { connect } from "react-redux";
import axios from "axios";
import { getNumberWithOrdinal } from "./helper";
import Referralbox from "./Referralbox";
import { fetchReferrals } from "../../User/UserActions";
import { message } from "antd";

// const referral = [
//   {
//     points: 20,
//     name: "Mukul Dhiman joined ",
//   },
//   { points: 20, name: "Mukul Dhiman joined " },
// ];

function LeaderRightbar({ user, top, fetchReferral, referrals }) {
  const getCode = () => {
    navigator.clipboard.writeText(user?.thomso_id);
    message.success("Code copied to clipboard");
  };
  console.log("referrals", referrals);
  useEffect(() => {
    fetchReferral();
  }, []);
  // const [User, setUser] = useState({});
  // useEffect(() => {
  //   const profile = async () => {
  //     const response = await axios.put(
  //       `/apiV1/registerca/${localStorage.getItem("user_id")}`,
  //       User
  //     );
  //     const { data } = response;
  //     console.log(data);
  //     setUser(data);
  //   };
  //   profile()
  // }, []);

  return (
    <div className="LeaderRightbar" style={{ top: top }}>
      <div className="details">
        {(user?.gender=='male' || user?.gender=='Male') ? (
          <img src={profilepic} alt="" />
        ) : (
          <img src={profilepic1} alt="" />
        )}

        <div className="details1">
          <h2>{user.name}</h2>
          <h4>{user.college}</h4>
        </div>
      </div>
      <div className="details3">
        <div className="rank">
          {/* <h1>{getNumberWithOrdinal(user?.rank - 1)}</h1> */}
          <h1>{getNumberWithOrdinal((user?.rank-1))}</h1>
          <hr className="line5" />
          Ranking
        </div>
        <div className="score">
          <h1>{user?.total_score}</h1>
          <hr className="line5" />
          Score
        </div>
        <div className="ref">
          <h1>{user?.referral_score}</h1>
          <hr className="line5" />
          Referrals
        </div>
      </div>
      <div className="details4">
        <div className="code">
          <h2>Referral code</h2>
          <h4>{user?.thomso_id}</h4>
        </div>
        <div className="copy1">
          <img
            src={copy}
            alt=""
            onClick={() => {
              getCode();
            }}
          />
        </div>
      </div>
      <h3>Recent Milestones</h3>
      <Referralbox val={user?.thomso_id} />
    </div>
  );
}
const mapStateToProps = (state) => {
  let user = state.user.user;
  let referrals = state.user.referrals;

  return {
    user,
    referrals,
  };
};
// const mapStateToProps1 = (state) => {
//   let referrals = state.user.referrals;

//   return {
//     referrals,
//   };
// };

const mapDispatchToProps = (dispatch) => {
  return {
    fetchReferral: (params) => dispatch(fetchReferrals(params)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LeaderRightbar);
