import React, {useState, useEffect} from "react";
import first from "../../Assets/first.webp";
import second from "../../Assets/second.webp";
import third from "../../Assets/third.webp";
import mobfirst from "../../Assets/firstmob.webp";
import mobsecond from "../../Assets/secondmob.webp";
import mobthird from "../../Assets/thirdmob.webp";
import "./Leaderboard.css";
import axios from "axios";
// import profileimg from "../../Assets/guyprofile.svg"

function Winner() {
    const [loader, setLoader] = useState(false)
    const [winners, setWinners] = useState([])

    useEffect(()=>{
        (async()=>{
            await axios.get('https://api2.thomso.in/apiV1/ca_leaderboard').then((res)=>{
                setWinners(res.data.slice(0,3))
                // console.log(res.data.slice(0,3))
            })
            setLoader(true)
        })()
    },[])
  const [isMobile, setIsMobile] = useState(window.matchMedia("(max-width: 768px)").matches);
  const users = [
    {
      name: "Rahul",
      college: "Indian  Institute of Technology Roorkee",
      total_score: 100,
      referral_score: 50,
    },
    {
      name: "Rahul",
      college: "Indian  Institute of Technology Roorkee",
      total_score: 90,
      referral_score: 50,
    },
    {
      name: "Rahul",
      college: "Indian  Institute of Technology Roorkee",
      total_score: 80,
      referral_score: 50,
    },
  ];

  // console.log(users);
  let top_3 = [];

  for (let i = 0; i < 3; i++) {
    if (users[i]) {
      top_3.push(users[i]);
    }
  }

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1024px)");
    const handleResize = () => setIsMobile(mediaQuery.matches);

    // Attach listener to update state on screen size change
    mediaQuery.addEventListener("change", handleResize);

    // Clean up listener on component unmount
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

if(!loader){
    return(<></>)
}
else{
    return (
    <div className="winners"
    style={{
      color: "#440035",
      height: isMobile ? "70vw" : "45vh",
      marginLeft: isMobile ? "0" : "-21vw",
      marginTop: isMobile ? "0vh" : "0",
    }}>
      {top_3.length !== 0 && (
        <>
          <div className="win-bg leader-2">
            <img src={second} alt="" />
            <div className="info">
              <h2>{winners[1].name}</h2>
              <h4>{winners[1].college.slice(0, 25)}... </h4>
            </div>
            <div className="details6">
              <div className="score">
                <h1 style={{ margin: 0 }}>{winners[1].total_score}</h1>
                <hr className="line6" />
                Score
              </div>
              <div className="ref">
                <h1 style={{ margin: 0 }}>{winners[1].referral_score}</h1>
                <hr className="line6" />
                Referrals
              </div>
            </div>
          </div>

          <div className="win-bg leader-1">
            <img src={first} alt="" />
            <div className="info">
              <h2>{winners[0].name}</h2>
              <h4>{winners[0].college.slice(0, 25)}...</h4>
            </div>
            <div className="details7">
              <div className="score">
                <h1 style={{ margin: 0 }}>{winners[0].total_score} </h1>
                <hr className="line6" />
                Score
              </div>
              <div className="ref">
                <h1 style={{ margin: 0 }}>{winners[0].referral_score}</h1>
                <hr className="line6" />
                Referrals
              </div>
            </div>
          </div>
          <div className="win-bg leader-3">
            <img src={third} alt="" />
            <div className="info">
              <h2>{winners[2].name}</h2>
              <h4>{winners[2].college.slice(0, 25)}...</h4>
            </div>
            <div className="details8">
              <div className="score">
                <h1 style={{ margin: 0 }}>{winners[2].total_score}</h1>
                <hr className="line6" />
                Score
              </div>
              <div className="ref">
                <h1 style={{ margin: 0 }}>{winners[2].referral_score}</h1>
                <hr className="line6" />
                Referrals
              </div>
            </div>
          </div>
          <div
            className="mob-sec-winner"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "3vw",
              marginTop: "0vh",
            }}
          >
            <div className="mob-win-bg mob-leader-1">
              <img src={mobfirst} alt="" />
              <div className="info">
                <h2>{winners[0].name}</h2>
                <h4 className="hideKro">{top_3[0].college}</h4>
              </div>
              <div className="points">
                <h5>{winners[0].total_score} pts</h5>
              </div>
            </div>
            <div className="mob-win-bg mob-leader-2">
              <img src={mobsecond} alt="" />
              <div className="info">
                <h2>{winners[1].name}</h2>
                <h4 className="hideKro">{top_3[1].college}</h4>
              </div>
              <div className="points">
                <h5>{winners[1].total_score} pts</h5>
              </div>
            </div>
            <div className="mob-win-bg mob-leader-3">
              <img src={mobthird} alt="" />
              <div className="info">
                <h2>{winners[2].name}</h2>
                <h4 className="hideKro">{top_3[2].college}</h4>
              </div>
              <div className="points">
                <h5>{winners[2].total_score} pts</h5>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

}

export default Winner;
