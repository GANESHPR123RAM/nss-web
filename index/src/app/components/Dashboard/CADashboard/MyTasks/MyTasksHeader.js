import React from 'react';
import './css/index.css'

const MyTasksHeader = () => {
    return (
        <div className='mytasks-header-container p-0 m-2'
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
                    My Tasks
                </div>
                <div className='mytasks-header-meta'>
                <div className='col-md-6'
                    style={{
                        fontFamily: 'Inter',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        fontSize: '1rem',
                        lineHeight: '1.2rem',

                        color: '#AAAAAA'

                    }}
                >
                   Complete the following tasks
                </div>
                </div>
                
            </div>

        </div>
    )
}

export default MyTasksHeader;
