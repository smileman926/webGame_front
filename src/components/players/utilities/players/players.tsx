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
  joinGame,
} from "../../../../chain/hooks/useBattleContractFunctions";
import useBattleContract from "../../../../chain/hooks/useBattleContract";
import { GameType } from "../../../../chain/types/game.type";
import {
  allowance,
  approve,
} from "../../../../chain/hooks/useMainContractFunctions";
import useMainContract from "../../../../chain/hooks/useMainContract";
import { BATTLE_ADDRESS } from "../../../../chain/constances";
import { GameStatus } from "../../../../chain/enums/game-status.enum";
import { makeAddressShort } from "../../../../utils/account-utils";

const Players = () => {
  const { account } = useWeb3React<Web3Provider>();
  const Battle = useBattleContract();
  const MainToken = useMainContract();
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

  const onAcceptButtonClick = async (game: GameType) => {
    joinGameFunction(game);
  };

  const joinGameFunction = async (game: GameType) => {
    const a = await approve(MainToken!, BATTLE_ADDRESS, game.stakes);
    const all = await allowance(MainToken!, account!, BATTLE_ADDRESS);
    const join = await joinGame(Battle!, game.id, account!);
    setRefresh(!refresh);
  };

  const getPlayers = (player: GameType): string => {
    if (player.state === GameStatus.HASNOTPLAYER) {
      return "HASNOTPLAYER";
    }
    return `${makeAddressShort(player.player2)} vs ${makeAddressShort(
      player.player1
    )} `;
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
                      <p>{getPlayers(player)}</p>
                    </div>
                    <div
                      className={classes.players__content_col_whiteRow_amount}
                    >
                      <img src={GemImage} alt="gem"></img>
                      <p>{player.stakes}</p>
                      {/* <p>{weiToEther(BigNumber.from(player.stakes))}</p> */}
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
