import { ParsedQs } from 'qs';


export interface IToken extends ParsedQs {
  address: string;
  chainId: string;
  decimals: string;
  logoURI: string;
  name: string;
  symbol: string;
}

