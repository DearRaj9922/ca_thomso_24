import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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


import CombinedLandingPage from "./Components/CombinedLandingPage/CombinedLandingPage.js";
import Quizardry from "./Components/Quizardry/Quizardry";
import Leaderboard from "./Components/registration/Leaderboard/Leaderboard.js";
import LeaderRightbar from "./Components/registration/Leaderboard/LeaderRightbar.js";


function App() {
    return (
        <Leaderboard />
    );
}

export default App;
