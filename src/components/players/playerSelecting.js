import classes from "./playerSelecting.module.scss";
import Players from "./utilities/players/players";

const PlayerSelecting = () => {
  return (
    <div className={classes.playerSelecting}>
      <Players />
    </div>
  );
};

export default PlayerSelecting;
