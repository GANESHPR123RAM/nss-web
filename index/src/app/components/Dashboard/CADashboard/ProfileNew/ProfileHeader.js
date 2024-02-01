import React from 'react';
import './css/index.css'

const ProfileHeader = ({points}) => {
    return (
        <div className='profile-header-container p-0 m-2'
            style={{
                paddingBottom:'0.2rem'
            }}
        >
            <div className='row'>
                <div className='col-6'
                    style={{
                        fontFamily: 'Raleway',
                        fontStyle: 'normal',
                        fontWeight: 600,
                        fontSize: '2rem',
                        lineHeight: '2.5rem',

                        color: '#222222'

                    }}
                >
                    My Profile
                </div>
                <div className='col-6'>
                   <div className='row'>
                   <div className='col-9 current-points d-flex align-self-end justify-content-end'> Current Points : </div>
                    <div className='col-1 points d-flex justify-content-start'>{points}</div>
                   </div>

                </div>

            </div>

        </div>
    )
}

export default ProfileHeader;
