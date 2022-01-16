import { Router, Request, Response, NextFunction as Next } from "express";
import statusCode from "http-status-codes";

const usersRoute = Router();

const users = [
  { id: 1, name: "Euclides" },
  { id: 2, name: "John Doe" },
  { id: 3, name: "Talitah" },
];

type GetUserType = {
  userId: string;
};

// GET /users
usersRoute.get("/users", (req: Request, res: Response, next: Next) => {
  res.status(statusCode.OK).send({ users });
});

// GET /users/:userId
usersRoute.get("/users/:userId", (req: Request<GetUserType>, res: Response, next: Next) => {
    const { userId } = req.params;
    const user = users.filter((user) => user.id === parseInt(userId));

    res.status(statusCode.OK).send({ user });
  }
);

// POST /users
// PUT /users/:userId
// PUT /users/:userId
// DELETE /users/:userId

export default usersRoute;
