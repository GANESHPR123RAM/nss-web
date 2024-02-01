import React from "react";

import Header from './Header';
import EventContent from "./EventContent";

import './css/index.css'


const MobView = () => {
    return(
        <>
        <Header/>
        <div className="mob-container">
            <div className="row mob-header"
                style={{
                    height : '10%'
                }}
            >
                {/* <Header/> */}
            </div>
            <div className="row mob-content"
                style={{
                    height :'90%'
                }}
            >
                <EventContent/>
            </div>

        </div>
        </>
    )
}

export default MobView