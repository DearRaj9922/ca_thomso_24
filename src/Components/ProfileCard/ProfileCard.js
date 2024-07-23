import React from 'react';
import './ProfileCard.css';
import Copy from '../Assets/copy.svg';
import User from '../Assets/guyprofile.svg';

function ProfileCard(props) {
    return (
        <div className="profilecard-container">
            <div className="profilecard-userimg">
                <img src={User} alt="profile" />
            </div>
            <div className='profilecard-referral'>
                <p className="profilecard-referral-text">Referral Code</p>
                <div className="profilecard-referral-code">
                    <p>165GZXV4</p>
                    <img src={Copy} alt="copy" />
                </div>
            </div>
            <div className='profilecard-name'>Dhruv Bhatia</div>
            <div className='profilecard-details'>
                <div className='profilecard-details-div'>
                    <div className='profilecard-details-head'>Education Details</div>
                    <div className='profilecard-details-text'>
                        <div className="items-head">
                            <div>College</div>
                            <div>Degree and Year</div>
                        </div>
                        <div className="items">
                            <div>Indian Institute of Technology Roorkee</div>
                            <div>B.Arch 3rd</div>
                        </div>
                    </div>
                </div>
                <div className='profilecard-details-div'>
                    <div className='profilecard-details-head'>Contact Info.</div>
                    <div className='profilecard-details-text'>
                        <div className="items-head">
                            <div>Email Id</div>
                            <div>Phone no.</div>
                        </div>
                        <div className="items">
                            <div>abc@gmail.com</div>
                            <div className="inputbox">
                                <div><input/></div>
                                <button>Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default ProfileCard;