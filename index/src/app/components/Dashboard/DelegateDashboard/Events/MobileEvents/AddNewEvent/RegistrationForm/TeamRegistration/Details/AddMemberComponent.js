import React from 'react';
import "./css/AddMemberComponent.css"

import Plus from './images/Plus.svg'

const AddMemberComponent = ({name}) => {
    return(
        <div className='mobile-add-member-component-container'>
            <div className='row d-flex justify-content-between' style={{ width : '100%'}}>
            <div className='col-2' style={{
                   
                   backgroundImage : `url(${Plus})`,
                   backgroundSize : 'contain',
                   backgroundPosition : 'center',
                   backgroundRepeat : 'no-repeat'
               }}></div>
                <div className='col-9'>{name}</div>
                
            </div>

        </div>
    )
}

export default AddMemberComponent;