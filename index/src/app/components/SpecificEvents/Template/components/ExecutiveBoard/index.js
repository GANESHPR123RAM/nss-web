import React from 'react';

import SingleComponent from './SingleComponent';


import './css/ExecutiveBoard.css'

const ExecutiveBoard = ({data}) => {
    return (
        <div className='executive-board-container'>
            <div className='row executive-board-header d-flex justify-content-center'>Executive Board</div>

            <div className='row'>
               
                <div className="executiveMembers col-12">
            {
                data.map((ele)=> {
                    return(
                        <div className='col-12 col-sm-2' style={{ margin : '2rem'}}><SingleComponent ele={ele}></SingleComponent></div>
                        
                    )
                })
            }
        </div>
              
            </div>
        </div>
    )
}

export default ExecutiveBoard