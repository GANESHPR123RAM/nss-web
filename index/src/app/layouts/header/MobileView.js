import React, { useEffect, useState } from "react";
import Header from "./header";

const MobileView = (props) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 5) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  return (
    <div className={!scrolled ? "th-header" : "th-header th-header-bg"}>
      <Header width={props.width} />
    </div>
  );
};

export default MobileView;