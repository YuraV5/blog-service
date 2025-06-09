import { TCreateUserWithPpassword, TUpdateUser, TUser } from "../types/users.type";

export interface IUsersRepository {
  getByEmail(email: string): Promise<TUser | null>;
  getAll(): Promise<TUser[]>;
  getOneById(id: number): Promise<TUser | null>;
  create(inp: TCreateUserWithPpassword): Promise<TUser>;
  updateById(id: number, inp: TUpdateUser): Promise<TUser>;
  deleteById(id: number): Promise<void>;
}
