import React from "react";
import "./css/Item.css";

function Item({day, month, taskNumber, name}) {
  return (
    <div className="itemCard">
      <div className="dateBlock">
        <h1>{day}</h1> {/* Date */}
        <h2>{month}</h2> {/* Month */}
      </div>
      <div className="tasks">
        <h1>Task {taskNumber}</h1>
        <p>{name}</p>
      </div>
    </div>
  );
}

export default Item;