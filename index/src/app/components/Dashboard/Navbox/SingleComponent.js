import React from 'react';

import './css/Navbox.css'

const SingleComponent = ({componentName, isSelectedIcon, isNotSelectedIcon, selected}) =>{



    const select = selected ? `isSelected` : `isNotSelected`;
    const selectClass = 'col-sm-8 ' + select 
    const icon = selected ? isSelectedIcon : isNotSelectedIcon

    return (
        <div className='single-component-container' style={{ height : '7.5vh'}}>
            <div className='row'>
                <div className='col-sm-3' style={{
                    backgroundImage : `url(${icon})`,
                    backgroundPosition : 'center',
                    backgroundSize : 'contain',
                    backgroundRepeat : 'no-repeat',
                    overflow : 'hidden',
                    margin : "0.4rem"
                }}>
                </div>
                <div className={selectClass}>
                    {componentName}
                </div>
              
                   
                </div>
            </div>

       
    )
}

export default SingleComponent