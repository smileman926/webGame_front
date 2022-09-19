import classes from "./players.module.scss";
import PlayersCard from "../../../cards/playersCard/playersCard";

import React, { useEffect, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import {
  getAllActive,
  getGame,
} from "../../../../chain/hooks/useBattleContractFunctions";
import useBattleContract from "../../../../chain/hooks/useBattleContract";
import { GameType } from "../../../../chain/types/game.type";
import { PlayerItem } from "../player-item/player-item";

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

    const gamesDetails: GameType[] = [];
    for await (const item of allGames) {
      const gameDetails = await getGame(Battle!, item, account!);
      gamesDetails.push(gameDetails!);
    }
    setAllGames(gamesDetails);
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
                return <PlayerItem game={player} index={index}></PlayerItem>;
              })}
          </div>
        </div>
      </div>
    </PlayersCard>
  );
};

export default Players;
