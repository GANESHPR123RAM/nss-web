import React from 'react';

import ExecutiveBoard from './components/ExecutiveBoard';
import Committees from './components/Committees';
import Perks from './components/Perks';
import EventPartners from './components/EventPartners';
import Header from './components/Header';
import Carousel from './components/Carousel/Events/index'
import SubEventsList from './components/SubEventsList';

import { useWidthAndHeight } from '../../../../hooks/useWidthAndHeight';

const Template = ({header, subEventsList, executiveBoard, committees, perks, eventPartners}) => {

    let windowSize = useWidthAndHeight();
    let width = windowSize[0];

    const fontSize = (width > 1150) ? '1.2rem' : '0.9rem'
    const margin = (width > 1150) ? '2rem' : '0.6rem'
    const padding = (width > 1150) ? '1rem 2rem' : '0.5rem 0.3rem'
    const widthContainer = (width > 1150) ? '44%' : '100%'
    
    const style = {
        fontSize,
        margin,
        padding,
        widthContainer
    }

    /*
     <div>
            <Header/>
            <SubEventsList/>
            <ExecutiveBoard/>
            <Committees/>
            <Perks/>
            <EventPartners/>
            <Carousel width ="1500"/>

        </div>
    */

    /*
    {header ? <Header/> : null}
            {subEventsList ? <SubEventsList/> : null}
            {executiveBoard ? <ExecutiveBoard/> : null}
            {committees ? <Committees/> : null}
            {perks ?<Perks/> : null}
            {eventPartners ? <EventPartners/> : null}
            <Carousel width="1500"/>
    */
    return(
        <div>
            {header ? <div style={{ marginBottom :'10rem'}}><Header style={style} data={header} /></div> : null}
            {subEventsList ? <div style={{ marginBottom :'10rem'}}><SubEventsList style={style} data={subEventsList} /></div> : null}
            {executiveBoard ? <div style={{ marginBottom :'10rem'}}><ExecutiveBoard style={style} data={executiveBoard} /></div> : null}
            {committees ? <div style={{ marginBottom :'10rem'}}> <Committees style={style} data={committees} /> </div>: null}
            {perks ?<div style={{ marginBottom :'10rem'}}><Perks style={style} data={perks} /> </div>: null}
            {eventPartners ? <div style={{ marginBottom :'10rem'}}><EventPartners style={style} data={eventPartners} /></div> : null}
            <div style={{ marginBottom :'10rem'}}><Carousel style={style} width={width}/></div>

        </div>
       
    )
}

export default Template