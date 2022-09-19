import { BigNumber } from "ethers";
import { GameStatus } from "../enums/game-status.enum";

export interface GameType {
  id: number;
  state: GameStatus;
  stakes: BigNumber;
  player1: string;
  player2: string;
  winner: string;
}
