import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchReferrals } from "../../User/UserActions";
import axios from "axios";
import "./Leaderboard.css";

function Referralbox({ fetchReferral, referrals,val }) {
  const [user, setUser] = useState({});
  useEffect(() => {
    fetchReferral();
      }, []);

  // console.log(referrals)

  useEffect(() => {
    getData();
      },[]);

  console.log(localStorage.getItem('id'), "id")
  const getData =()=>{
    axios.get(`apiV1/ca_activity?ca_id=${localStorage.getItem('id')}`)
    .then((response)=>{
        setUser(response.data);
        console.log(response.data, "data1")
      // console.log("datanew",response.data);
    })
  }
  console.log(user);
  
  return (
    <div className="details5">
        {referrals &&
        referrals.map((user) => {
          return (
            <>
              <div className="ref1">
                <h1>+{user.points}</h1>
                <div className="ref2">
                  <h2>{user.category} Accepted </h2>
                  <h4>{user.description}</h4>
                </div>
              </div>
              <hr className="line3" />
            </>
          );
        })}
      </div>
  )
}
const mapStateToProps = (state) => {
    let referrals = state.user.referrals;
  
    return {
      referrals,
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      fetchReferral: (params) => dispatch(fetchReferrals(params)),
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(Referralbox)