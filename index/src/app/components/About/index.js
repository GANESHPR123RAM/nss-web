import React from "react";
import OurStory from "./OurStory";
import Header from "../../layouts/header/index";
import AboutUsWeb from "./aboutUsWeb";
import { useWidthAndHeight } from "../../../hooks/useWidthAndHeight";
import AboutUsMob from "./AboutUsMobile";


function About() {
  const [width] = useWidthAndHeight();
  return (
    <>
  <React.Fragment>
      <Header/>
      {width > 1150 ? <AboutUsWeb /> : <AboutUsMob />}
    </React.Fragment>
      </>
     
 

);
}
export default About;