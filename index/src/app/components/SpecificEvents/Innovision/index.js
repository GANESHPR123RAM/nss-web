import React from 'react'

import Template from '../Template';

import {header, perks} from './data'

const Innovision = () => {



    return(
        <div>
            <Template 
                header={header}
                perks={perks}
                />
        </div>
    )

}

export default Innovision