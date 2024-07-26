import React, {useEffect, useState} from 'react';
import './ProfileCard.css';
import Copy from '../Assets/copy.svg';
import profileImage from '../Assets/guyprofile.svg';
import editbtn from '../Assets/editbtn.svg'
import {fetchReferrals, fetchUser, logout} from "../User/UserActions";
import {connect} from "react-redux";

import {fetchReferrals, fetchUser, logout} from "../User/UserActions";
import {connect} from "react-redux";
import {message} from "antd";


function ProfileCard(props) {
    const getCode = () => {
    navigator.clipboard.writeText(props.userDetails?.thomso_id);
    message.success("Code copied to clipboard");
  };
    const [User, setUser] = useState(props.User)
    const [phoneNumber, setPhoneNumber] = useState(User.contact);

    const handleChange = (e) => {
        const value = e.target.value;
        // Only allow numeric values
        if (/^\d*$/.test(value)) {
            setPhoneNumber(value);
        }
    };
    useEffect(() => {
        console.log('card',props)
        setUser(props.userDetails)

    }, []);
    return (
        <>

            <div className="profilecard-container large-view">
                <div className="profilecard-userimg">
                    <img src={profileImage} alt="profile"/>
                </div>
                <div className='profilecard-referral'>
                    <p className="profilecard-referral-text">Referral Code</p>
                    <div className="profilecard-referral-code">
                        <p>{User.thomso_id}</p>
                        <div onClick={()=>getCode()}><img src={Copy} alt="copy"/></div>
                    </div>
                </div>
                <div className='profilecard-name'>{User?.name}</div>
                <div className='profilecard-details'>
                    <div className='profilecard-details-div'>
                        <div className='profilecard-details-head'>Education Details</div>
                        <div className='profilecard-details-text'>
                            <div className="items-head">
                                <div>College</div>
                                <div>Degree</div>
                                <div>Year</div>
                            </div>
                            <div className="items">
                                <div>{User?.college}</div>
                                <div>{User?.degree}</div>
                                <div>{User?.year}</div>
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
                                <div>{User?.email}</div>
                                <div className="inputbox">
                                    <div><input className="profile-card-phoneinput" value={phoneNumber}/></div>
                                    <button>Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/*small view*/}


            <div className="profilecard-container small-view">
                <div className="profilecard-top-section">
                    <div className="profilecard-userimg">
                        <img src={profileImage} alt="profile"/>
                    </div>
                    <div className="profilecard-topright-section">
                        <div className='profilecard-name'>Dhruv Bhatia</div>
                        <div className='profilecard-referral'>
                            <p className="profilecard-referral-text">Referral Code</p>
                            <div className="profilecard-referral-code">
                                <p>165GZXV4</p>
                                <img src={Copy} alt="copy"/>
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
                                <div>{User.email}</div>
                                <div className="inputbox">
                                    <div><input
                                        type="tel"
                                        id="phoneInput"
                                        className="profile-card-phoneinput"
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
                                        <div><img src={editbtn} alt="editbtn"/></div>
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

const mapStateToProps = (state) => {
    let userDetails = state.user.user;
    let loading = state.user.loading;
    let referrals = state.user.referrals;

    return {
        userDetails,
        loading,
        referrals
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsers: (params) => dispatch(fetchUser(params)),
        logouts: (params) => dispatch(logout(params)),
        fetchReferral: (params)=>dispatch(fetchReferrals(params))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileCard);