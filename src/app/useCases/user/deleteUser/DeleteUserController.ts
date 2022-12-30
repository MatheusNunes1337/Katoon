import { Request, Response } from "express";
import { NotFoundError } from "../../../errors/NotFoundError";
import { DeleteUserUseCase } from "./DeleteUserUseCase";

export class DeleteUserController {
    constructor(private readonly deleteUserUseCase: DeleteUserUseCase) {}

    async execute(request: Request, response: Response) {
        try {
            await this.deleteUserUseCase.execute(Number(request.params.id))
            return response.status(204).end()
        } catch(error) {
            if(error instanceof NotFoundError) 
                return response.status(404).json({errorMessage: error.message})
            
            return response.status(500).json({errorMessage: 'Internal server error'})
        } 
    }
}