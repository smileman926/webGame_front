import { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import React from "react";
import { useState } from "react";
import { createGame } from "../../chain/hooks/useBattleContractFunctions";
import useBattleContract from "../../chain/hooks/useBattleContract";
import Button from "../buttons/button/button";
import classes from "./decision.module.scss";
import { LoadingSpinner } from "../loading-spinner/loading-spinner";

const Decision = () => {
  const Battle = useBattleContract();
  const { account } = useWeb3React<Web3Provider>();
  const [betLimit, setBetLimit] = useState(9);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onCreateGameClicked = async () => {
    if (Battle && account) {
      setIsLoading(true);
      try {
        await createGame(Battle, betLimit, account);
        setIsLoading(false);
      } catch (e) {
        setIsLoading(false);
      }
    }
  };
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
          onChange={(e) => setBetLimit(Number(e.target.value))}
        ></input>
      </div>
      {isLoading ? (
        LoadingSpinner()
      ) : (
        <Button
          onClick={() => {
            onCreateGameClicked();
          }}
          color="var(--color-green-3)"
        >
          Create Game
        </Button>
      )}
    </div>
  );
};

export default Decision;
