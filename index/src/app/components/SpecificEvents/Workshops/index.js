import React from 'react'

import Template from '../Template';

import {header, subEventsList} from './data'

const Workshop = () => {



    return(
        <div>
            <Template 
                header={header}
                subEventsList={subEventsList} 
                
                />
        </div>
    )

}

export default Workshop