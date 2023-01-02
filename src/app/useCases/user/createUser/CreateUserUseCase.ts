import * as bcrypt from "bcrypt";
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

        const salt = await bcrypt.genSalt(10)
        const password = await bcrypt.hash(data.password, salt)

        await this.userRepository.save({...data, password})
    }
}