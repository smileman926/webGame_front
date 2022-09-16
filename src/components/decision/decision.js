import { useState } from "react";
import classes from "./decision.module.scss";

const Decision = () => {
  const [betLimit, setBetLimit] = useState();

  const dificultyStates = [
    ["EASY", 9, 101],
    ["MEDIUM", 100, 1001],
    ["HARD", 1000, 10001],
  ];

  return (
    <div className={classes.decision}>
      <div className={classes.decision__title}>
        <div className={classes.decision__title_text}>MAKE A DECISION</div>
      </div>
      <div className={classes.decision__dificulty}>
        {dificultyStates &&
          dificultyStates.map((item) => {
            return (
              <div
                key={item[0]}
                className={
                  betLimit > item[1] && betLimit < item[2]
                    ? classes.decision__dificulty_activeRow
                    : classes.decision__dificulty_row
                }
              >
                {item[0]}
              </div>
            );
          })}
      </div>
      <div className={classes.decision__input}>
        <input
          type="number"
          onChange={(e) => setBetLimit(e.target.value)}
        ></input>
      </div>
    </div>
  );
};

export default Decision;
