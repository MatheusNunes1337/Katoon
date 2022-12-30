import {Router, Request, Response} from 'express'
import { createUserController } from '../app/useCases/user/createUser'

const userRoute = Router()

userRoute.post('/', (request: Request, response: Response) => {
    return createUserController.execute(request, response)
})

export {userRoute}