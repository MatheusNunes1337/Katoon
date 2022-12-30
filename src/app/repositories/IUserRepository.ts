import { IUser } from "../app/interfaces/IUser"
import { IUserFilter } from "../app/interfaces/IUserFilter"
import { ICreateUserDTO } from "../useCases/user/createUser/CreateUserDTO"

export interface IUserRepository {
    save(user: ICreateUserDTO): Promise<void>
    find(filter?: IUserFilter): Promise<Array<any>>
    findById(id: number): Promise<any>
    update(user: IUser, id: number): Promise<any>
    delete(id: number): Promise<void>
}