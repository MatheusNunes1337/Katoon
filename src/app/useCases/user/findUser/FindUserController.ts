import { Request, Response } from "express";
import { NotFoundError } from "../../../errors/NotFoundError";
import { FindUserUseCase } from "./FindUserUseCase";

export class FindUserController {
    constructor(private readonly findUserUseCase: FindUserUseCase) {} 
    
    async execute(request: Request, response: Response) {
        try {
            const user = await this.findUserUseCase.execute(Number(request.params.id))
            return response.status(200).json(user)
        } catch(error) {
            if(error instanceof NotFoundError) 
                return response.status(404).json({errorMessage: error.message})
            
            return response.status(500).json({errorMessage: 'Internal server error'})
        } 
    }
}