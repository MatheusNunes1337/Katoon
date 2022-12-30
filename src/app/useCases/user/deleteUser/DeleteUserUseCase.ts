import { NotFoundError } from "../../../errors/NotFoundError";
import { IUserRepository } from "../../../repositories/IUserRepository";

export class DeleteUserUseCase {
    constructor(private readonly userRepository: IUserRepository) {}

    async execute(id: number) {
        const userExists = await this.userRepository.findById(id)
        if(!userExists) throw new NotFoundError('User not found')

        await this.userRepository.delete(id)
    }
}