import { Router } from 'express'
import { ensureAuthenticateClient } from './middlewares/ensureAuthenticateClient';
import { ensureAuthenticateDeliveryman } from './middlewares/ensureAuthenticateDeliveryman';
import { AuthenticateClientController } from './modules/account/authenticateClient/AuthenticateClientController';
import { AuthenticateDeliverymanController } from './modules/account/authenticateDeliveryman/AuthenticateDeliverymanController';
import { CreateClientController } from './modules/clients/useCases/createClient/CreateClientController';
import { FindAllDeliveriesController } from './modules/clients/useCases/deliveries/FIndAllDeliveriesController';
import { CreateDeliveryController } from './modules/deliveries/useCases/createDelivery/CreateDeliveryController';
import { FindAllAvailableController } from './modules/deliveries/useCases/findAllAvailable/FindAllAvailableController';
import { UpdateDeliverymanController } from './modules/deliveries/useCases/updateDeliveryman/UpdateDeliverymanController';
import { UpdateEndDateController } from './modules/deliveries/useCases/updateEndDate/UpdateEndDateController';
import { CreateDeliverymanController } from './modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController';
import { FindAllDeliveriesDeliverymanController } from './modules/deliveryman/useCases/FindAllDeliveries/FindAllDeliveriesDeliverymanController';

const routes = Router();

const createClientController = new CreateClientController();
const authenticateClientController = new AuthenticateClientController();
const findAllDeliveriesClient = new FindAllDeliveriesController();

const createDeliverymanController = new CreateDeliverymanController();
const authenticateDeliverymanController = new AuthenticateDeliverymanController();

const deliveryController = new CreateDeliveryController();
const findAllAvailableController = new FindAllAvailableController();
const updateDeliverymanController = new UpdateDeliverymanController();

const findAllDeliveriesDeliveryman = new FindAllDeliveriesDeliverymanController()
const updateEndDateController = new UpdateEndDateController()

routes.post("/client", createClientController.handle)
routes.post("/client/authenticate", authenticateClientController.handle)
routes.get("/client/deliveries", ensureAuthenticateClient, findAllDeliveriesClient.handle)

routes.post("/deliveryman", createDeliverymanController.handle)
routes.post("/deliveryman/authenticate", authenticateDeliverymanController.handle)
routes.get("/deliveryman/deliveries", ensureAuthenticateDeliveryman,findAllDeliveriesDeliveryman.handle)

routes.post("/delivery", ensureAuthenticateClient, deliveryController.handle)
routes.get("/delivery/available",ensureAuthenticateDeliveryman, findAllAvailableController.handle)
routes.put("/delivery/updateDeliveryman/:id",ensureAuthenticateDeliveryman, updateDeliverymanController.handle)
routes.put("/delivery/updateEndDate/:id", ensureAuthenticateDeliveryman, updateEndDateController.handle)




export { routes }