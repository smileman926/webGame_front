import { Web3Provider } from "@ethersproject/providers";
import { BigNumber, ethers } from "ethers";
import { isMobile } from "react-device-detect";
import {
  Battle,
  joinedGameEvent,
  newGameEvent,
} from "../contracts/typechains/Battle";
import { GameStatus } from "../enums/game-status.enum";
import { getGame, playingOn } from "../hooks/useBattleContractFunctions";
import { GameType } from "../types/game.type";
import { utils } from "ethers";

export const connectMetamaskOnLoad = () => {
  if (isMobile) {
    return false;
  }
  const isConnected = localStorage.getItem("metamask-connected");
  if (isConnected) {
    const c = isConnected as unknown as boolean;
    return c;
  }

  return false;
};

export const connectWalletConnectOnLoad = () => {
  const isConnected = localStorage.getItem("wallet-connect-connected");
  if (isConnected) {
    const c = isConnected as unknown as boolean;
    return c;
  }

  return false;
};

export const setMetamaskConnectionStatus = (
  s: "connected" | "disconnected"
) => {
  if (s == "connected") {
    localStorage.setItem("metamask-connected", "true");
  } else {
    localStorage.setItem("metamask-connected", "false");
  }
};

export const setWalletConnectConnectionStatus = (
  s: "connected" | "disconnected"
) => {
  if (s == "connected") {
    localStorage.setItem("wallet-connect-connected", "true");
  } else {
    localStorage.setItem("wallet-connect-connected", "false");
  }
};

export const weiToEther = (amount: BigNumber): string => {
  try {
    const res = ethers.utils.formatEther(amount);
    return res;
  } catch (e) {
    return `${Number(amount)}e18`;
  }
};

export const etherToWei = (amount: number): BigNumber => {
  const res = ethers.utils.parseEther(amount.toString());
  return res;
};

let PROVIDER: ethers.providers.BaseProvider;

const getRPC = (): string => {
  // return "https://polygon-mainnet.g.alchemy.com/v2/W5j16j4pEFEiDbXGD3FhInh5HpuMTLMg";
  return "https://rpc-mumbai.maticvigil.com/";
  // return 'https://polygon-rpc.com';
  // return 'https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161';
  // return 'https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161';
};

const getProvider = (): ethers.providers.BaseProvider => {
  if (PROVIDER != undefined) {
    return PROVIDER;
  }

  PROVIDER = ethers.providers.getDefaultProvider(getRPC());
  return PROVIDER;
};

export const getTransactionOptions = async (
  account: string,
  value: number = 0
): Promise<Object> => {
  const feeData = await getProvider().getFeeData();
  const n = await getProvider().getTransactionCount(account);
  const gasPrice = Number(feeData.gasPrice) + 1000000000;
  const gasLimit = 500000;
  let overrides = {
    gasLimit: gasLimit,
    gasPrice: gasPrice,
    // nonce: n,
  };

  if (value != 0) {
    const pure = etherToWei(value).add(gasLimit * gasPrice);
    overrides["value"] = pure;
  }
  return overrides;
};

export const showTransactionError = (e: any) => {
  console.error("showError", e);
  let message = "";
  if (e.error) {
    let err = e.error.message.split("reverted:");
    message = err[1];
  } else if (e.message) {
    message = e.message;
  }

  alert(`Revert >> ${message}`);
};

let checkGameInterval: string | number | NodeJS.Timer | undefined;
let waiting = true;
export const checkGameStatusInterval = (
  b: Battle,
  account: string,
  provider: Web3Provider
) => {
  checkGameInterval = setInterval(async () => {
    if (waiting) {
      const gameId = await playingOn(b, account);
      const game: GameType = await getGame(b, gameId, account);

      if (game.state == GameStatus.HASPLAYERTWO) {
        generateGameURL(gameId, account, game, provider);
      }
    }
  }, 10 * 1000);
};

const generateGameURL = async (
  gameId: number,
  address: string,

  game: GameType, provider: Web3Provider
) => {
  clearInterval(checkGameInterval);
  waiting = false;
  const signer = provider.getSigner(address);
  const hexMessage = utils.hexlify(utils.toUtf8Bytes(gameId.toString()));

  const signature = await signer.signMessage(hexMessage);
  // let username = window.prompt("Please enter your name");

  const url = `http://game.kabana.club?game=${gameId}&address=${game.player1}&user=${game.player2}&token=${signature}`;
  window.open(url);
};
