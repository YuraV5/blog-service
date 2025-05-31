import { CreateUserDto } from "../dto/createUserWithPassword.dto";
import { UpdateUserDto } from "../dto/updateUser.dto";
import { TUser } from "../types/users.type";

export interface IUsersService {
  createWithPassword(inp: CreateUserDto): Promise<TUser>;
  getAll(): Promise<TUser[] | []>;
  getOneById(id: number): Promise<TUser>;
  updateById(id: number, inp: UpdateUserDto): Promise<TUser>;
  deleteById(id: number): Promise<void>;
}
