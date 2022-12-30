import { BadRequestError } from "../../../errors/BadRequestError";
import { IUserRepository } from "../../../repositories/IUserRepository";
import { ICreateUserDTO } from "./CreateUserDTO";

export class CreateUserUseCase {
    constructor(private readonly userRepository: IUserRepository) {}

    async execute(data: ICreateUserDTO) {
        const {email, username} = data
        const userAlreadyExists = await this.userRepository.findByFilter({username, email})

        if(userAlreadyExists.length > 0) {
            throw new BadRequestError('User already exists')
        }

        await this.userRepository.save(data)
    }
}