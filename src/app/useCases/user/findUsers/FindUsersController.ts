import { Request, Response } from "express";
import { BadRequestError } from "../../../errors/BadRequestError";
import { IUserFilter } from "../../../interfaces/IUserFilter";
import { FindUsersUseCase } from "./FindUsersUseCase";

export class FindUsersController {
    constructor(private readonly findUsersUseCase: FindUsersUseCase) {}

    async execute(request: Request, response: Response) {
        try {
            const users = await this.findUsersUseCase.execute(request.query)
            return response.status(200).json(users)
        } catch(error) {
            if(error instanceof BadRequestError) 
                return response.status(400).json({errorMessage: error.message})
            
            return response.status(500).json({errorMessage: 'Internal server error'})
        }
    }
}