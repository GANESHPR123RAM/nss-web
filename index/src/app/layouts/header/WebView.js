import React, { useEffect, useState } from "react";
import Header from "./header";

const WebView = (props) => {
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
    <div
      className={
        !scrolled ? "th-header pe-5 ps-5" : "th-header pe-5 ps-5 th-header-bg"
      }
    >
      <Header width={props.width} />
    </div>
  );
};

export default WebView;