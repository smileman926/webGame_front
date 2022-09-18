import { MAIN_TOKEN } from "../constances";
import erc20Json from "../contracts/abis/Battle.sol/IERC20.json";
import type { IERC20 } from "../contracts/typechains/IERC20";
import useContract from "./useContract";

export default function useMainContract() {
  return useContract<IERC20>(MAIN_TOKEN, erc20Json.abi);
}
