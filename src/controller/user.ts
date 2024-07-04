import { Req, Res, Next } from "../infrastructure/types/expressTypes";
import { IToken } from "../interface/IValues";
import { UserUseCase } from "../usecase/userUsecase";
export class UserAdapter {

  private readonly _userusecase: UserUseCase;

  constructor(userusecase: UserUseCase) {
    this._userusecase = userusecase;

  }

  async getTokens(req: Req, res: Res, next: Next) {
    try {
      const { chainId } = req.params
      const tokens = await this._userusecase.getTokens(chainId)
      if (tokens) {
        res.status(200).json({
          success: true,
          data: tokens
        })
      } else {
        res.status(400).json({
          success: false,
          message: `Unable to fetch tokens for the chain id ${chainId}`
        });
      }
    } catch (err) {
      next(err);
    }
  }

  async getQuotes(req: Req, res: Res, next: Next) {
    try {
      const { srcToken, destToken, amount } = req.query as { srcToken: IToken, destToken: IToken, amount: string };

      const quotes = await this._userusecase.getQuotes(srcToken, destToken, amount)
      if (quotes) {
        res.status(200).json({
          success: true,
          data: quotes
        })
      } else {
        res.status(400).json({
          success: false,
          error: quotes
        });
      }
    } catch (err) {
      next(err);
    }
  }

}