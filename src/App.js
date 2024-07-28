import "./App.css";
import React from "react";
import {HashRouter as Router, Routes, Route} from "react-router-dom";
import CampusAmbassador from "./Components/Landing/Landing3/CampusAmbassador";
import Landing4 from "./Components/Landing/Landing4/Landing4.js";
// import Landing1 from "./Components/Landing/Landing1/Landing1.js";
import Landing2 from "./Components/Landing/Landing2/Landing2.js";
import PersonalDetails from './Components/registration/step1/personalDetails.jsx';
import Landing5 from "./Components/Landing/Landing5/Landing5.js";
import Emailverify from "./Components/registration/register/form.js";
import Emailverified from "./Components/registration/EmailVerify/EmailVerify.js";
import Login from './Components/registration/login/login.js';
import HeroSection from "./Components/Landing/Hero Section/HeroSection";
import Footer from "./Components/Footer/Footer.js";

import Profile from "./Components/Profile/Profile";
import ProfileDetails from "./Components/ProfileDetails/ProfileDetails.js";
import Referrals from "./Components/Referrals/referrals.js";
import Leaderboard from "./Components/NewLeaderboard/leaderboard";
import Winner from "./Components/registration/Leaderboard/Winner.js";
import Feed from "./Components/Feed/FeedData.js";



import CombinedLandingPage from "./Components/CombinedLandingPage/CombinedLandingPage.js";


function App() {
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
                    <Route path='/emailverified' element={<Emailverified/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/profile' element={<Profile/>}/>
                    <Route path='/profiledetail' element={<ProfileDetails/>}/>
                    <Route path='/referrals' element={<Referrals/>}/>
                    <Route path='/leaderboard' element={<Leaderboard/>}/>
                    <Route path='/winners' element={<Winner/>}/>
                    {/* <Route path='/feed' element={<Feed/>}/> */}

                        {/*<Route path='/quizardry' element={<Quizardry/>}/>*/}

                        </Routes>
                        </Router>
                        </div>
                        );
                    }

export default App;
