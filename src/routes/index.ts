import { Router } from "express";
import { userRoute } from "./users.routes";

const routes = Router()

routes.use('api/v1/users', userRoute)

export {routes}