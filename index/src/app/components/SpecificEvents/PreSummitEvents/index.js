import React from 'react'

import Template from '../Template'

import {header, subEventsList} from './data'

const PreSummitEvents = () => {

    return(
        <div>
            <Template
                header={header}
                subEventsList ={subEventsList}
            />
        </div>
    )

}

export default PreSummitEvents