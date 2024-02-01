import React from 'react';
import './css/index.css'

const TimelineHeader = () => {
    return (
        <div className='timeline-header-container p-0 m-2'
            style={{
                paddingBottom:'0.2rem'
            }}
        >
            <div className='row'>
                <div className='col-md-6'
                    style={{
                        fontFamily: 'Raleway',
                        fontStyle: 'normal',
                        fontWeight: 600,
                        fontSize: '2rem',
                        lineHeight: '2.5rem',

                        color: '#222222'

                    }}
                >
                    Timeline
                </div>
               
                
                
            </div>

        </div>
    )
}

export default TimelineHeader;
