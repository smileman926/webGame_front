import { IERC20 } from "../contracts/typechains/IERC20";

export const approve = async (
  mainToken: IERC20,
  to: string,
  amount: number
) => {
  try {
    const tx = await mainToken.approve(to, amount);
    const txResponse = await tx.wait();
    return txResponse;
  } catch (e) {}
};

export const allowance = async (
  mainToken: IERC20,
  to: string,
  account: string
) => {
  try {
    const tx = await mainToken.allowance(account, to);
    return tx;
  } catch (e) {}
};
