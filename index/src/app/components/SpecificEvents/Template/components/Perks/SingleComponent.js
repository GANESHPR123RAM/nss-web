import React from 'react';

import './css/SingleComponent.css'

const SingleComponent = ({ele}) => {
    return(
        <div>
            <ul>
                <li>{ele.description}</li>
            </ul>
        </div>
    )
}

export default SingleComponent;