import React from 'react';

import SingleComponent from './SingleComponent';

import './css/mobile-navbox.css'
const MobileNavbox = ({options, selectedIndex, onComponentClick}) => {

    return(
        <div className="container slide-me">
            {
                options.map((element, index) =>{
               
                    return(
                        <div className="row card-component" id={index} onClick={()=>{
                            onComponentClick(index);
                        }}>
                            <SingleComponent componentName={element.componentName} selected={selectedIndex===index}></SingleComponent>
                        </div>
                        
                    )
                })
            }

        </div>
    );
}

export default MobileNavbox;