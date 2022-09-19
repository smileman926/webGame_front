import { BigNumber } from "ethers";
import type { Battle } from "../contracts/typechains/Battle";
import { GameStatus } from "../enums/game-status.enum";
import { etherToWei, getTransactionOptions } from "../tools/chain-utils";
import { GameType } from "../types/game.type";

export const createGame = async (
  battle: Battle,
  bet: number,
  acount: string
) => {
  try {
    const inWei = etherToWei(bet);
    const tx = await battle.createGame(
      inWei,
      await getTransactionOptions(acount, 0.05)
    );
    const res = await tx.wait();
    return res;
  } catch (e) {
    console.log(e);
  }
};

export const getAllActive = async (
  battle: Battle,
  account: string
): Promise<number[]> => {
  try {
    const tx = await battle.getAllActive(
      1,
      await getTransactionOptions(account)
    );
    return tx[0] as unknown as number[];
  } catch (e) {
    console.log(e);
  }
  return [];
};

export const getGame = async (
  battle: Battle,
  id: number,
  account: string
): Promise<GameType> => {
  try {
    const tx = await battle.getGame(id, await getTransactionOptions(account));
    const game = {
      id: id,
      state: findGameStatus(Number(tx[0])),
      stakes: tx[1],
      player1: tx[2],
      player2: tx[3],
      winner: tx[4],
    };
    return game;
  } catch (e) {
    console.log(e);
  }
  return {
    id: id,
    state: GameStatus.HASNOTPLAYER,
    stakes: BigNumber.from("0"),
    player1: "",
    player2: "",
    winner: "",
  };
};

export const joinGame = async (
  battle: Battle,
  id: number,
  account: string
): Promise<boolean> => {
  try {
    const tx = await battle.joinGame(
      id,
      await getTransactionOptions(account, 0.05)
    );
    const res = await tx.wait();
    return res as unknown as boolean;
  } catch (e) {
    console.log(e);
  }
  return false;
};

const findGameStatus = (status: number): GameStatus => {
  switch (status) {
    case 0:
      return GameStatus.HASNOTPLAYER;
    case 1:
      return GameStatus.HASPLAYERONE;
    case 2:
      return GameStatus.HASPLAYERTWO;
    case 3:
      return GameStatus.HASWINNER;

    default:
      return GameStatus.HASNOTPLAYER;
  }
};
