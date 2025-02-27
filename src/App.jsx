import { useState, useEffect } from 'react';
import './App.css';

import Preloader from "../src/components/Preloader.jsx";
import Reset_scroll from "../src/components/Reset_scroll.jsx";
import Nav from "../src/components/Nav.jsx";
import Foot from "../src/components/Foot.jsx";


import About from "../src/components/About/About.jsx"
import Home from "../src/components/Home/Home.jsx"
import Experience from "../src/components/Experience/Experience.jsx"

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";

function App() {
  const [loadState, updateLoadState] = useState(true); // Corrected typo

  useEffect(() => {
    document.body.classList.add('no-scroll');
    const timer = setTimeout(() => {
      updateLoadState(false); // Corrected typo
      document.body.classList.remove('no-scroll'); // Remove no-scroll after preloader
    }, 2400);

    return () => {clearTimeout(timer);
      document.body.classList.remove('no-scroll');}
  }, []);

  return (
    <>
      <Router>
        <Preloader load={loadState} />
        <div style={{ textAlign: 'center' }} id={loadState ? "disable" : "enable"}>

          <Nav />
          <Reset_scroll />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="*" element={<Navigate to="/"/>} />
          </Routes>
          <Foot />
        </div>
        </Router>
    </>
  );
}

export default App;
