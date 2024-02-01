import React from "react";

import whiteTestimonialCard from './images/whiteTestimonialCard.png'
import purpleTestimonialCard from './images/purpleTestimonialCard.png';

import {useWidthAndHeight} from './../../../../hooks/useWidthAndHeight';



function Entry(props) {

  let windowSize = useWidthAndHeight();
  let width = windowSize[0];

  const cardClass = (width>1150) ? 'th-home-testimonial-uc' : 'th-home-testimonial-uc-mobile'


let customStyle= {
  backgroundColor : '',
  backgroundImage: '',
  marginTop: "0px",
  color:'#F8F8F8',
  backgroundSize : 'cover',
  backgroundPosition : 'center'
}
    customStyle.backgroundColor = '#F8F8F8'
    customStyle.backgroundImage = `url(${whiteTestimonialCard})`;
    customStyle.color= "#663AA3"

  
  return (
    <div className="th-home-testimonial-card"  >
      <div className="th-home-testimonial-uc" style={customStyle}>
       {props.description}
      </div>
      <div className="th-home-testimonial-lc">
        <img src={props.image} className="th-home-testimonial-img" />
        <div className="th-home-testimonial-lc-2">
          <h4>{props.title}</h4>
          <h5>{props.post}</h5>
        </div>
      </div>
    </div>
  );
}

export default Entry;