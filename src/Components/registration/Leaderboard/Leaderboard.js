import React from "react";
import "./Leaderboard.scss";
import Participants from "./Participants";
import LeftBar from "../../Profile/LeftBar";
import Nav from "../../web/NewNavbar/Nav";
import MobNav from "../../MobNavProfile/MobNavProfile";
import profileBack1 from "../../../assets/Leaderboard.webp";
import profileBack2 from "../../../assets/bg.webp";
import first from "../../../assets/1.png";
import second from "../../../assets/2.png";
import third from "../../../assets/3.png";
import mobfirst from "../../../assets/mob-1st.png";
import mobsecond from "../../../assets/mob-2nd.png";
import mobthird from "../../../assets/mob-3rd.png";
import LeaderRightbar from "./LeaderRightbar";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { message } from "antd";
import axios from "axios";
import Winner from "./Winner";
function Leaderboard() {
  const [logoutModal, setLogoutModal] = useState(false);
  const [open, setOpen] = useState(false);
  const [openClg, setOpenClg] = useState(false);
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);
  const loadUsers = async () => {
    const res = await axios.get("/apiV1/ca_leaderboard");
    setUser(res.data);
  };

  var n = 0;
  return (
    <div className="leader">
      <div id="web-nav-leaderboard">
          <Nav/>
      </div>
      <div id="mob-nav-leaderboard">
      <MobNav id="mob-nav-leaderboard"/>
      </div>
      <img src={profileBack1} alt="profileBack" className="profileBack1" />
      <img src={profileBack2} alt="profileBack" className="profileBack3" />
      <div className="leader-left">
        <LeftBar />
      </div>
      <div>
        <Winner users={users} />
        <div className="leaderboard">
          <div className="head">
            <div className="head-child">Sr No.</div>
            <div className="head-child">Name</div>
            <div className="head-child child-college">College Name</div>
            <div className="head-child score1">Score</div>
          </div>
          <hr className="line1" />
          <div className="leaderboard10">
            {users.map((el) => {
              n++;
              return (
                <Participants
                  name={el.name.split(" ").splice(0, 2).join(" ")}
                  srNo={n}
                  college={el.college}
                  score={el.total_score}
                />
              );
            })}
          </div>
        </div>
        <LeaderRightbar />
      </div>
    </div>
  );
}

export default Leaderboard;
