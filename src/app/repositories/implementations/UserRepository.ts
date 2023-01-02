import { PrismaClient } from '@prisma/client'
import { IUser } from '../../interfaces/IUser';
import { IUserFilter } from '../../interfaces/IUserFilter';
import { ICreateUserDTO } from "../../useCases/user/createUser/CreateUserDTO"
import { IUpdateUserDTO } from '../../useCases/user/updateUser/UpdateUserDTO';
import { IUserRepository } from "../IUserRepository";

const prisma = new PrismaClient()

const selectedFields = {
    username: true, 
    email: true, 
    notes: true
}

export class UserRepository implements IUserRepository {
    async save(user: ICreateUserDTO): Promise<void> {
        await prisma.users.create({
            data: user
        })
    }

    async find() {
        return await prisma.users.findMany({select: selectedFields})     
    }

    async findByFilter(filter?: IUserFilter) {
        return await prisma.users.findMany({where: 
            {
                OR: [{username: filter?.username}, {email: filter?.email}]
            }, select: selectedFields    
        }) 
    }

    async findById(id: number) {
        return await prisma.users.findUnique({where: {id: id}, select: selectedFields })
    }

    async update(payload: IUpdateUserDTO, id: number) {
        return await prisma.users.update({where: {id: id}, data: payload, select: selectedFields})
    }

    async delete(id: number): Promise<void> {
        await prisma.users.delete({where: {id: id}})
    }
}