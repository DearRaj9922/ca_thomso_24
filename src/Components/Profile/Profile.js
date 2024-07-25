import React, {useEffect, useState} from 'react';
import './Profile.css'
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import ProfileCard from "../ProfileCard/ProfileCard";
import banner from '../Assets/bannermain.svg'
import ProfileMilestone from "../ProfileMilestone/ProfileMilestone";
import {useNavigate} from "react-router-dom";
import { fetchUser, logout } from "../User/UserActions";
import axios from "axios";
import { Store } from "../../Config/Store";
import { connect } from "react-redux";

function Profile(props) {
    const { dispatch } = Store;
    const [display, setDisplay] = useState(true);
    const [logoutModal, setLogoutModal] = useState(false);
    // const [editModal, setEditModal] = useState(false);
    const [open, setOpen] = useState(false);
    const [openClg, setOpenClg] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [inputValue, setInputValue] = useState();
    const { userDetails: user, loading } = props;
    // const [user, setuser] = useState({});
    const [error, setError] = useState(false);
    const [Loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");


    const navigate = useNavigate();

const [User, setUser] = useState(null);
const onSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);
        const { dispatch } = Store;
        try {
            const response = await axios.put(
                `/apiV1/registerca/${localStorage.getItem("user_id")}`,
                User
            );
            const { data } = response;
            if (response.status === 200) {
                setLoading(false);
                setOpenModal(!openModal);
                dispatch(fetchUser());
            }
            // window.location.reload();
            setLoading(false);
            setOpenModal(!openModal);
        } catch (err) {
            setLoading(false);
            const { data } = err?.response;
            console.log("register Error:", data);
            var errorData = "";
            setErrorMsg(errorData);
            setError(true);
            setLoading(false);
            setOpenModal(!openModal);
        }
    };

const getUser = async()=>{
    const res = await axios.get(`http://35.154.76.67/apiV1/registerca/${localStorage.getItem("user_id")}`);
    console.log(res.data)
    dispatch(fetchUser());
    setUser(res.data);
    // setUser(res.data);
}
    const tmkc = async()=>{
    const res = await axios.get("http://127.0.0.1:8000/apiV1/current_user_ca");
    console.log(res)
    }
    useEffect(() => {
        getUser()
        tmkc();
    }, []);
    return (
        <div className="profile-main-container">
            <Navbar />

            <div className="profile-container">
                {User?
                    (
                <div><ProfileCard User={User} /></div>

                    ):
                    (
                        <></>
                    )}
                <div className="banner">

                    <div className="banner-title">Achievements</div>
                    <div className="banner-data-container">
                        <img src={banner} alt="banner" />

                        <div className="banner-data">
                            <div className="banner-section">
                                <div>11th</div>
                                <div>
                                    <hr />
                                </div>
                                <div>Ranking</div>
                            </div>
                            <div className="banner-section">
                                <div>{User? User?.total_score : "-"}</div>
                                <div>
                                    <hr />
                                </div>
                                <div>Score</div>
                            </div>
                            <div className="banner-section">
                                <div>{User? User?.referral_score:"-"}</div>
                                <div>
                                    <hr />
                                </div>
                                <div>Referrals</div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="milestone-container">
                    <div>Recent Milestones</div>
                    <ProfileMilestone />
                </div>
            </div>
            <Footer />
        </div>
    );
}

const mapStateToProps = (state) => {
    let userDetails = state.user.user;
    let loading = state.user.loading;

    return {
        userDetails,
        loading,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsers: (params) => dispatch(fetchUser(params)),
        logouts: (params) => dispatch(logout(params)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);