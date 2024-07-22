import "./App.css";
import CampusAmbassador from "./Components/Landing/Page_3/CampusAmbassador";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing4 from "../src/Components/Landing/Landing4/Landing4.js";
import Landing1 from "../src/Components/Landing/Landing1/Landing1.js";
import Landing2 from "../src/Components/Landing/Landing2/Landing2.js";
import React from "react";
// import Landing1 from "../src/Components/Landing/Landing1/Landing1.js"
// import { Main } from './Components/Landing/Landing1/Main.jsx';
import PersonalDetails from './Components/registration/step1/personalDetails.jsx';
import Landing5 from "../src/Components/Landing/Landing5/Landing5.js";
import Emailverify from "../src/Components/registration/register/form.js"
import Emailverified from "../src/Components/registration/EmailVerify/EmailVerify.js";
import Login from '../src/Components/registration/login/login.js';
import HeroSection from "./Components/Landing/Hero Section/HeroSection";
import Footer from "./Components/Footer/Footer.js";
import Profile from "./Components/Profile/Profile";



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/land" element={<Landing1 />} />
          <Route path="/landing2" element={<Landing2 />} />
          <Route path='/landing4' element={<Landing4 />} />
          <Route path='/landing3' element={<CampusAmbassador />} />
          <Route path='/landing5' element={<Landing5/>}/>
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
