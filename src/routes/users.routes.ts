import {Router, Request, Response} from 'express'
import { createUserController } from '../app/useCases/user/createUser'
import { findUserController } from '../app/useCases/user/findUser'
import { findUsersController } from '../app/useCases/user/findUsers'

const userRoute = Router()

userRoute.post('/', (request: Request, response: Response) => {
    return createUserController.execute(request, response)
})

userRoute.get('/', (request: Request, response: Response) => {
    return findUsersController.execute(request, response)
})

userRoute.get('/:id', (request: Request, response: Response) => {
    return findUserController.execute(request, response)
})

export {userRoute}