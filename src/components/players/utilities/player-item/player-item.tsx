import React, { useEffect } from "react";
import { GameType } from "../../../../chain/types/game.type";
import Button from "../../../buttons/button/button";
import classes from "./../players/players.module.scss";
import GemImage from "../../../../assets/images/gem.png";
import { GameStatus } from "../../../../chain/enums/game-status.enum";
import { makeAddressShort } from "../../../../utils/account-utils";
import { weiToEther } from "../../../../chain/tools/chain-utils";
import { BigNumber } from "ethers";
import { BATTLE_ADDRESS } from "../../../../chain/constances";
import {
  cancelGame,
  joinGame,
} from "../../../../chain/hooks/useBattleContractFunctions";
import {
  approve,
  allowance,
} from "../../../../chain/hooks/useMainContractFunctions";
import { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import useMainContract from "../../../../chain/hooks/useMainContract";
import useBattleContract from "../../../../chain/hooks/useBattleContract";
import { useState } from "react";
import { LoadingSpinner } from "../../../loading-spinner/loading-spinner";

interface PlayerItemProps {
  game: GameType;
  index: number;
}
export const PlayerItem = ({ game, index }: PlayerItemProps) => {
  const { account } = useWeb3React<Web3Provider>();
  const Battle = useBattleContract();
  const MainToken = useMainContract();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [btnText, setBtnText] = useState<string>("APPROVE");
  const [playersText, setPlayersText] = useState<string>("HASNOTPLAYER");

  useEffect(() => {
    if (account && Battle) {
      findPlayersText(game);
      if (game.state === GameStatus.HASWINNER) {
        setBtnText("FINISHED");
      }
      if (game.state === GameStatus.HASPLAYERTWO) {
        if (game.player1 == account || game.player2 == account) {
          setBtnText("CANCEL");
        } else {
          setBtnText("IN PROGRESS");
        }
      }
    }
  }, [account, Battle]);

  const onAcceptButtonClick = async (game: GameType) => {
    if (btnText === "CANCEL") {
      cancelGame(Battle!, account!, game.id);
    } else {
      joinGameFunction(game);
    }
  };

  const joinGameFunction = async (game: GameType) => {
    setIsLoading(true);
    try {
      const a = await approve(MainToken!, BATTLE_ADDRESS, game.stakes);
      const join = await joinGame(Battle!, game.id, account!);
      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
    }
  };

  const findPlayersText = (game: GameType): void => {
    if (game.state === GameStatus.HASNOTPLAYER) {
      setPlayersText("HASNOTPLAYER");
    } else {
      setPlayersText(`${game.id} - ${makeAddressShort(game.player1)} `);
    }
  };

  const getGameStakes = (player: GameType): string => {
    try {
      return weiToEther(BigNumber.from(`${player.stakes}`));
    } catch (e) {
      console.log(e);
    }
    return "0";
  };
  return (
    <div
      key={game.id}
      className={
        index % 2 === 0
          ? classes.players__content_col_greenRow
          : classes.players__content_col_whiteRow
      }
    >
      <div className={classes.players__content_col_whiteRow_name}>
        <p>{playersText}</p>
      </div>
      <div className={classes.players__content_col_whiteRow_amount}>
        <img src={GemImage} alt="gem"></img>
        <p>{getGameStakes(game)}</p>
      </div>
      <div className={classes.players__content_col_whiteRow_action}>
        {isLoading ? (
          LoadingSpinner()
        ) : (
          <Button
            onClick={() => {
              onAcceptButtonClick(game);
            }}
            disabled={btnText !== "APPROVE" && btnText !== "CANCEL"}
            color="var(--color-green-3)"
          >
            {btnText}
          </Button>
        )}
      </div>
    </div>
  );
};
