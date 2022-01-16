import express, { Request, Response, NextFunction } from "express";

const app = express();

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res
    .status(200)
    .send({ app: "Rest Arch", version: "0.0.1", author: "Euclides" });
});

app.get("/status", (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send({ status: "OK" });
});

app.listen(4060, () => {
  console.log("Starting Node Server by Euclides DryC`s Machine 🥕!");
});
