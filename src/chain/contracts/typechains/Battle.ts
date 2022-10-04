/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export interface BattleInterface extends utils.Interface {
  functions: {
    "Gamelist(uint256)": FunctionFragment;
    "LPstaking()": FunctionFragment;
    "cancel(uint256)": FunctionFragment;
    "createGame(uint256)": FunctionFragment;
    "endGame(uint256,address)": FunctionFragment;
    "getAllActive(uint256)": FunctionFragment;
    "getAllDrawnOf(address)": FunctionFragment;
    "getAllLostOf(address)": FunctionFragment;
    "getAllPlayedOf(address)": FunctionFragment;
    "getAllWonOf(address)": FunctionFragment;
    "getDrawPercentageOf(address)": FunctionFragment;
    "getGame(uint256)": FunctionFragment;
    "getLoosePercentageOf(address)": FunctionFragment;
    "getState(uint256)": FunctionFragment;
    "getTotalGamesDrawnOf(address)": FunctionFragment;
    "getTotalLostOf(address)": FunctionFragment;
    "getTotalPlayedOf(address)": FunctionFragment;
    "getTotalWonOf(address)": FunctionFragment;
    "getWLOf(address)": FunctionFragment;
    "getWinPercentageOf(address)": FunctionFragment;
    "joinGame(uint256)": FunctionFragment;
    "latestGame()": FunctionFragment;
    "owner()": FunctionFragment;
    "playingOn(address)": FunctionFragment;
    "renouceOwner()": FunctionFragment;
    "resign(uint256)": FunctionFragment;
    "setOperator(address)": FunctionFragment;
    "setOwner(address)": FunctionFragment;
    "setStaking(address)": FunctionFragment;
    "setTeam(address)": FunctionFragment;
    "setToken(address)": FunctionFragment;
    "team()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "Gamelist"
      | "LPstaking"
      | "cancel"
      | "createGame"
      | "endGame"
      | "getAllActive"
      | "getAllDrawnOf"
      | "getAllLostOf"
      | "getAllPlayedOf"
      | "getAllWonOf"
      | "getDrawPercentageOf"
      | "getGame"
      | "getLoosePercentageOf"
      | "getState"
      | "getTotalGamesDrawnOf"
      | "getTotalLostOf"
      | "getTotalPlayedOf"
      | "getTotalWonOf"
      | "getWLOf"
      | "getWinPercentageOf"
      | "joinGame"
      | "latestGame"
      | "owner"
      | "playingOn"
      | "renouceOwner"
      | "resign"
      | "setOperator"
      | "setOwner"
      | "setStaking"
      | "setTeam"
      | "setToken"
      | "team"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "Gamelist",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "LPstaking", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "cancel",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "createGame",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "endGame",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getAllActive",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getAllDrawnOf",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getAllLostOf",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getAllPlayedOf",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getAllWonOf",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getDrawPercentageOf",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getGame",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getLoosePercentageOf",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getState",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getTotalGamesDrawnOf",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getTotalLostOf",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getTotalPlayedOf",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getTotalWonOf",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getWLOf",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getWinPercentageOf",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "joinGame",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "latestGame",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "playingOn",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "renouceOwner",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "resign",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "setOperator",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setOwner",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setStaking",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setTeam",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setToken",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "team", values?: undefined): string;

  decodeFunctionResult(functionFragment: "Gamelist", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "LPstaking", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "cancel", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "createGame", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "endGame", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getAllActive",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAllDrawnOf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAllLostOf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAllPlayedOf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAllWonOf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getDrawPercentageOf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getGame", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getLoosePercentageOf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getState", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getTotalGamesDrawnOf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTotalLostOf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTotalPlayedOf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTotalWonOf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getWLOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getWinPercentageOf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "joinGame", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "latestGame", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "playingOn", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renouceOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "resign", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setOperator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setOwner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setStaking", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setTeam", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setToken", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "team", data: BytesLike): Result;

  events: {
    "endedGame(uint256,address,uint256)": EventFragment;
    "joinedGame(uint256,address,uint256)": EventFragment;
    "newGame(uint256,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "endedGame"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "joinedGame"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "newGame"): EventFragment;
}

export interface endedGameEventObject {
  id: BigNumber;
  winner: string;
  bet: BigNumber;
}
export type endedGameEvent = TypedEvent<
  [BigNumber, string, BigNumber],
  endedGameEventObject
>;

export type endedGameEventFilter = TypedEventFilter<endedGameEvent>;

export interface joinedGameEventObject {
  id: BigNumber;
  player: string;
  bet: BigNumber;
}
export type joinedGameEvent = TypedEvent<
  [BigNumber, string, BigNumber],
  joinedGameEventObject
>;

export type joinedGameEventFilter = TypedEventFilter<joinedGameEvent>;

export interface newGameEventObject {
  id: BigNumber;
  creator: string;
  bet: BigNumber;
}
export type newGameEvent = TypedEvent<
  [BigNumber, string, BigNumber],
  newGameEventObject
>;

export type newGameEventFilter = TypedEventFilter<newGameEvent>;

export interface Battle extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: BattleInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    Gamelist(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, BigNumber, string, BigNumber] & {
        operator: string;
        player1: string;
        player2: string;
        stakes: BigNumber;
        winner: string;
        startedAt: BigNumber;
      }
    >;

    LPstaking(overrides?: CallOverrides): Promise<[string]>;

    cancel(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    createGame(
      _bet: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    endGame(
      id: PromiseOrValue<BigNumberish>,
      winner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getAllActive(
      _start: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber[], BigNumber[], BigNumber[]]>;

    getAllDrawnOf(
      _add: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;

    getAllLostOf(
      _add: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;

    getAllPlayedOf(
      _add: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;

    getAllWonOf(
      _add: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;

    getDrawPercentageOf(
      _add: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getGame(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber, string, string, string]>;

    getLoosePercentageOf(
      _add: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getState(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getTotalGamesDrawnOf(
      _add: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getTotalLostOf(
      _add: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getTotalPlayedOf(
      _add: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getTotalWonOf(
      _add: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getWLOf(
      _add: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getWinPercentageOf(
      _add: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    joinGame(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    latestGame(overrides?: CallOverrides): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    playingOn(
      _add: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    renouceOwner(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    resign(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setOperator(
      _add: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setOwner(
      _add: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setStaking(
      _add: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setTeam(
      _add: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setToken(
      _add: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    team(overrides?: CallOverrides): Promise<[string]>;
  };

  Gamelist(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [string, string, string, BigNumber, string, BigNumber] & {
      operator: string;
      player1: string;
      player2: string;
      stakes: BigNumber;
      winner: string;
      startedAt: BigNumber;
    }
  >;

  LPstaking(overrides?: CallOverrides): Promise<string>;

  cancel(
    _id: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  createGame(
    _bet: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  endGame(
    id: PromiseOrValue<BigNumberish>,
    winner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getAllActive(
    _start: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<[BigNumber[], BigNumber[], BigNumber[]]>;

  getAllDrawnOf(
    _add: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  getAllLostOf(
    _add: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  getAllPlayedOf(
    _add: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  getAllWonOf(
    _add: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  getDrawPercentageOf(
    _add: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getGame(
    _id: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber, string, string, string]>;

  getLoosePercentageOf(
    _add: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getState(
    _id: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getTotalGamesDrawnOf(
    _add: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getTotalLostOf(
    _add: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getTotalPlayedOf(
    _add: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getTotalWonOf(
    _add: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getWLOf(
    _add: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getWinPercentageOf(
    _add: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  joinGame(
    _id: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  latestGame(overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  playingOn(
    _add: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  renouceOwner(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  resign(
    _id: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setOperator(
    _add: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setOwner(
    _add: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setStaking(
    _add: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setTeam(
    _add: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setToken(
    _add: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  team(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    Gamelist(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, BigNumber, string, BigNumber] & {
        operator: string;
        player1: string;
        player2: string;
        stakes: BigNumber;
        winner: string;
        startedAt: BigNumber;
      }
    >;

    LPstaking(overrides?: CallOverrides): Promise<string>;

    cancel(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    createGame(
      _bet: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, boolean] & {
        id: BigNumber;
        bet: BigNumber;
        started: boolean;
      }
    >;

    endGame(
      id: PromiseOrValue<BigNumberish>,
      winner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    getAllActive(
      _start: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber[], BigNumber[], BigNumber[]]>;

    getAllDrawnOf(
      _add: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    getAllLostOf(
      _add: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    getAllPlayedOf(
      _add: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    getAllWonOf(
      _add: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    getDrawPercentageOf(
      _add: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getGame(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber, string, string, string]>;

    getLoosePercentageOf(
      _add: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getState(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTotalGamesDrawnOf(
      _add: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTotalLostOf(
      _add: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTotalPlayedOf(
      _add: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTotalWonOf(
      _add: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getWLOf(
      _add: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getWinPercentageOf(
      _add: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    joinGame(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    latestGame(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    playingOn(
      _add: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    renouceOwner(overrides?: CallOverrides): Promise<void>;

    resign(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    setOperator(
      _add: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setOwner(
      _add: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setStaking(
      _add: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setTeam(
      _add: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setToken(
      _add: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    team(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "endedGame(uint256,address,uint256)"(
      id?: PromiseOrValue<BigNumberish> | null,
      winner?: PromiseOrValue<string> | null,
      bet?: PromiseOrValue<BigNumberish> | null
    ): endedGameEventFilter;
    endedGame(
      id?: PromiseOrValue<BigNumberish> | null,
      winner?: PromiseOrValue<string> | null,
      bet?: PromiseOrValue<BigNumberish> | null
    ): endedGameEventFilter;

    "joinedGame(uint256,address,uint256)"(
      id?: PromiseOrValue<BigNumberish> | null,
      player?: PromiseOrValue<string> | null,
      bet?: PromiseOrValue<BigNumberish> | null
    ): joinedGameEventFilter;
    joinedGame(
      id?: PromiseOrValue<BigNumberish> | null,
      player?: PromiseOrValue<string> | null,
      bet?: PromiseOrValue<BigNumberish> | null
    ): joinedGameEventFilter;

    "newGame(uint256,address,uint256)"(
      id?: PromiseOrValue<BigNumberish> | null,
      creator?: PromiseOrValue<string> | null,
      bet?: PromiseOrValue<BigNumberish> | null
    ): newGameEventFilter;
    newGame(
      id?: PromiseOrValue<BigNumberish> | null,
      creator?: PromiseOrValue<string> | null,
      bet?: PromiseOrValue<BigNumberish> | null
    ): newGameEventFilter;
  };

  estimateGas: {
    Gamelist(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    LPstaking(overrides?: CallOverrides): Promise<BigNumber>;

    cancel(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    createGame(
      _bet: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    endGame(
      id: PromiseOrValue<BigNumberish>,
      winner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getAllActive(
      _start: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAllDrawnOf(
      _add: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAllLostOf(
      _add: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAllPlayedOf(
      _add: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAllWonOf(
      _add: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getDrawPercentageOf(
      _add: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getGame(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getLoosePercentageOf(
      _add: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getState(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTotalGamesDrawnOf(
      _add: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTotalLostOf(
      _add: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTotalPlayedOf(
      _add: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTotalWonOf(
      _add: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getWLOf(
      _add: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getWinPercentageOf(
      _add: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    joinGame(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    latestGame(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    playingOn(
      _add: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    renouceOwner(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    resign(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setOperator(
      _add: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setOwner(
      _add: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setStaking(
      _add: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setTeam(
      _add: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setToken(
      _add: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    team(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    Gamelist(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    LPstaking(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    cancel(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    createGame(
      _bet: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    endGame(
      id: PromiseOrValue<BigNumberish>,
      winner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getAllActive(
      _start: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAllDrawnOf(
      _add: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAllLostOf(
      _add: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAllPlayedOf(
      _add: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAllWonOf(
      _add: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getDrawPercentageOf(
      _add: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getGame(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getLoosePercentageOf(
      _add: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getState(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTotalGamesDrawnOf(
      _add: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTotalLostOf(
      _add: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTotalPlayedOf(
      _add: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTotalWonOf(
      _add: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getWLOf(
      _add: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getWinPercentageOf(
      _add: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    joinGame(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    latestGame(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    playingOn(
      _add: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    renouceOwner(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    resign(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setOperator(
      _add: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setOwner(
      _add: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setStaking(
      _add: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setTeam(
      _add: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setToken(
      _add: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    team(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
