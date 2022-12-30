import { PrismaClient } from '@prisma/client'
import { IUser } from '../../app/interfaces/IUser';
import { IUserFilter } from '../../app/interfaces/IUserFilter';
import { ICreateUserDTO } from "../../useCases/user/createUser/CreateUserDTO"
import { IUserRepository } from "../IUserRepository";

const prisma = new PrismaClient()

export class UserRepository implements IUserRepository {
    async save(user: ICreateUserDTO): Promise<void> {
        await prisma.users.create({
            data: user
        })
    }

    async find(filter?: IUserFilter) {
        return await prisma.users.findMany({where: filter}) 
    }

    async findById(id: number) {
        return await prisma.users.findUnique({where: {id: id}})
    }

    async update(payload: IUser, id: number) {
        //return await prisma.users.update({data: payload, where: {id: id}})
        return true
    }

    async delete(id: number): Promise<void> {
        await prisma.users.delete({where: {id: id}})
    }
}