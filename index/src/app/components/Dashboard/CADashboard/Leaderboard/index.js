import React from 'react';

import LeaderboardHeader from './LeaderboardHeader';
import LeaderboardList from './LeaderboardList';

import './css/index.css'

const Leaderboard = () => {


    return (
        <div className='leaderboard-container p-0 m-0 h-100'>
            <div className='row leaderboard-header'>
                <LeaderboardHeader/>
            </div>
            <div className='row leader-component'>
                <LeaderboardList/>
                
            </div>

        </div>
    );
}

export default Leaderboard;