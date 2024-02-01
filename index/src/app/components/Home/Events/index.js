import React, { Component } from "react";
import { Link } from "react-router-dom";

import Slider from "react-slick";
import LeftArrow from "../Slider/LeftArrow";
import RightArrow from "../Slider/RightArrow";
import Entry from "./Entry";
import emojipedia from "./emojipedia";



function createEntry(emojiTerm) {
  return (
    <Entry key={emojiTerm.id} image={emojiTerm.image} name={emojiTerm.name} eventLink={emojiTerm.eventLink} />
  );
}

const settings = {
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: false,

  dots: false,
  arrows: true,
  infinite: false,
  nextArrow: <RightArrow to="next" />,
  prevArrow: <LeftArrow to="prev" />,
  responsive: [
    {
      breakpoint: 720,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
      },
    },
    {
      breakpoint: 1290,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
      },
    },


  ],
};

class Events extends Component {
  render() {
    return (
      <div className="">
        {this.props.width > 1024 ? (
          <div>
            <div className="th-home-event-parent">
              <h1>EVENTS</h1>
              
            </div>
            <div className="th-home-testimonialslider">
            <Slider {...settings} >
            {
             emojipedia.map(createEntry)
                }


          </Slider>
          </div>
          </div>
        ) : (
          <div>
            <div className="th-home-event-parent">
              <h1>EVENTS</h1>
              
            </div>

            <div className="th-home-event-container">
              {emojipedia.map(createEntry)}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Events;