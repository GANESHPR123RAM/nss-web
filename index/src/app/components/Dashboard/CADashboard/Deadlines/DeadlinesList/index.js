import React from 'react';

import MobileDeadlinesList from './MobileDeadlinesList';
import WebDeadlinesList from './WebDeadlinesList';


import { useWidthAndHeight } from '../../../../../../hooks/useWidthAndHeight'

const Deadlines = () => {

    let windowSize = useWidthAndHeight();
    let width = windowSize[0];

    return (
        <div>
            {
            
                    (width > 1150) ?
                    <WebDeadlinesList />
                    :
                    <MobileDeadlinesList/>
            
            }
        </div>
    )
}

export default Deadlines