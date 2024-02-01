import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import LeftArrow from "../Slider/LeftArrow";
import RightArrow from "../Slider/RightArrow";
import bgimg from './images/image 38.png'


import Entry from "./Entry";
import emojipedia from "./emojipedia";

const settings = {
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: false,

  dots: true,
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
        slidesToShow: 1.5,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        fade: true,
      },
    },
  ],
};

function createEntry(emojiTerm) {
  return (
    <Entry
      key={emojiTerm.id}
      image={emojiTerm.image}
      title={emojiTerm.title}
      post={emojiTerm.post}
      number={emojiTerm.number}
      description={emojiTerm.description}
    />
  );
}

class Testimonials extends Component {
  render() {
    return (
      <div className="" >
        {this.props.width > 1024 ? (
          <div>
            <div className="th-home-event-parent">
              <h1>TESTIMONIALS</h1>
            </div>
            <div className="th-home-testimonialslider" >
            <Slider {...settings}>{emojipedia.map(createEntry)}</Slider>
            </div>
          </div>
        ) : (
          <div className="social-updated-bg" >
            <div className="th-home-event-parent">
              <h1>Testimonials</h1>
            
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

export default Testimonials;