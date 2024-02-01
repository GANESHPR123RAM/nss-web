import React from 'react'

import Template from '../Template';

import {header, perks} from './data'

const CaseStudy = () => {



    return(
        <div>
            <Template 
                header={header}
                perks={perks} 
                />
        </div>
    )

}

export default CaseStudy