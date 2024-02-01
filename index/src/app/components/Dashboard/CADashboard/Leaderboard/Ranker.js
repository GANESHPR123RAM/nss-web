import React from "react";
import profile from "./images/ProfilePhoto.svg";
import "./css/Ranker.css";

function Ranker(props) {
  return (
    <div className="rankerCard">
      <div className="profile">
        <img src={profile} alt="" />
      </div>
      <div className="rankerName">
      <h1>
          {props.name}{" "}
          {props.rank === 1 ? (
            <svg
              width="23"
              height="19"
              viewBox="0 0 23 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ marginLeft: "1rem" }}
            >
              <path
                d="M0 6.6682L3.7551 17.4399C9.29772 19.5484 12.4811 19.4915 18.3061 17.4399L23 6.6682L14.551 9.74583L11.2653 0L7.5102 9.74583L0 6.6682Z"
                fill="#FFDA3F"
              />
            </svg>
          ) : null}
        </h1>
        <h3>#Rank {props.rank}</h3>
      </div>
      <div className="points">
        <h2>{props.points} points</h2>
      </div>
    </div>
  );
}

export default Ranker;