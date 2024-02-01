import React from 'react';

import SingleComponent from './SingleComponent';
import data from './data';

import './css/EventPartners.css'

const EventPartners = () => {
    return (
        <div className="EventPartnerWrapper">
      <div className="PartnerHeading">Event Partners</div>
      <div className="Partners">
        {data.map((partner) => (
          <div className="PartnerLogo">
            <img className="PartnerImg" src={partner.image} />
          </div>
        ))}
      </div>
    </div>
    )
}

export default EventPartners