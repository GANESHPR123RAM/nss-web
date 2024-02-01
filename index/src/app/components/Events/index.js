import React from "react";
import EventsWeb from "./Web/WebView";
import EventsMob from "./Mobile/MobView";
import { useWidthAndHeight } from "../../../hooks/useWidthAndHeight";
import Header from "../../layouts/header/index";

const Events = () => {
  const [width] = useWidthAndHeight();

  return (
    <React.Fragment>
      <Header/>
      {width > 1150 ? <EventsWeb /> : <EventsWeb />}
    </React.Fragment>
  );
};

export default Events;
