import React, { useEffect, useState } from "react";
import "./Leaderboard.scss";
import LeftBar from "../../Profile/LeftBar";
import Nav from "../../web/NewNavbar/Nav";
import profileBack1 from "../../../assets/Leaderboard.webp";
import profileBack2 from "../../../assets/bg.webp";
import LeaderRightbar from "./LeaderRightbar";
import Participants1 from "./Participants1";
import down from "../../../assets/down.png"
import axios from "axios";
import { message } from "antd";
import { connect } from "react-redux";
import MobNav from "../../MobNavProfile/MobNavProfile";

function Leaderboard1({ user_id }) {

  const [users, setUser] = useState([]);
  useEffect(() => {
    loadUsers();
  }, []);
  var n=0;
  console.log(user_id)
  const loadUsers = async () => {
    const res = await axios.get(`/apiV1/get_all_referral?ca_id=${localStorage.getItem('id')}`);
    console.log(res.data);
    setUser(res.data);
  };
  console.log(users);
  return (
    <div className="leader">

      <Nav id="web-nav-ref"/>
      <MobNav id="mob-nav-ref"/>

      <img src={profileBack1} alt="profileBack" className="profileBack1" />
      <img src={profileBack2} alt="profileBack" className="profileBack3" />
      <div className="leader-left">
        <LeftBar />
      </div>
      <div className="leaderboard1">
        <div className="head1">
          <div className="head-child">Sr No.</div>
          <div className="head-child">Name</div>
          <div className="head-child ID">ID</div>
          <div className="head-child contact">Contact</div>
          <div className="head-child ">Fee Status</div>
          <div className="head-child contact1"><img src={down} alt="" /></div>
        </div>
        <hr className="line1" />
        {users.map((el) => {
          n++;
          return (
            <Participants1
              name={el.name}
              srNo={n}
              ID={el.id}
              contact={el.contact}
              feeStatus={el?.payment ? "Paid" : "Unpaid"}
            />
          );
        })}
      </div>
      <LeaderRightbar />
    </div>
  );
}
const mapStateToProps = (state) => {
  let user_id = state.user.user?.id;

  return {
    user_id,
  };
};
export default connect(mapStateToProps, null)(Leaderboard1);
