import React from 'react';
import './testimonial.css';
import InvertedComma from './Assets/inv.svg';
const testiMonialsDetail = ({testiMonialDetail}) => {
    const {name, address, description, img} = testiMonialDetail;
    // console.log("testiMonialDetail"+testiMonialDetail)
    return (
        <div className="item">
        <div className="shadow-effect"></div>
        <div className="testimonial-name">
          <div className='testi-left' >
            <img alt='' className="img-circle" src={img} />
            <h2 className='test-name'>{name}</h2>
            {/* <p className='test-post'>{address}</p> */}
          </div>
          <div className='testimonial-item-left'>
            <img alt='' className='inv' src={InvertedComma}  />
            <p>{description}</p>
          </div>
        </div>
      </div>
    );
};

export default testiMonialsDetail;
