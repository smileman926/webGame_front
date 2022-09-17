import OldPaper from "../../components/oldPaper/oldPaper";
import PlayerSelecting from "../../components/players/playerSelecting";
import Totals from "../../components/decision/decision";
import classes from "./webGame.module.scss";
import React from "react";
import ConnectBtn from "../../components/connectBtn/connect-btn";

const WebGame = () => {
  return (
    <div className={classes.webGame}>
      <div className={classes.webGame__rowZero}>
        <ConnectBtn />
      </div>

      <div className={classes.webGame__rowOne}>
        <div className={classes.webGame__rowOne_colOne}>
          <Totals />
        </div>
        <div className={classes.webGame__rowOne_colTwo}>
          <OldPaper />
        </div>
      </div>
      <div className={classes.webGame__rowTwo}>
        <PlayerSelecting />
      </div>
    </div>
  );
};

export default WebGame;
