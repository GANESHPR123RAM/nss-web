import React from "react";

import img1 from "./assets/img1.png";

import Member from "./components/Member";

import "./Members.css";

function ExecutiveBoard() {
  const data = [
    {
      id: 1,
      image: img1,
      name: "Sahil Kumar",
      position: "Design Head",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit ",
    },
    {
      id: 2,
      image: img1,
      name: "Sahil Kumar",
      position: "Design Head",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit ",
    },
    {
      id: 3,
      image: img1,
      name: "Sahil Kumar",
      position: "Design Head",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit ",
    },
    {
      id: 4,
      image: img1,
      name: "Sahil Kumar",
      position: "Design Head",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit ",
    },
    {
      id: 5,
      image: img1,
      name: "Sahil Kumar",
      position: "Design Head",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit ",
    },
    {
      id: 6,
      image: img1,
      name: "Sahil Kumar",
      position: "Design Head",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit ",
    },
  ];

  return (
    <div>
      <div className="executiveMembers">
        {data.map((element) => {
          return (
            <Member
              key={element.id}
              image={element.image}
              description={element.description}
              position={element.position}
              name={element.name}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ExecutiveBoard;
