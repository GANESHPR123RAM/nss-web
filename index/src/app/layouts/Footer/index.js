import React from "react";
import { useWidthAndHeight } from "../../../hooks/useWidthAndHeight";
import ContactUs from "./ContactUs"
import FooterMobileView from "./FooterMobileView";
const FooterHome = () => {
  const [width] = useWidthAndHeight();

  return (
    <React.Fragment>
      {width > 1150 ? <ContactUs width={width} /> : <FooterMobileView width={width} />}
    </React.Fragment>
  );
};

export default FooterHome;