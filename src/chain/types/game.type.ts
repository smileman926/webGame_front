import { GameStatus } from "../enums/game-status.enum";

export interface GameType {
  id: number;
  state: GameStatus;
  stakes: number;
  player1: string;
  player2: string;
  winner: string;
}
