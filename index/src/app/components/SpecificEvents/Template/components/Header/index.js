import React from 'react'
import backgroundTop from "../../../images/backgroundTop.png";
//import SocioContent from "./SocioContent";
import "./css/Header.css";
import socioimage from "./../../../Sociothon.svg";

//import data from './data'

const Header = ({data}) => {
  
  return (
    <>
    <div className="header-component">
      <div
        style={{
          backgroundImage: `url(${backgroundTop})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "375px",
          overflowX:'hidden'
        }}
      ></div>
      <div className="th-event-sociothon-top">
        <div className="th-Sociothon-contain">
          <div className="th-event-sociothon-top1">
            <h2>{data.eventName}</h2>
            <p>{data.eventInfo}</p>
            <div className="th-event-sociothon-top1-content">
              {data.eventDescription}
            </div>
            <div className="th-event-sociothon-top1-links">
              <a href="https://socialsummit.iitr.ac.in/dashboard" target="_blank" rel="noreferrer">Register &gt; </a>
              {data.rulebook? <a href={`${data.rulebook}`} target="_blank" rel="noreferrer">Rulebook &gt;</a>:null}
              {data.form ? <a href={`${data.form}`} target="_blank" rel="noreferrer" >Country Preference Form &gt;</a> : null}
            </div>
          </div>
          <div className="th-event-sociothon-top2">
            <div className="th-event-sociothon-top2-imagecontainer">
              <img className="th-event-sociothon-top2-image" src={data.image} />
            </div>
            {data.prizeWorth ? <h2>
              Prize Worth :{" "}
              <span style={{ color: "#663AA3", fontSize: "2rem" }}>{data.prizeWorth}</span>
            </h2>: null}
          </div>
        </div>
      </div>

      <div className="th-event-sociothon-tops">
        <div>
          <div className="th-event-sociothon-top1">
            <h2>{data.eventName}</h2>
            <p>{data.eventInfo} </p>
            <div className="th-event-sociothon-top2-imagecontainer">
              <img className="th-event-sociothon-top2-image" src={data.image} />
            </div>
            <div className="th-event-sociothon-top1-content">
              {data.eventDescription}
            </div>

            {
              data.prizeWorth ? <h2 className="th-event-sociothon-prize">
              Prize Worth :{" "}
              <span style={{ color: "#663AA3", fontSize: "1.8rem" }}>{data.prizeWorth}</span>
            </h2>:null
            }
            <div className="th-event-sociothon-top1-links">
              <a href="https://socialsummit.iitr.ac.in/dashboard" target="_blank" rel="noreferrer">Register &gt; </a>
              {data.rulebook? <a href={`${data.rulebook}`} target="_blank" rel="noreferrer">Rulebook &gt;</a>:null}
              {data.form ? <a href={`${data.form}`} target="_blank" rel="noreferrer">Country Preference Form &gt;</a> : null}
            </div>
          </div>
        </div>
      </div>
      <div>
        
      </div>
      {/* <div><Event /></div> */}
    </div>
    </>
  );
}

export default Header