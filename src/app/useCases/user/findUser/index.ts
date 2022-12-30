import { UserRepository } from "../../../repositories/implementations/UserRepository";
import { FindUserController } from "./FindUserController";
import { FindUserUseCase } from "./FindUserUseCase";

const userRepository = new UserRepository()

const findUserUseCase = new FindUserUseCase(userRepository)

const findUserController = new FindUserController(findUserUseCase)

export {findUserController}