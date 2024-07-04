import { IToken } from "../IValues";

export interface IAxios {
  getTokens(chainId: string): Promise<{}[]>;
  getquotes(srcToken: IToken, destToken: IToken, amount: string): Promise<{}>;

}

