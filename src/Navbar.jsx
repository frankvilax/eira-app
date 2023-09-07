import React from "react";
import "./navbar.css";

import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="navbarStructure">
        <div className="leftSection"></div>
        <div className="navbar">
          <div className="header">
            <p className="title">ARQUITETURA / CONSULTORIA / DESIGN</p>

            <p className="description1">
              local de terra batida, cimentado ou lajeado, próprio para
            </p>
            <p className="description2">
              debulhar, trilhar, secar e limpar ideias
            </p>
          </div>
          <div className="logoContainer">
            <Link
              to="/"
              style={{ textDecoration: "none", color: "rgb(116, 76, 36)" }}
            >
              <img
                className="logo"
                src="https://lirp.cdn-website.com/1a29d4ed/dms3rep/multi/opt/logo_redondo-1920w.png"
                alt="First slide"
              />
            </Link>
          </div>
          <ul className="navlinks">
            <div className="menu">
              <li
                className="menuAbout"
                onClick={() => {
                  document.getElementById("checkbox_toggle").checked = false;
                }}
              >
                <Link
                  to="/about"
                  style={{ textDecoration: "none", color: "rgb(116, 76, 36)" }}
                >
                  sobre / about
                </Link>
              </li>
              -
              <li
                className="menuContact"
                onClick={() => {
                  document.getElementById("checkbox_toggle").checked = false;
                }}
              >
                <Link
                  to="/contact"
                  style={{ textDecoration: "none", color: "rgb(116, 76, 36)" }}
                >
                  contacto / contact
                </Link>
              </li>
            </div>
            <a className="social1Container" href="mailto:franciskopereira@hotmail.com?subject=SendMail&body=Description">
              <img
                className="social1"
                src="https://w7.pngwing.com/pngs/378/900/png-transparent-email-computer-icons-email.png"
                alt="First slide"
              />
            </a>
            <a className="social2Container" href="http://instagram.com/atelier.eira">
              <img
                className="social2"
                src="https://png.pngitem.com/pimgs/s/512-5123528_logo-instagram-marrom-png-transparent-png.png"
                alt="First slide"
              />
            </a>
          </ul>
        </div>
        <div className="rightSection"></div>
      </div>
    </>
  );
};

export default Navbar;
