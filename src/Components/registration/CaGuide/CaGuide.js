import React from "react";
import "./CaGuide.css";
import Vector from "../../images/Vector.webp";
import Nav from "../../web/NewNavbar/Nav";
import logbg1 from "../../../assets/WELCOME_BACK.webp";
import logbg2 from "../../../assets/Campus_Ambassador.webp";
import welcomebckbg from "../../../assets/welcomebckbg.webp";
import LeftBar from "../../Profile/LeftBar";
import profileBack from "../../../assets/Leaderboard.webp";
import profileBack2 from "../../../assets/bg.webp";
import MobNavbar from "../../mobile/Navbar/MobNavbar";
import LeaderRightbar from "../Leaderboard/LeaderRightbar";
import LeaderboardNav from "../../MobNavProfile/MobNavProfile";
import { useNavigate } from "react-router-dom";

function CaGuide(){
  const navigate = useNavigate();
  return (
    <>
      <div className="web-nav">
        <Nav id="nav1bar" display="none" />
        <div className="ca-mob-nav">
          <LeaderboardNav position="fixed" width="100%" />
        </div>
      </div>
      <div className="ca-leftbar">
        <LeftBar />
      </div>
      <div className="ca-rightbar">
        <LeaderRightbar />
      </div>
      <img
        src={profileBack}
        alt="profileBack"
        className="profileBack"
        style={{ position: "absolute", zIndex: -1, bottom: "6px" }}
      />{" "}
      <img
        src={profileBack2}
        alt="profileBack"
        className="profileBack3"
        style={{ position: "absolute", zIndex: -1 }}
      />
      <div
        id="bgguide"
        style={{ position: "relative", top: "15vh", left: "-2vw" }}
      >
        <div id="log_bg12">
          <div className="caguide">
            <div className="heading">
              <div className="head-ca uks1">CA Guide</div>

              <p className="heading-text uks1">
                •&nbsp;Your work responsibilities comprise connecting with the
                cultural team and major groups/ societies (with the cultural
                inclination to them) of your college, aiming for the maximum
                registration from your institution.
              </p>
              <p className="heading-text uks1">
                • &nbsp;You are required to circulate resources such as the
                Thomso brochure, posters, registration link, and the After-Movie
                in your college.
              </p>
              <p className="heading-text uks1">
                • &nbsp;To make the process more efficient, reach out to us, and
                we will try our best to help you achieve your objectives in a
                smooth way.
              </p>
            </div>
            <div className="res-con">
              <div className="res">
                Resources
                <div className="res1" style={{cursor:"pointer"}}>
                  {/* Thomso brochure */}
                  <a style={{textDecoration:"none",color:"black"}} href="https://drive.google.com/file/d/1kRK4oVRtI-_mGm-xEzOYwsDvYraVKaH_/view?usp=drive_link" target="blank">Thomso brochure</a>
                  <img
                    className="img-vec"
                    src={Vector}
                    alt=""
                    style={{ alignSelf: "flex-end" }}
                  />
                </div>
                <div className="res1" style={{cursor:"pointer"}} onClick={() => {
                    navigate("/feeds");
                  }}>
                  Posters
                  
                  <img
                    className="img-vec"
                    src={Vector}
                    alt=""
                    style={{ alignSelf: "flex-end" }}
                  />
                </div>
                <div
                  className="res1"
                  onClick={() => {
                    navigate("/registration");
                  }}
                  style={{cursor:"pointer"}}
                >
                  Registration link
                  <img
                    className="img-vec"
                    src={Vector}
                    alt=""
                    style={{ alignSelf: "flex-end" }}
                  />
                </div>
                
                  
                <div className="res1">
                  <a style={{textDecoration:"none",color:"black"}} href="https://www.youtube.com/watch?v=rm1bWDAHbSQ" target="blank">Thomso Aftermovie</a>
                  <img
                    className="img-vec"
                    src={Vector}
                    alt=""
                    style={{ alignSelf: "flex-end" }}
                  />
                </div>
              </div>
              <div className="res">
                Contact Us
                <p className="heading-text">
                  If you haven’t connected to our team yet, we encourage you to
                  reach us through the means of contacts provided below.
                </p>
                <div className="con2">Pramod - 9694627622</div>
                <div className="con2">Jolly - 7081537653</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}


export default CaGuide;
