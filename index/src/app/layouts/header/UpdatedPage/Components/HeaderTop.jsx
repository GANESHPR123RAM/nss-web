import React from "react";
import "./HeaderTop.css";
import img14 from "../Image/image 14.png";
import img15 from "../Image/image 15.png";
import img16 from "../Image/image 16.png";
import img17 from "../Image/image 17.png";
import img18 from "../Image/Frame.png";
import img19 from "../Image/image 19.png";
import img21 from "../Image/image 21.png";
import img22 from "../Image/image 22.png";
import img23 from "../Image/image 23.png";
import logo from "../Image/logo.png";

export default function Header() {
  return (
    <>
      <div className="header-top">
        <div className="header-img-wrapper">
          <img src={img18} alt=""  />
          {/* <img src={img19} alt="" className="ss-header-img2" />
          <img src={img16} alt="" className="ss-header-img3" />
          <img src={img23} alt="" className="ss-header-img4" />
          <img src={img14} alt="" className="ss-header-img5" />
          <img src={img17} alt="" className="ss-header-img6" />
          <img src={img15} alt="" className="ss-header-img7" />
          <img src={img21} alt="" className="ss-header-img8" />
          <img src={img22} alt="" className="ss-header-img9" /> */}
        </div>
        <div className="logo-heading">
          <div className="logo-img">
            <img src={logo} alt="logo" className="th-header-logo" />
          </div>
          <div className="text">
            <p className="para1">National Social Summit</p>
            <p className="para2">10th - 11th Feb 2024</p>
          </div>
        </div>
      </div>
    </>
  );
}
