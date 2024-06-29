
import './App.css';
import CampusAmbassador from './Components/Landing/Page_3/CampusAmbassador';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing4 from "../src/Components/Landing/Landing4/Landing4.js";
import React from "react";

function App() {
  return (
    <div className="App">

    
      <Router>
        <Routes>
          <Route path='/landing4' element={<Landing4 />} />
          <Route path='/landing3' element={<CampusAmbassador />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
