import { CreateUserDto, GoogleProfileDto, UpdateUserDto } from "../dto";
import { TUser } from "../types/users.type";

export interface IUsersService {
  createWithPassword(inp: CreateUserDto): Promise<TUser>;
  getAll(): Promise<TUser[] | []>;
  getOneById(id: number): Promise<TUser>;
  updateById(id: number, inp: UpdateUserDto): Promise<TUser>;
  deleteById(id: number): Promise<void>;
  createWithProvider(profile: GoogleProfileDto): Promise<TUser>;
  getByEmail(email: string): Promise<TUser>;
}
