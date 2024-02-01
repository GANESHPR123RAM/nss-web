import React from "react";
import { Link } from "react-router-dom";

import "./ImageComponent.css";

function ImageComponent(props) {
  const width = props.width ? props.width : "16rem";
  const height = props.height ? props.height : "12rem";

  return (
    <div className="partner" style={{ padding: "0.6rem" }}>
      <a
        className="imageContainer"
        href={props.link}
        target="_blank"
        without
        rel="noreferrer"
      >
        <div
          style={{
            width: `${width}`,
            height: `${height}`,
            backgroundImage: `url(${props.image})`,
            zIndex:"10",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></div>
      </a>

      <h1 className="partnerType">{props.title}</h1>
    </div>
  );
}

export default ImageComponent;

