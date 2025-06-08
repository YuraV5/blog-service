import { User } from "../../../../prisma/generated/prisma";
import { CreateUserDto } from "../dto";
import { UpdateUserDto } from "../dto/updateUser.dto";

export interface IUsersRepository {
  getByEmail(email: string): Promise<User | null>;
  getAll(): Promise<User[] | []>;
  getOneById(id: number): Promise<User | null>;
  create(inp: CreateUserDto): Promise<User>;
  updateById(id: number, inp: UpdateUserDto): Promise<User>;
  deleteById(id: number): Promise<void>;
}
