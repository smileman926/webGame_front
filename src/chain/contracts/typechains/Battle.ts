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
    "Endgame(uint256,address)": FunctionFragment;
    "Gamelist(uint256)": FunctionFragment;
    "LPstaking()": FunctionFragment;
    "PlayingOn(address)": FunctionFragment;
    "createGame(uint256)": FunctionFragment;
    "getAllActive()": FunctionFragment;
    "getGame(uint256)": FunctionFragment;
    "getState(uint256)": FunctionFragment;
    "joinGame(uint256)": FunctionFragment;
    "latestGame()": FunctionFragment;
    "owner()": FunctionFragment;
    "renouceOwner()": FunctionFragment;
    "setOperator(address)": FunctionFragment;
    "setOwner(address)": FunctionFragment;
    "setStaking(address)": FunctionFragment;
    "setTeam(address)": FunctionFragment;
    "setToken(address)": FunctionFragment;
    "team()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "Endgame"
      | "Gamelist"
      | "LPstaking"
      | "PlayingOn"
      | "createGame"
      | "getAllActive"
      | "getGame"
      | "getState"
      | "joinGame"
      | "latestGame"
      | "owner"
      | "renouceOwner"
      | "setOperator"
      | "setOwner"
      | "setStaking"
      | "setTeam"
      | "setToken"
      | "team"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "Endgame",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "Gamelist",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "LPstaking", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "PlayingOn",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "createGame",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getAllActive",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getGame",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getState",
    values: [PromiseOrValue<BigNumberish>]
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
    functionFragment: "renouceOwner",
    values?: undefined
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

  decodeFunctionResult(functionFragment: "Endgame", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "Gamelist", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "LPstaking", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "PlayingOn", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "createGame", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getAllActive",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getGame", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getState", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "joinGame", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "latestGame", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renouceOwner",
    data: BytesLike
  ): Result;
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
    Endgame(
      id: PromiseOrValue<BigNumberish>,
      winner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

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

    PlayingOn(
      _add: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    createGame(
      _bet: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getAllActive(
      overrides?: CallOverrides
    ): Promise<[BigNumber[], BigNumber, BigNumber, BigNumber]>;

    getGame(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber, string, string, string]>;

    getState(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    joinGame(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    latestGame(overrides?: CallOverrides): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renouceOwner(
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

  Endgame(
    id: PromiseOrValue<BigNumberish>,
    winner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

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

  PlayingOn(
    _add: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  createGame(
    _bet: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getAllActive(
    overrides?: CallOverrides
  ): Promise<[BigNumber[], BigNumber, BigNumber, BigNumber]>;

  getGame(
    _id: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber, string, string, string]>;

  getState(
    _id: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  joinGame(
    _id: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  latestGame(overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  renouceOwner(
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
    Endgame(
      id: PromiseOrValue<BigNumberish>,
      winner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

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

    PlayingOn(
      _add: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

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

    getAllActive(
      overrides?: CallOverrides
    ): Promise<[BigNumber[], BigNumber, BigNumber, BigNumber]>;

    getGame(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber, string, string, string]>;

    getState(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    joinGame(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    latestGame(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    renouceOwner(overrides?: CallOverrides): Promise<void>;

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
    Endgame(
      id: PromiseOrValue<BigNumberish>,
      winner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    Gamelist(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    LPstaking(overrides?: CallOverrides): Promise<BigNumber>;

    PlayingOn(
      _add: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    createGame(
      _bet: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getAllActive(overrides?: CallOverrides): Promise<BigNumber>;

    getGame(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getState(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    joinGame(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    latestGame(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renouceOwner(
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
    Endgame(
      id: PromiseOrValue<BigNumberish>,
      winner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    Gamelist(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    LPstaking(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    PlayingOn(
      _add: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    createGame(
      _bet: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getAllActive(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getGame(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getState(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    joinGame(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    latestGame(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renouceOwner(
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