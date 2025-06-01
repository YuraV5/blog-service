import { GoogleProfileDto } from "../dto/createUserWithGoogle.dto";
import { CreateUserDto } from "../dto/createUserWithPassword.dto";
import { FacebookProfileDto } from "../dto/cresteUserWithFacebook.dto";
import { UpdateUserDto } from "../dto/updateUser.dto";
import { TUser } from "../types/users.type";

export interface IUsersService {
  createWithPassword(inp: CreateUserDto): Promise<TUser>;
  getAll(): Promise<TUser[] | []>;
  getOneById(id: number): Promise<TUser>;
  updateById(id: number, inp: UpdateUserDto): Promise<TUser>;
  deleteById(id: number): Promise<void>;
  createWithGoogle(profile: GoogleProfileDto): Promise<TUser>;
  createWithFacebook(profile: FacebookProfileDto): Promise<TUser>;
}
