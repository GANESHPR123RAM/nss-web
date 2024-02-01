import React from "react";
import RightArrowIcon from "../images/right-arrow.svg";
import "../css/Slider.css"

const RightArrow = ({ className, to, onClick }) => (
  <div
    onClick={onClick}
    className={`slick-next th-arrow-slider-right ${className}`}
    aria-label={to}
  >
    <img src={RightArrowIcon} alt="" className="th-slider-arrow" />
  </div>
);

export default RightArrow;