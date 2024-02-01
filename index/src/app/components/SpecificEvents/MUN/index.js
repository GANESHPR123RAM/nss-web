
import React from 'react'

import Template from '../Template'

import {header, committees, executiveBoard} from './data'

const MUN = () => {

    return(
        <div>
            <Template
                header={header}
                committees={committees}
                executiveBoard={executiveBoard}
            />
        </div>
    )

}

export default MUN

