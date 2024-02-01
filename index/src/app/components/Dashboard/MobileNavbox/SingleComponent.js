import React from 'react';

import './css/mobile-navbox.css'

const SingleComponent = ({componentName, selected}) =>{

    
    const backgroundColor = selected ? `#ff5349` : `#fafafa`;
    const fontColor = selected ? `#FFFFFF` : `#ff5349`

  
    
    return (
        <div className='mobile-single-component-container d-flex align-items-center justify-content-center'
            style={{
                backgroundColor : `${backgroundColor}`,
                color : `${fontColor}`
            }}
        >
           {componentName}
        </div>

       
    )
}

export default SingleComponent