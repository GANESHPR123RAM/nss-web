import React from 'react'

import Template from '../Template';

import {header, subEventsList, perks} from './data'

const PolicyCase = () => {



    return(
        <div>
            <Template 
                header={header}
                subEventsList={subEventsList} 
                perks={perks}
                />
        </div>
    )

}

export default PolicyCase