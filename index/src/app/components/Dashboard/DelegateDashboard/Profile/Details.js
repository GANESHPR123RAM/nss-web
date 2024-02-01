import React from 'react';

import './css/details.css'

const singleDetail = (detailName, detailValue) => {

    
    return (
        <div className='row d-flex flex-row single-detail'>
                <div className='col-3'>{detailName}</div>
                <div className='col-1'> : </div>
                <div className='col-8'
                    style={{
                        color : '#444444',
                        fontWeight : 'normal'
                    }}
                
                >{detailValue}</div>
          </div>
    )
}

const Details = ({details}) => {
    return(
        <div className='details-component'>
            {
                details.map((ele) => {
                    if(ele.detailValue){
                        return singleDetail(ele.detailName, ele.detailValue)
                    }
                    else return ''
                    
                })
            }

        </div>
    )
}

export default Details;
