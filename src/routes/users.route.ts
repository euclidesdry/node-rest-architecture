import { Router, Request, Response, NextFunction as Next } from 'express';

const usersRoute = Router();

// GET /users
usersRoute.get('/users', (req: Request, res: Response, next: Next) => {
  const users = [{ name: 'Euclides' }];

  res.status(200).send({users});
});

// GET /users/:userId
// POST /users
// PUT /users/:userId
// PUT /users/:userId
// DELETE /users/:userId

export default usersRoute;