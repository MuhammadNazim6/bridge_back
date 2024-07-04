import { IToken } from "../interface/IValues";
import { IAxios } from "../interface/services/IAxios";

export class UserUseCase {
  private readonly axiosInstance: IAxios;

  constructor(
    axiosInstance: IAxios
  ) {
    this.axiosInstance = axiosInstance
  }

  async getTokens(chainId: string) {
    try {
      const tokens = this.axiosInstance.getTokens(chainId)
      return tokens
    } catch (error) {
      console.log(error);
      throw error
    }
  }

  async getQuotes(srcToken: IToken, destToken: IToken, amount: string) {
    try {
      const quotesReponse = this.axiosInstance.getquotes(srcToken, destToken, amount)
      return quotesReponse
    } catch (error) {
      console.log(error);
      throw error
    }
  }

}