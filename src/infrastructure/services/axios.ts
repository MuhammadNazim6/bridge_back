import { IToken } from "../../interface/IValues";
import { IAxios } from "../../interface/services/IAxios";
import axios from "axios";



class Axios implements IAxios {
  constructor() {
  }

  async getTokens(chainId: string): Promise<{}[]> {
    try {
      const response = await axios.get(`${process.env.XYFINANCE_API_BASEURL}/recommendedTokens?chainId=${chainId}`);
      console.log(response.data);

      return response.data.recommendedTokens;
    } catch (error) {
      console.error('Error fetching tokens:', error);
      throw new Error('Failed to fetch tokens');
    }
  }

  padNumberWithZeros = (amount: string, padding: number): string => {
    const zerosNeeded = padding - amount.length;
    if (zerosNeeded > 0) {
      amount = amount + '0'.repeat(zerosNeeded);
    }
    return amount;
  }

  async getquotes(srcToken: IToken, destToken: IToken, amount: string): Promise<{}> {
    try {
      const amountPadded = this.padNumberWithZeros(amount, parseInt(srcToken.decimals))
      console.log(amountPadded);

      const response = await axios.get(`${process.env.XYFINANCE_API_BASEURL}/quote?srcChainId=${srcToken.chainId}&srcQuoteTokenAddress=${srcToken.address}&srcQuoteTokenAmount=${amountPadded}&dstChainId=${destToken.chainId}&dstQuoteTokenAddress=${destToken.address}&slippage=1`);
      console.log(response.data);

      return response.data
    } catch (error) {
      console.error('Error fetching tokens:', error);
      throw new Error('Failed to fetch tokens');
    }
  }
}




export default Axios;
