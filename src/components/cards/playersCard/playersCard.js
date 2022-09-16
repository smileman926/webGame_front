import classes from "./playersCard.module.scss";

const PlayersCard = (props) => {
  return <div className={classes.container}>{props.children}</div>;
};

export default PlayersCard;
