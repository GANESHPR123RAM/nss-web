import React from 'react';


import DeadlinesHeader from './DeadlinesHeader';
import DeadlinesList from './DeadlinesList';


import './css/index.css'

const Deadlines = () => {

    
 


    return (
        <div className='deadlines-container p-0 m-0 h-100'>
            <div className='row deadlines-header'>
                <DeadlinesHeader/>
            </div>
            <div className='row deadlines-component'>
                <DeadlinesList/>
                
            </div>

        </div>
    );
}


export default Deadlines;