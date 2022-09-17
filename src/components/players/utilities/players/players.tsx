import classes from "./players.module.scss";
import PlayersCard from "../../../cards/playersCard/playersCard";
import Button from "../../../buttons/button/button";

import GemImage from "../../../../assets/images/gem.png";
import React, { useEffect, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import {
  getAllActive,
  getGame,
} from "../../../../chain/hooks/useBattleContractFunctions";
import useBattleContract from "../../../../chain/hooks/useBattleContract";
import { BigNumber } from "ethers";
import { GameType } from "../../../../chain/types/game.type";

const Players = () => {
  const { account } = useWeb3React<Web3Provider>();
  const Battle = useBattleContract();
  const [refresh, setRefresh] = useState(false);
  const [allGames, setAllGames] = useState<GameType[]>([]);
  useEffect(() => {
    if (account && Battle) {
      getAllActiveGames();
    }
  }, [Battle, account, refresh]);

  const getAllActiveGames = async () => {
    const allGames = await getAllActive(Battle!, account!);

    console.log("allGames", allGames);
    const gamesDetails: GameType[] = [];
    for await (const item of allGames) {
      const gameDetails = await getGame(Battle!, item, account!);
      gamesDetails.push(gameDetails!);
    }
    console.log("gamesDetails", gamesDetails);
    setAllGames(gamesDetails);
  };

  const onAcceptButtonClick = (game: GameType) => {
    joinGame(game);
  };

  const joinGame = async (game: GameType) => {
    const join = await joinGame(game);
    setRefresh(!refresh);
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
              {allGames && allGames.length > 0 ? allGames.length : "-"}
            </p>
          </div>
        </div>
        <div className={classes.players__content}>
          <div className={classes.players__content_col}>
            {allGames &&
              allGames.map((player, index) => {
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
                      <p>{player.state}</p>
                    </div>
                    <div
                      className={classes.players__content_col_whiteRow_amount}
                    >
                      <img src={GemImage} alt="gem"></img>
                      <p>{player.stakes}</p>
                    </div>
                    <div
                      className={classes.players__content_col_whiteRow_action}
                    >
                      <Button
                        onClick={() => {
                          onAcceptButtonClick(player);
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
