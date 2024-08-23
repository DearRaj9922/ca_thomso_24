import React, {useEffect, useState} from 'react';
import './ProfileMilestone.css';
import {connect} from "react-redux";
import { fetchReferrals } from "../User/UserActions";
import axios from "axios";

const ReferralData = [

    { score: 20, name: "Mukul Dhiman" },
    { score: 20, name: "Mukul Dhiman" },
    { score: 20, name: "Mukul Dhiman" },
    { score: 20, name: "Mukul Dhiman" },
    { score: 20, name: "Mukul Dhiman" },
    { score: 20, name: "Mukul Dhiman" },
    { score: 20, name: "Mukul Dhiman" },
    { score: 20, name: "Mukul Dhiman" },
    { score: 20, name: "Mukul Dhiman" },
    { score: 20, name: "Mukul Dhiman" },
    { score: 20, name: "Mukul Dhiman" },
    { score: 20, name: "Mukul Dhiman" },
    { score: 20, name: "Mukul Dhiman" },
    { score: 20, name: "Mukul Dhiman" },
    { score: 20, name: "Mukul Dhiman" },
    { score: 20, name: "Mukul Dhiman" },
    { score: 20, name: "Mukul Dhiman" },
];

function ProfileMilestone(props) {
    const [reffs, setReffs] = useState([])
    const [loader, setLoader] = useState(false)
      useEffect(()=>{
        (async()=>{
            await axios.get(`https://api2.thomso.in/apiV1/ca_activity?ca_id=${localStorage.getItem('id')}`).then((res)=>{
              console.log(res.data)
                setReffs(res.data)
            })
            setLoader(true)
        })()
    },[])
    if(!loader){
        return(<></>)
    }
    else{
        return (
        <div className="profile-milestone">
            {reffs.map((item, index) => (
                <React.Fragment key={index}>
                    <div className="milestone-item">
                        <div className="milestone-score">+{item.points}</div>
                        <div className="milestone-inner-text">
                            <div>Referral Accepted</div>
                            <div className="milestone-secondary">{item.description}</div>
                        </div>
                    </div>
                    <div><hr /></div>
                </React.Fragment>
            ))}
        </div>
    );
    }

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

export default connect(mapStateToProps, mapDispatchToProps)(ProfileMilestone);

