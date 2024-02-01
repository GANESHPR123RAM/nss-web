import React from "react";
import PartnerWeb from "./WebView";
import PartnerMob from "./MobView";
import { useWidthAndHeight } from "../../../hooks/useWidthAndHeight";

const Events = () => {
  let windowSize = useWidthAndHeight();
  let width = windowSize[0];
  console.log(width);

  return (
    <React.Fragment>
      {width > 1150 ? <PartnerWeb /> : <PartnerMob />}
    </React.Fragment>
  );
};

export default Events;
