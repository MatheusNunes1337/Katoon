import { UserRepository } from "../../../repositories/implementations/UserRepository";
import { FindUsersController } from "./FindUsersController";
import { FindUsersUseCase } from "./FindUsersUseCase";

const userRepository = new UserRepository()

const findUsersUseCase = new FindUsersUseCase(userRepository)

const findUsersController = new FindUsersController(findUsersUseCase)

export {findUsersController}