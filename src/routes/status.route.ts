import { Router, Request, Response, NextFunction } from 'express';
import statusCode from 'http-status-codes';

const statusRoute = Router();

statusRoute.get(
  "/status",
  (req: Request, res: Response, next: NextFunction) => {
    res.status(statusCode.OK).send({ status: "OK" });
  }
);

export default statusRoute;