import React from 'react';
import './ProfileMilestone.css';

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

function ProfileMilestone() {
    return (
        <div className="profile-milestone">
            {ReferralData.map((item, index) => (
                <React.Fragment key={index}>
                    <div className="milestone-item">
                        <div className="milestone-score">+{item.score}</div>
                        <div className="milestone-inner-text">
                            <div>Referral Accepted</div>
                            <div className="milestone-secondary">{item.name} joined</div>
                        </div>
                    </div>
                    <div><hr /></div>
                </React.Fragment>
            ))}
        </div>
    );
}

export default ProfileMilestone;
