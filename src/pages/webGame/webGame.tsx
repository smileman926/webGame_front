import OldPaper from "../../components/oldPaper/oldPaper";
import PlayerSelecting from "../../components/players/playerSelecting";
import Totals from "../../components/decision/decision";
import classes from "./webGame.module.scss";
import React, { useEffect } from "react";
import ConnectBtn from "../../components/connectBtn/connect-btn";
import {
  connectMetamaskOnLoad,
  connectWalletConnectOnLoad,
} from "../../chain/tools/chain-utils";
import { injected, walletconnect } from "../../chain/tools/connectors";
import { useWeb3React } from "@web3-react/core";

const WebGame = () => {
  const { activate } = useWeb3React();

  useEffect(() => {
    if (connectMetamaskOnLoad()) {
      activate(injected, undefined, true).catch((error) => {});
    } else if (connectWalletConnectOnLoad()) {
      activate(walletconnect, (error) => console.error(error));
    }
  });

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
