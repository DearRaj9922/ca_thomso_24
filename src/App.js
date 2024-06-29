import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing4 from "../src/Components/Landing/Landing4/Landing4.js";
import React from "react";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/landing4' element={<Landing4 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
