import Carousel from "react-bootstrap/Carousel";
import React, { useState } from "react";

import Navbar from "./Navbar";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
} from "react-router-dom";
import About from "./About";
import Home from "./Home";
import "./styles.css";
import { Contact } from "./Contact";
import { Projects } from "./Projects";
import ScrollToTop from "./ScrollToTop";

function UncontrolledExample() {
  return (
    <>
      <div className="app">
        <Router>
          <Navbar/>
          <ScrollToTop>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/projects" element={<Projects />} />
            </Routes>
          </ScrollToTop>
        </Router>
      </div>
    </>
  );
}

export default UncontrolledExample;
