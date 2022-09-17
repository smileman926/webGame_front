import { BATTLE_ADDRESS } from "../constances";
import battleJson from "../contracts/abis/Battle.sol/Battle.json";
import type { Battle } from "../contracts/typechains/Battle";
import useContract from "./useContract";

export default function useBattleContract() {
  return useContract<Battle>(BATTLE_ADDRESS, battleJson.abi);
}
