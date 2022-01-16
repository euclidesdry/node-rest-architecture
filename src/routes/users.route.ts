import { Router, Request, Response, NextFunction as Next } from "express";
import statusCode from "http-status-codes";

const usersRoute = Router();

let users = [
  { id: 1, name: "Euclides" },
  { id: 2, name: "John Doe" },
  { id: 3, name: "Talitah" },
  { id: 4, name: "Neves" },
  { id: 5, name: "Carlos" },
];

type GetUserType = {
  userId: string;
};

type CreateUserType = {
  name: string;
};

// GET /users
usersRoute.get("/users", (req: Request, res: Response, next: Next) => {
  res.status(statusCode.OK).send({ users });
});

// GET /users/:userId
usersRoute.get(
  "/users/:userId",
  (req: Request<GetUserType>, res: Response, next: Next) => {
    const { userId } = req.params;
    const user = users.filter((user) => user.id === parseInt(userId));

    res.status(statusCode.OK).send({ user });
  }
);

// POST /users
usersRoute.post(
  "/users",
  (req: Request<CreateUserType>, res: Response, next: Next) => {
    const name = req.body?.name;
    const user = { id: users.length + 1, name };

    users.push(user);

    // console.log(req)

    res.status(statusCode.CREATED).send({ user });
  }
);

// PUT /users/:userId
usersRoute.put(
  "/users/:userId",
  (req: Request<GetUserType>, res: Response, next: Next) => {
    const { userId } = req.params;
    const name = req.body?.name;
    let changedUser = {};

    for (let i = 0; i < users.length; i++) {
      if (users[i].id.toString().includes(userId)) {
        users[i].name = name;
        changedUser = users[i];
      }
    }

    res.status(statusCode.OK).send({ changedUser });
  }
);

// DELETE /users/:userId

usersRoute.delete(
  "/users/:userId",
  (req: Request<GetUserType>, res: Response, next: Next) => {
    const { userId } = req.params;
    let removedUser = {};

    for (let i = 0; i < users.length; i++) {
      if (users[i].id && users[i].id.toString().includes(userId)) {
        removedUser = users.splice(i, 1);
      }
    }

    res.status(statusCode.OK).send({ removedUser });
  }
);

export default usersRoute;
