import React from "react";
import "./HomeContent.css";
import background from "../Image/final_background.png";
import Logo from "../Image/logo.png";

export default function Content() {
  return (
    <>
      <div className="home-top-content-wrapper">
        <img src={background} alt="" className="backimg" />

        <div className="home-logo-display">
          <div>
            <img
              src={Logo}
              alt="logo"
              className="th-header-logo"
              style={{ marginRight: "20px" }}
            />
          </div>
          <div>
            <div style={{ color: "white", fontSize: "22px", margin: "0px" }}>
              National
            </div>
            <div style={{ color: "white", fontSize: "22px", margin: "0px" }}>
              Social
            </div>
            <div style={{ color: "white", fontSize: "22px", margin: "0px" }}>
              Summit
            </div>
            <div style={{ color: "#8FEFE9" }}>10th-11th Feb 2024</div>
          </div>
        </div>

        <div className="header-bottom">
          <h1 className="header-bottom-heading">Educate Empower Sustain</h1>
          <div className="header-bottom-para1">
            <p>National Social Summit 2024</p>
            <p className="header-bottom-line2">10th - 11th Feb 2024</p>
          </div>
          <p className="header-bottom-para3">
          Welcome to the National Social Summit'24—an inspiring convergence of thought leaders, change-makers, and visionaries. As we embark on this transformative journey under the theme "Educate, Empower, Sustain," our mission is clear—to shape a future where knowledge enlightens, empowerment prevails, and sustainability guides our every step. Organized by NSS IIT Roorkee, this dynamic annual event serves as a beacon for constructive dialogue and innovative solutions to the pressing socio-economic challenges of our time. In a world seeking progress, we invite you to be part of a community dedicated to making a lasting impact. Together, let's explore, engage, and envision a society where education is accessible to all, empowerment knows no bounds, and sustainability is at the heart of our collective endeavors. Welcome to the National Social Summit'24—where ideas converge and possibilities unfold.
          </p>

          <div className="header-bottom-button">
            <a href="https://socialsummit.iitr.ac.in/signup" target="_blank">
              <button id="btn-1">Register</button>
            </a>

            {/* <button>Payment</button> */}
          </div>
        </div>
      </div>
    </>
  );
}
