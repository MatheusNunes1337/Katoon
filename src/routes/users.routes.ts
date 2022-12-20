import {Router, Request, Response} from 'express'

const userRoute = Router()

userRoute.post('/', (request: Request, response: Response) => {
    return response.status(201).send()
})

export {userRoute}