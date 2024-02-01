import React from 'react';

import './css/details.css'

const singleDetail = (detailName, detailValue) => {

    const color = detailName === 'CA Rank' ? '#663AA3' : '#444444';
    const weight = detailName === 'CA Rank' ? '600' : 'normal'

    return (
        <div className='row single-detail'>
                <div className='col-3'>{detailName}</div>
                <div className='col-1'> : </div>
                <div className='col-8'
                    style={{
                        color : `${color}`,
                        fontWeight : `${weight}`
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
