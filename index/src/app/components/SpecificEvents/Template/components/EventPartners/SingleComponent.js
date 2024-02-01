import React from 'react';

import './css/SingleComponent.css'

const SingleComponent = ({ele}) => {
    return(
        <div className='event-partner-card-container'
                style={{
                    height :'100%',
                    width :'100%',
                    backgroundImage : `url(${ele.image})`,
                    backgroundSize : 'cover',
                    backgroundPosition : 'center',
                    backgroundRepeat : 'no-repeat'
                }}
        ></div>
    )
}

export default SingleComponent;