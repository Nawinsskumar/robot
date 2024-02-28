//explain Code:
/*
robotMoves: Responsible for updating the direction of the robot.
handleMoves: Responsible for updating the position of the robot.
print the current position of the robot.
all results are printed in console.
*/

import React, { useState } from "react";

const App = () => {
  const [position, setPosition] = useState({ x: null, y: null });
  const [direction, setDirection] = useState("");

  const handleMoves = (cmd) => {
    const [action, args] = cmd.split(" ");
    switch (action) {
      case "PLACE":
        const [x, y, move] = args.split(",");
        setPosition({ x: parseInt(x), y: parseInt(y) });
        setDirection(move);
        break;
      case "MOVE":
        moveRobot();
        break;
      case "LEFT":
        robotMoves("LEFT");
        console.log("Robot rotated left");
        break;
      case "RIGHT":
        robotMoves("RIGHT");
        console.log("Robot rotated right");
        break;
      case "REPORT":
        console.log(
          `Current position: ${position.x},${position.y},${direction}`
        );
        break;
      default:
        console.log("Invalid command");
    }
  };

  const robotMoves = (robotDirection) => {
    const directions = ["NORTH", "EAST", "SOUTH", "WEST"];
    const currentIndex = directions.indexOf(direction);
    let newIndex;
    if (robotDirection === "LEFT") {
      newIndex = (currentIndex + 3) % 4;
    } else {
      newIndex = (currentIndex + 1) % 4;
    }
    setDirection(directions[newIndex]);
  };

  return (
    <div>
      <button onClick={() => handleMoves("LEFT")}> Left</button>
      <button onClick={() => handleMoves("RIGHT")}> Right</button>
      <button onClick={() => handleMoves("REPORT")}>Report Dimension</button>
    </div>
  );
};

export default App;
