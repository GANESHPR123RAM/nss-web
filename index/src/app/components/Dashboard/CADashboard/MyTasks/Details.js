import React from "react";

import "./css/details.css";

const singleDetail = (detailName, detailValue) => {
  const color = detailName === "Points to gain" ? "#663AA3" : "#444444";
  const weight = detailName === "Points to gain" ? "600" : "normal";

  return (
    <div className="row single-detail">
      <div className="col-3">{detailName}</div>
      <div className="col-1"> : </div>
      <div
        className="col-8"
        style={{
          color: `${color}`,
          fontWeight: `${weight}`,
        }}
      >
        {detailValue}
      </div>
    </div>
  );
};

const Details = ({ tasks, index }) => {
  const getMonth = (month) => {
    if (month === "01") return "Jan";
    else if (month === "02") return "Feb";
    else if (month === "03") return "Mar";
    else if (month === "04") return "Apr";
    else if (month === "05") return "May";
    else if (month === "06") return "Jun";
    else if (month === "07") return "Jul";
    else if (month === "08") return "Aug";
    else if (month === "09") return "Sep";
    else if (month === "10") return "Oct";
    else if (month === "11") return "Nov";
    else if (month === "12") return "Dec";
  };

  const convertDate = (date) => {
    const d = date?date.split("T")[0]:0;
    const use = d?d.split("-"):0;
    if (use) {
      const month = getMonth(use[1]);
      const day = use[2];
      const year = use[0];

      const finalDate = `${day} ${month} ${year}`;

      return finalDate;
    }
  };

  const issuedDate = convertDate(tasks[index]?tasks[index].issuedDate:null);
  const deadlineDate = convertDate(tasks[index]?tasks[index].deadlineDate:null);

  const details = [
    {
      detailName: `Task #${index + 1}`,
      detailValue: tasks[index]?tasks[index].description:null,
    },
    {
      detailName: "Date Issued",
      detailValue: issuedDate,
    },
    {
      detailName: "Deadline",
      detailValue: deadlineDate,
    },
    {
      detailName: "Points to gain",
      detailValue: `${tasks[index]?tasks[index].totalPoints:null} points (${tasks[index]?tasks[index].eachPoints:null} each)`,
    }
  ];

  return (
    <div className="details-component">
      {details.map((ele) => {
        return singleDetail(ele.detailName, ele.detailValue);
      })}
    </div>
  );
};

export default Details;
