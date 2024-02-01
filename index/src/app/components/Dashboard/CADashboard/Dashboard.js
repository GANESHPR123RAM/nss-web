import React, {useState} from 'react';


import { useWidthAndHeight } from '../../../../hooks/useWidthAndHeight'
import DashboardWebView from '../DashboardWebView'
import DashboardMobileView from '../DashboardMobileView';

import isSelectedProfile from "./assets/isSelectedProfile.svg";
import isSelectedMyTasks from "./assets/isSelectedMyTasks.svg";
import isSelectedDeadlines from "./assets/isSelectedDeadlines.svg";
import isSelectedUpdates from "./assets/isSelectedUpdates.svg";
import isSelectedLeaderboard from "./assets/isSelectedLeaderboard.svg";

import isNotSelectedProfile from "./assets/isNotSelectedProfile.svg";
import isNotSelectedMyTasks from "./assets/isNotSelectedMyTasks.svg";
import isNotSelectedDeadlines from "./assets/isNotSelectedDeadlines.svg";
import isNotSelectedUpdates from "./assets/isNotSelectedUpdates.svg";
import isNotSelectedLeaderboard from "./assets/isNotSelectedLeaderboard.svg";

import '../Dashboardcss/index.css'

const CADashboard = () => {


    const options = [
        {
            componentName : "Profile",
            isSelectedIcon : isSelectedProfile,
            isNotSelectedIcon : isNotSelectedProfile
        },
        {
            componentName : "My Tasks",
            isSelectedIcon  : isSelectedMyTasks,
            isNotSelectedIcon : isNotSelectedMyTasks
        },
        {
            componentName : "Updates",
            isSelectedIcon  : isSelectedUpdates,
            isNotSelectedIcon : isNotSelectedUpdates
        },
        {
            componentName : "Deadlines",
            isSelectedIcon  : isSelectedDeadlines,
            isNotSelectedIcon : isNotSelectedDeadlines
        },
        {
            componentName : "Leaderboard",
            isSelectedIcon  : isSelectedLeaderboard,
            isNotSelectedIcon : isNotSelectedLeaderboard
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

export default CADashboard;