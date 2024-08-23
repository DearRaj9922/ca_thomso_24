import "./App.css";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import CampusAmbassador from "./Components/Landing/Landing3/CampusAmbassador";
import Landing4 from "./Components/Landing/Landing4/Landing4.js";
import { fetchUser } from "./Components/User/UserActions";
// import Landing1 from "./Components/Landing/Landing1/Landing1.js";
import { connect, useDispatch } from "react-redux";
import Landing2 from "./Components/Landing/Landing2/Landing2.js";
import PersonalDetails from './Components/registration/step1/personalDetails.jsx';
import Landing5 from "./Components/Landing/Landing5/Landing5.js";
import Emailverify from "./Components/registration/register/form.js";
import Emailverified from "./Components/registration/EmailVerify/EmailVerify.js";
import Login from './Components/registration/login/login.js';
import HeroSection from "./Components/Landing/Hero Section/HeroSection";
import Footer from "./Components/Footer/Footer.js";
import NewFeed from "./Components/NewFeed/NewFeed.js";

import Profile from "./Components/Profile/Profile";
import ProfileDetails from "./Components/ProfileDetails/ProfileDetails.js";
import Referrals from "./Components/Referrals/referrals.js";
import Leaderboard from "./Components/Leaderboard/Leaderboard.jsx";
import Winner from "./Components/registration/Leaderboard/Winner.js";
import Feed from "./Components/Feed/FeedData.js";
import ForgotPassword from "./Components/registration/ForgotPassword/ForgotPassword.jsx";
import ResetPass from "./Components/registration/Resetpass/ResetPass";
// import Leaderboard from "./Components/registration/Leaderboard/";



import CombinedLandingPage from "./Components/CombinedLandingPage/CombinedLandingPage.js";
import FeedData from "./Components/Feed/FeedData.js";


function App(props) {
    const dispatch = useDispatch()
    useEffect(() => {
        console.log("main", props)

        const token = localStorage.getItem("token");
        const userId = localStorage.getItem("user_id");
        if (token) {
            dispatch(fetchUser({ id: userId }))
            props?.userDetails && props?.fetchUsers({ id: userId });
        }
    }, []);
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/landing1" element={<HeroSection />} />
                    <Route path="/landing2" element={<Landing2 />} />
                    <Route path='/landing3' element={<CampusAmbassador />} />
                    <Route path='/landing4' element={<Landing4 />} />
                    <Route path='/landing5' element={<Landing5 />} />
                    <Route path='/' element={<CombinedLandingPage />} />
                    <Route path='/registration' element={<PersonalDetails />} />
                    <Route path='/verifyemail' element={<Emailverify />} />

                    {/* <Route path='/feeds' element={<Feed />} /> */}
                    <Route path='/emailverified' element={<Emailverified />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/profile' element={<Profile />} />
                    <Route path='/profiledetail' element={<ProfileDetails />} />
                    <Route path='/referrals' element={<Referrals />} />
                    <Route path='/leaderboard' element={<Leaderboard />} />
                    <Route path='/winners' element={<Winner />} />
                    <Route path='/forgotpassword' element={<ForgotPassword />} />


                    <Route path='/feeds' element={<NewFeed/>}/>

                    <Route
                        exact={true}
                        path="/auth/reset-password/:email/:token"
                        element={<ResetPass />}
                    />
                    {/* <Route path='/feed' element={<Feed/>}/> */}

                    {/*<Route path='/quizardry' element={<Quizardry/>}/>*/}

                </Routes>
            </Router>
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
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
