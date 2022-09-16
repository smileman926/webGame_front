import classes from "./players.module.scss";
import PlayersCard from "../../../cards/playersCard/playersCard";
import Button from "../../../buttons/button/button";

import GemImage from "../../../../assets/images/gem.png";

const Players = () => {
  const playersData = [
    ["p1", "Vladimir Putin", 5000],
    ["p2", "Micheal Saylor", 15000],
    ["p3", "Cz Binance", 25000],
    ["p4", "Elon Doge Musk", 200],
    ["p5", "Volodimir Zelsky", 2000],
    ["p6", "Alia Koca", 25000],
    ["p7", "Thomas", 700],
    ["p8", "King Abraham", 10],
    ["p9", "Yousef Al Luma", 20],
    ["p10", "Kindal Must", 1000],
    ["p11", "King of crypto", 100000],
    ["p12", "Billy Markus", 44000],
  ];

  const onAcceptButtonClick = (userId) => {
    console.log(userId + " Accepted");
  };
  return (
    <PlayersCard>
      <div className={classes.players}>
        <div className={classes.players__header}>
          <div className={classes.players__header_colOne}>
            <p>Players:</p>
          </div>
          <div className={classes.players__header_colTwo}>
            <p>Amount:</p>
          </div>
          <div className={classes.players__header_colThree}>
            <p>
              Total offers:{" "}
              {playersData && playersData.length > 0 ? playersData.length : "-"}
            </p>
          </div>
        </div>
        <div className={classes.players__content}>
          <div className={classes.players__content_col}>
            {playersData &&
              playersData.map((player, index) => {
                return (
                  <div
                    key={player[0]}
                    className={
                      index % 2 === 0
                        ? classes.players__content_col_greenRow
                        : classes.players__content_col_whiteRow
                    }
                  >
                    <div className={classes.players__content_col_whiteRow_name}>
                      <p>{player[1]}</p>
                    </div>
                    <div
                      className={classes.players__content_col_whiteRow_amount}
                    >
                      <img src={GemImage} alt="gem"></img>
                      <p>{player[2].toLocaleString()}</p>
                    </div>
                    <div
                      className={classes.players__content_col_whiteRow_action}
                    >
                      <Button
                        onClick={() => {
                          onAcceptButtonClick(player[0]);
                        }}
                        color="var(--color-green-3)"
                      >
                        ACCEPT
                      </Button>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </PlayersCard>
  );
};

export default Players;
