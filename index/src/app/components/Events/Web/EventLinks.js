import React, { useContext, useState } from "react";
import { useEffect } from "react";
import DataContext from "../../../../DataContext";
import "./css/EventLinks.css";


function EventLinks() {
// const [style, setStyle]= useState("Homes")
// const{scroll, setScroll} = useContext(DataContext)

// function getScrollPercent() {
//   var h = document.documentElement,
//     b = document.body,
//     st = "scrollTop",
//     sh = "scrollHeight";

//   var scrollPercent = Math.round(
//     ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100
//   );

//   setScroll(isNaN(scrollPercent) ? "" : scrollPercent);
// }

// React.useEffect(() => {
//   window.addEventListener("scroll", getScrollPercent);

//   return () => {
//     window.removeEventListener("scroll", getScrollPercent);
//   };
// }, []);
// getScrollPercent();
// useEffect(()=>{
//   if(scroll>=0 && scroll<10){
//     setStyle("Homes")
  

// }
//   if(scroll>=10 && scroll<18){
//     setStyle("MUN")
  

// }
// if(scroll>=18 && scroll<28){
//   setStyle("Sociothon")

// }
// if(scroll>=28 && scroll<37){
//   setStyle("policyCase")

// }
// if(scroll>=37 && scroll<46){
//   setStyle("Innovision")

// }
// if(scroll>=46 && scroll<55){
//   setStyle("caseStudy")


// }
// if(scroll>=55 && scroll<64){
//   setStyle("Workshop")


// }
// if(scroll>=64 && scroll<74){
//   setStyle("Abhi")


// }
// if(scroll>=74 && scroll<84){
//   setStyle("Turncoat")


// }
// if(scroll>=84 && scroll<93){
//   setStyle("Thunt")


// }
// if(scroll>=93){
//   setStyle("Presummit")


// }
// })
// function scrollYByVh() {
//   const clientHeight = document.body.clientHeight;
//   window.scrollBy(0, clientHeight);
// }
// scrollYByVh();
// let pageHeight = window.innerHeight;
// window.scrollBy(0, 100);
  return (
    <>
      {/* <div className="eventMain">
        <div className="e-left">

          <a href="#1" 
         className={
          style=="Homes" ? 
          "home" : "nothome"
         }
        onClick={()=>{
          setStyle("Homes")
        }}
          >Action Plan</a>
          <a href="#2"
          className={
            style=="MUN" ? 
            "home" : "notmun"
           }
          onClick={()=>{
            setStyle("MUN")
          }}
          >Model United Nations(MUN)</a>
          <a href="#4"
          className={
            style=="Sociothon" ? 
            "sociothon" : "nosociothon"
           }
          onClick={()=>{
            setStyle("Sociothon")
          }}>Sociothon</a>
          <a href="#5"
          className={
            style=="policyCase" ? 
            "policycase" : "nopolicycase"
           }
          onClick={()=>{
            setStyle("policyCase")
          }}>Policy Case Competition</a>
          <a href="#6"
          className={
            style=="Innovision" ? 
            "innovision" : "notinnovision"
           }
          onClick={()=>{
            setStyle("Innovision")
          }}>Work Presentation</a>
          <a href="#7"
          className={
            style=="caseStudy" ? 
            "casestudy" : "nocasestudy"
           }
          onClick={()=>{
            setStyle("caseStudy")
          }}>Case Study</a>
          <a href="#8"
          className={
            style=="Workshop" ? 
            "workshop" : "notworkshop"
           }
          onClick={()=>{
            setStyle("Workshop")
          }}>Workshops</a>
          <a href="#9"
          className={
            style=="Abhi" ? 
            "abhi" : "notabhi"
           }
          onClick={()=>{
            setStyle("Abhi")
          }}>Nukkad Natak</a>
          <a href="#10"
          className={
            style=="Turncoat" ? 
            "turncoat" : "notturncoat"
           }
          onClick={()=>{
            setStyle("Turncoat")
          }}>Debate</a>
          <a href="#11"
          className={
            style=="Thunt" ? 
            "hunt" : "notthunt"
           }
          onClick={()=>{
            setStyle("Thunt")
          }}>Treasure Hunt</a>
          <a href="#12"
          className={
            style=="Presummit" ? 
            "summit" : "notsummit"
           }
          onClick={()=>{
            setStyle("Presummit")
          }}>Pre Summit Events</a>
        </div>

      </div>

      {/* <div className="mobileView">
        <DropDown></DropDown>
      </div> */} 
    </>
  );
}

export default EventLinks;
