import React from "react";
import { useWidthAndHeight } from "../../../hooks/useWidthAndHeight";
import SidebarMob from "./SidebarMob";
import SidebarWeb from "./SidebarWeb";

const SideDrawer = (props) => {
  let [width] = useWidthAndHeight();
  return (
    <div>
      {width > 1150 ? (
        <SidebarWeb show={props.show} clicked={props.clicked} width={width} />
      ) : (
        <SidebarMob show={props.show} clicked={props.clicked} width={width} />
      )}
    </div>
  );
};

export default SideDrawer;