import { useState, useEffect } from 'react';
import './App.css';

import Preloader from "../src/components/Preloader.jsx";
import Reset_scroll from "../src/components/Reset_scroll.jsx";
import Nav from "../src/components/Nav.jsx";
import Foot from "../src/components/Foot.jsx";

import About from "../src/components/About/About.jsx"
import Experience from "../src/components/Experience/Experience.jsx"
import Projects from "../src/components/Projects/Projects.jsx"

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";

function App() {
  const [loadState, updateLoadState] = useState(true);

  useEffect(() => {
    document.body.classList.add('no-scroll');
    const timer = setTimeout(() => {
      updateLoadState(false);
      document.body.classList.remove('no-scroll');
    }, 2400);

    return () => {
      clearTimeout(timer);
      document.body.classList.remove('no-scroll');
    }
  }, []);

  return (
    <>
      <Router>
        <Preloader load={loadState} />
        <div style={{ textAlign: 'center' }} id={loadState ? "disable" : "enable"}>
          <Nav />
          <Reset_scroll />
          <Routes>
            <Route path="/" element={<Navigate to="/about" replace />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="*" element={<Navigate to="/about"/>} />
          </Routes>
          <Foot />
        </div>
      </Router>
    </>
  );
}

export default App;
