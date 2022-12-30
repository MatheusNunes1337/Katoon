import { Request, Response } from "express";
import { BadRequestError } from "../../../errors/BadRequestError";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
    constructor(private readonly createUserUseCase: CreateUserUseCase) {}

    async execute(request: Request, response: Response): Promise<Response> {
        try {
            await this.createUserUseCase.execute(request.body)
            return response.status(201).json({
                message: 'User created sucessfully!'
            })
        }
        catch(error) {
            if(error instanceof BadRequestError) 
                return response.status(400).json({errorMessage: error.message})
            
            return response.status(500).json({errorMessage: 'Internal server error'})
        }
    }
}