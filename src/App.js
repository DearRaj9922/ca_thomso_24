import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ParallaxWrapper from "./Components/ParallaxWrapper/ParallaxWrapper.js";
import CampusAmbassador from "./Components/Landing/Page_3/CampusAmbassador";
import Landing4 from "./Components/Landing/Landing4/Landing4.js";
import Landing1 from "./Components/Landing/Landing1/Landing1.js";
import Landing2 from "./Components/Landing/Landing2/Landing2.js";
import PersonalDetails from './Components/registration/step1/personalDetails.jsx';
import Landing5 from "./Components/Landing/Landing5/Landing5.js";
import Emailverify from "./Components/registration/register/form.js";
import Emailverified from "./Components/registration/EmailVerify/EmailVerify.js";
import Login from './Components/registration/login/login.js';
import HeroSection from "./Components/Landing/Hero Section/HeroSection";
import Footer from "./Components/Footer/Footer.js";

import Profile from "./Components/Profile/Profile";



import CombinedLandingPage from "./Components/CombinedLandingPage/CombinedLandingPage.js";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/landing1" element={<ParallaxWrapper><HeroSection className="parallax-element" data-speed="0.5" /></ParallaxWrapper>} />
          <Route path="/landing2" element={<ParallaxWrapper><Landing2 className="parallax-element" data-speed="0.4" /></ParallaxWrapper>} />
          <Route path='/landing3' element={<ParallaxWrapper><CampusAmbassador className="parallax-element" data-speed="0.2" /></ParallaxWrapper>} />
          <Route path='/landing4' element={<ParallaxWrapper><Landing4 className="parallax-element" data-speed="0.3" /></ParallaxWrapper>} />
          <Route path='/landing5' element={<ParallaxWrapper><Landing5 className="parallax-element" data-speed="0.1" /></ParallaxWrapper>} />
          <Route path='/' element={<CombinedLandingPage />} />
          <Route path='/registration' element={<PersonalDetails />} />
          <Route path='/verify' element={<Emailverify />} />

          <Route path='/emailverified' element={<Emailverified/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/profile' element={<Profile/>}/>


        </Routes>
      </Router>
    </div>
  );
}

export default App;
