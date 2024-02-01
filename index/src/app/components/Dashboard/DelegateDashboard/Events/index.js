import React from 'react';

import EventsHeader from './EventsHeader';
import EventsMainComponent from './components';
import './css/index.css'

const Events = () => {


    return (
        <div className='events-container p-0 m-0 h-100'>
            <div className='row events-header'>
                <EventsHeader/>
            </div>
            <div className='row events-component'>

                <EventsMainComponent/>
            </div>

        </div>
    );
}

export default Events;