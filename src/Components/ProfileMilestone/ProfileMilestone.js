import React, {useEffect} from 'react';
import './ProfileMilestone.css';
import {connect} from "react-redux";
import { fetchReferrals } from "../User/UserActions";

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
    return (
        <div className="profile-milestone">
            {props.referrals.map((item, index) => (
                <React.Fragment key={index}>
                    <div className="milestone-item">
                        <div className="milestone-score">+{item.points}</div>
                        <div className="milestone-inner-text">
                            <div>Referral Accepted</div>
                            <div className="milestone-secondary">{item.category} joined</div>
                        </div>
                    </div>
                    <div><hr /></div>
                </React.Fragment>
            ))}
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

export default connect(mapStateToProps, mapDispatchToProps)(ProfileMilestone);

