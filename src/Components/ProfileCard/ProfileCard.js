import React, { useState } from 'react';
import './ProfileCard.css';
import Copy from '../Assets/copy.svg';
import User from '../Assets/guyprofile.svg';
import editbtn from '../Assets/editbtn.svg'

function ProfileCard(props) {
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleChange = (e) => {
        const value = e.target.value;
        // Only allow numeric values
        if (/^\d*$/.test(value)) {
            setPhoneNumber(value);
        }
    };
    return (
        <>

            <div className="profilecard-container large-view">
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
                                    <div><input /></div>
                                    <button>Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


            <div className="profilecard-container small-view">
                <div className="profilecard-top-section">
                    <div className="profilecard-userimg">
                        <img src={User} alt="profile" />
                    </div>
                    <div className="profilecard-topright-section">
                        <div className='profilecard-name'>Dhruv Bhatia</div>
                        <div className='profilecard-referral'>
                            <p className="profilecard-referral-text">Referral Code</p>
                            <div className="profilecard-referral-code">
                                <p>165GZXV4</p>
                                <img src={Copy} alt="copy" />
                            </div>
                        </div>
                    </div>
                </div>
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
                                    <div> <input
                                        type="tel"
                                        id="phoneInput"
                                        className="phone-input"
                                        value={phoneNumber}
                                        onChange={handleChange}
                                        placeholder="Enter phone number"
                                    /></div>
                                    <button className="profilecard-button1">
                                        {/*<div className="profilecard-save">Save</div>*/}
                                        {/*<div><img src={editbtn} alt="editbtn"/></div>*/}

                                        save
                                    </button>
                                    <div className="profilecard-button2">
                                        <div><img src={editbtn} alt="editbtn" /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </>

    );
}

export default ProfileCard;