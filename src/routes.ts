import { Router } from 'express'
import { createConnection } from 'typeorm';
import { CreateUserController } from './controller/UserController';
import { CreateTagController } from './controller/TagController';
import { ensureAdmin } from './middleware/ensureAdmin';
import { authenticateUserController } from './controller/AuthenticateUserController';
import { CreateComplimentController } from './controller/CreateComplimentController';
import { ensureAuthenticated } from './middleware/ensureAuthenticated';
import { ListUserSendComplimentsController } from './controller/ListUserSendComplimentsController';
import { ListUserReceiveComplimentsController } from './controller/ListUserReceiveComplimentsController';
import { ListTagsController } from './controller/ListTagsController';
import { ListUsersController } from './controller/ListUsersController';

const routes = Router();
createConnection();

routes.post("/users", CreateUserController);
routes.get("/users", ensureAuthenticated,ListUsersController);
routes.post("/tags", ensureAuthenticated, ensureAdmin, CreateTagController);
routes.get("/tags", ensureAuthenticated,ListTagsController)
routes.post("/login", authenticateUserController);
routes.post("/compliment", ensureAuthenticated, CreateComplimentController);
routes.get("/users/compliments/send", ensureAuthenticated, ListUserSendComplimentsController)
routes.get("/users/compliments/receive", ensureAuthenticated, ListUserReceiveComplimentsController)

export default routes;
