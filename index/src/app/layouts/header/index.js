import React from "react";
import HeaderWeb from "./WebView";
import HeaderMob from "./MobileView";
import { useWidthAndHeight } from "../../../hooks/useWidthAndHeight";

const HeaderHome = () => {
  const [width] = useWidthAndHeight();

  return (
    <React.Fragment>
      {width > 1150 ? <HeaderWeb width={width} /> : <HeaderMob width={width} />}
    </React.Fragment>
  );
};

export default HeaderHome;