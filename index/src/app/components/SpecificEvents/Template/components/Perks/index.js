import React from 'react';

import SingleComponent from './SingleComponent';

//import data from './data'

import './css/Perks.css'

const Perks = ({data}) => {
    return (
        <div className='perks-container'>
            <div className='perks-container-header'>Perks</div>
            <div className='perks-list-container'>
            {
                data.map((ele)=> {
                    return(
                        <SingleComponent ele={ele}></SingleComponent>
                    )
                })
            }
            </div>
        </div>
    )
}

export default Perks