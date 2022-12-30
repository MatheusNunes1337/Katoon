import { Request, Response } from "express";
import { NotFoundError } from "../../../errors/NotFoundError";
import { UpdateUserUseCase } from "./UpdateUserUseCase";

export class UpdateUserController {
    constructor(private readonly updateUserUseCase: UpdateUserUseCase) {}

    async execute(request: Request, response: Response) {
        try {
            const userUpdated = await this.updateUserUseCase.execute(
                request.body, Number(request.params.id)
            )
            return response.status(200).json(userUpdated)
        } catch(error) {
            if(error instanceof NotFoundError) 
                return response.status(404).json({errorMessage: error.message})
            
            return response.status(500).json({errorMessage: 'Internal server error'})
        }
    }
}