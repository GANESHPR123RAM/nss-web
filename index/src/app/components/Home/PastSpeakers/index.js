import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import LeftArrow from "../Slider/LeftArrow";
import RightArrow from "../Slider/RightArrow";
import axios from "axios";


import emojipedia from "./emojipedia";

const settings = {
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,

  dots: false,
  arrows: true,
  infinite: false,
  nextArrow: <RightArrow to="next" />,
  prevArrow: <LeftArrow to="prev" />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        fade: true,
      },
    },
  ],
};

class PastSpeakers extends Component {


  render() {
   
    return (
      <div>
        <div className="th-home-event-parent">
          <h1>SPEAKERS</h1>
         
        </div>
        <div className="pt-3 ">

          <div className="ml-5 mr-5 th-home-speaker-slider">
            <Slider {...settings} className="px-0">
              {emojipedia.map((props) => {
                return (
                  <Link to="" className="col th-link">
                    <div className="th-home-speaker">
                      <div className="th-home-speakerimg">
                        <img src={props.image} />
                      </div>
                      <div className="th-home-speakertext">
                        <div className="th-home-speakercontent">
                          <h1>{props.name}</h1>
                          <h5>{props.title}</h5>
                          <p>{props.des}</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}

export default PastSpeakers;