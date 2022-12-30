import { IUser } from "../interfaces/IUser"
import { IUserFilter } from "../interfaces/IUserFilter"
import { ICreateUserDTO } from "../useCases/user/createUser/CreateUserDTO"
import { IUpdateUserDTO } from "../useCases/user/updateUser/UpdateUserUseCase"

export interface IUserRepository {
    save(user: ICreateUserDTO): Promise<void>
    find(): Promise<Array<any>>
    findByFilter(filter?: IUserFilter): Promise<Array<any>>
    findById(id: number): Promise<any>
    update(user: IUpdateUserDTO, id: number): Promise<any>
    delete(id: number): Promise<void>
}