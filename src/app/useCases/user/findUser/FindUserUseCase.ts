import { NotFoundError } from "../../../errors/NotFoundError";
import { IUserRepository } from "../../../repositories/IUserRepository";

export class FindUserUseCase {
    constructor(private readonly userRepository: IUserRepository) {}

    async execute(id: number) {
        const user = await this.userRepository.findById(id)
        if(!user) throw new NotFoundError('User not found')

        return user
    }
}