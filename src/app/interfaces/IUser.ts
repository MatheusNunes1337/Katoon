import { INotes } from "./INote";

export interface IUser {
    id: number,
    username: string,
    email: string,
    password: string,
    notes: INotes[]
}