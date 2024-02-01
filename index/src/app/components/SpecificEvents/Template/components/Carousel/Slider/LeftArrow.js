import React from "react";
import LeftArrowIcon from "../images/left-arrow.svg";
import "../css/Slider.css"

const LeftArrow = ({ className, to, onClick }) => (
  <div
    onClick={onClick}
    className={`slick-next th-arrow-slider-left ${className}`}
    aria-label={to}
  >
    <img src={ LeftArrowIcon} alt="" className="th-slider-arrow" />
  </div>
);

export default LeftArrow;