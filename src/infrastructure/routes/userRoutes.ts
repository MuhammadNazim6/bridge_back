import express from 'express'
import { Req, Res, Next } from '../types/expressTypes';
import { userAdapter } from './injections/userInjection';

const router = express.Router();

router.get("/getTokens/:chainId", (req: Req, res: Res, next: Next) => {
  userAdapter.getTokens(req, res, next)
});
router.get("/getQuote", (req: Req, res: Res, next: Next) => {
  userAdapter.getQuotes(req, res, next)
});

export default router;