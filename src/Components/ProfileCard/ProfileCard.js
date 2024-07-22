import React from 'react';
import './ProfileCard.css'

function ProfileCard(props) {
    return (
        <div className="profilecard-container">
            <div>Referral Code</div>
            <div>Dhruv Bhatia</div>
            <div>
                <div>
                    <div>Education Details</div>
                    <div>
                        <div className="items">
                            <div>College</div>
                            <div>Indian Institute of Technology Roorkee</div>
                        </div>
                        <div className="items">
                            <div>Degree and Year</div>
                            <div>B.Arch 3rd</div>
                        </div>
                    </div>
                </div>
                <div>
                    <div>Contact Info.</div>
                    <div>
                        <div className="items">
                            <div>Email Id</div>
                            <div>abc@gmail.com</div>
                        </div>
                        <div className="items">
                            <div>Phone no.</div>
                            <div className="inputbox">
                                <div><input/></div>
                                <div>Save</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default ProfileCard;