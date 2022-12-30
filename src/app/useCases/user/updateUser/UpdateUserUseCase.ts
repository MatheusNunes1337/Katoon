import { NotFoundError } from "../../../errors/NotFoundError";
import { IUserRepository } from "../../../repositories/IUserRepository";
import { IUpdateUserDTO } from "./UpdateUserDTO";

export class UpdateUserUseCase {
    constructor(private readonly userRepository: IUserRepository) {}

    async execute(payload: IUpdateUserDTO, id: number) {
        const userExists = await this.userRepository.findById(id)
        if(!userExists) throw new NotFoundError('User not found')

        return await this.userRepository.update(payload, id)
    }
}