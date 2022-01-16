import bodyParser from "body-parser";
import express, { NextFunction, Request, Response } from "express";

import statusRoute from "./routes/status.route";
import userRoutes from './routes/users.route';


const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res
    .status(200)
    .send({ app: "Rest Arch", version: "0.0.1", author: "Euclides" });
});

app.use(statusRoute);
app.use(userRoutes);

app.listen(4060, () => {
  console.log("Starting Node Server by Euclides DryC`s Machine 🥕!");
});
