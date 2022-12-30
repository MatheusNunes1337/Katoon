import { IUserFilter } from "../../../interfaces/IUserFilter";
import { IUserRepository } from "../../../repositories/IUserRepository";

export class FindUsersUseCase {
    constructor(private readonly userRepository: IUserRepository) {}

    async execute(filter?: IUserFilter) {
        if(JSON.stringify(filter) == '{}') return await this.userRepository.find()

        return await this.userRepository.findByFilter(filter)
    }
}