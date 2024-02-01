import React from 'react';
import Cross from './images/participantCross.svg'
import "./css/SingleMemberComponent.css"

const SingleMemberComponent = ({name, remove, index}) => {
    return(
        <div className='mobile-single-member-component-container'>
            <div className='row d-flex justify-content-between' style={{ width : '100%'}}>
                <div className='col-5'>{name}</div>
                <div className='col-6' style={{
                   
                    backgroundImage : `url(${Cross})`,
                    backgroundSize : 'contain',
                    backgroundPosition : 'center',
                    backgroundRepeat : 'no-repeat'
                }}
                    onClick={() => {
                        console.log("clicked", remove)
                        if(index) remove(index)
                        else remove()
                    }}
                ></div>
            </div>

        </div>
    )
}

export default SingleMemberComponent