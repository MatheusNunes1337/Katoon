import {Router, Request, Response} from 'express'
import { createUserController } from '../app/useCases/user/createUser'
import { deleteUserController } from '../app/useCases/user/deleteUser'
import { findUserController } from '../app/useCases/user/findUser'
import { findUsersController } from '../app/useCases/user/findUsers'
import { updateUserController } from '../app/useCases/user/updateUser'

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

userRoute.patch('/:id', (request: Request, response: Response) => {
    return updateUserController.execute(request, response)
})

userRoute.delete('/:id', (request: Request, response: Response) => {
    return deleteUserController.execute(request, response)
})

export {userRoute}