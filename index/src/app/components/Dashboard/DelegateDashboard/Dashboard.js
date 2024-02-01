import React, {useState} from 'react';


import { useWidthAndHeight } from '../../../../hooks/useWidthAndHeight'
import DashboardWebView from '../DashboardWebView'
import DashboardMobileView from '../DashboardMobileView';

import isSelectedProfile from "./assets/isSelectedProfile.svg";
import isSelectedEvents from "./assets/isSelectedEvents.svg";
import isSelectedPayment from "./assets/isSelectedPayment.svg";
import isSelectedUpdates from "./assets/isSelectedUpdates.svg";
import isSelectedTimeline from "./assets/isSelectedTimeline.svg";

import isNotSelectedProfile from "./assets/isNotSelectedProfile.svg";
import isNotSelectedEvents from "./assets/isNotSelectedEvents.svg";
import isNotSelectedPayment from "./assets/isNotSelectedPayment.svg";
import isNotSelectedUpdates from "./assets/isNotSelectedUpdates.svg";
import isNotSelectedTimeline from "./assets/isNotSelectedTimeline.svg";

import '../Dashboardcss/index.css'


const DelegateDashboard = () => {


    const options = [
        {
            componentName : "Profile",
            isSelectedIcon : isSelectedProfile,
            isNotSelectedIcon : isNotSelectedProfile
        },
        {
            componentName : "Events",
            isSelectedIcon  : isSelectedEvents,
            isNotSelectedIcon : isNotSelectedEvents
        },
        {
            componentName : "Updates",
            isSelectedIcon  : isSelectedUpdates,
            isNotSelectedIcon : isNotSelectedUpdates
        },
        {
            componentName : "Timeline",
            isSelectedIcon  : isSelectedTimeline,
            isNotSelectedIcon : isNotSelectedTimeline
        },
        {
            componentName : "Payment",
            isSelectedIcon  : isSelectedPayment,
            isNotSelectedIcon : isNotSelectedPayment
        }
       

    ]

    const [selectedIndex, setSelectedOption] = useState(0);

    const onNavboxClick = (optionIndex) =>{
       
        setSelectedOption(optionIndex);

    }

    let windowSize = useWidthAndHeight();
    let width = windowSize[0];
  

    return (
        <div className='body-container'>
            {
            (width > 1150) ?
            <DashboardWebView options={options} selectedIndex={selectedIndex} onNavboxClick = {onNavboxClick}></DashboardWebView>
            :
            <DashboardMobileView options={options} selectedIndex={selectedIndex} onNavboxClick = {onNavboxClick}></DashboardMobileView>
        }
       
        </div>
    )
}

export default DelegateDashboard;