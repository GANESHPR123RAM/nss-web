import React from 'react'

import Template from '../Template';

import {header, subEventsList} from './data'

const CaseStudy = () => {



    return(
        <div>
            <Template 
                header={header}
                subEventsList={subEventsList} 
                />
        </div>
    )

}

export default CaseStudy