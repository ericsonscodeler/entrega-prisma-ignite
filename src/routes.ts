import { Router } from 'express'
import { AuthenticateClientController } from './modules/account/authenticateClient/AuthenticateClientController';
import { CreateClientController } from './modules/clients/useCases/createClient/CreateClientController';

const routes = Router();

const createClientController = new CreateClientController();
const authenticateClientUseCase = new AuthenticateClientController()

routes.post("/authenticate", authenticateClientUseCase.handle)

routes.post("/client/", createClientController.handle)


export {routes}