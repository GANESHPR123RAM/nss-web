import React from "react";

import "./css/SingleComponent.css";

const SingleComponent = ({ ele, style }) => {
  const { fontSize, padding, margin, widthContainer } = style;

  return (
    <div className="committee-card" style={{ width: `${widthContainer}` }}>
      <div
        className="committee-card-image"
        style={{
          height: "40%",
          width: "100%",
          backgroundImage: `url(${ele.image})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="committee-card-description" style={{ height: "40%" }}>
        <p style={{ fontSize: `${fontSize}` }}>{ele.description}</p>
      </div>

      <div className="committee-card-buttons d-flex" style={{ height: "15%" }}>
        <div className="button" style={{ cursor: "pointer" }}>
          <a
            href={`${ele.button1Link}`}
            target="_blank"
            rel="noreferrer"
            style={{
              fontSize: `${fontSize}`,
              padding: `${padding}`,
              margin: `${margin}`,
            }}
          >
            {ele.button1Name}
          </a>
        </div>
        <div className="button" style={{ cursor: "pointer" }}>
          <a
            href={`${ele.button2Link}`}
            target="_blank"
            rel="noreferrer"
            style={{
              fontSize: `${fontSize}`,
              padding: `${padding}`,
              margin: `${margin}`,
            }}
          >
            {ele.button2Name}
          </a>
        </div>
      </div>
    </div>
  );
};

export default SingleComponent;
