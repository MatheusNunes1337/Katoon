import * as bcrypt from 'bcrypt'
import { NotFoundError } from "../../../errors/NotFoundError";
import { IUserRepository } from "../../../repositories/IUserRepository";
import { IUpdateUserDTO } from "./UpdateUserDTO";

export class UpdateUserUseCase {
    constructor(private readonly userRepository: IUserRepository) {}

    async execute(payload: IUpdateUserDTO, id: number) {
        const userExists = await this.userRepository.findById(id)
        if(!userExists) throw new NotFoundError('User not found')

        if('password' in payload) {
            const {password} = payload
            const salt = await bcrypt.genSalt(10)
            payload.password = await bcrypt.hash(password!, salt)
        }

        return await this.userRepository.update(payload, id)
    }
}