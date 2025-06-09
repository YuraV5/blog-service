import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../../database/prisma/prisma.service";
import { TCreateUserWithPpassword, TUpdateUser, TUser } from "../types/users.type";
import { IUsersRepository } from "../interfaces";
import { UserMapper } from "../../../common/mappers";

@Injectable()
export class UsersRepository implements IUsersRepository {
  constructor(private readonly db: PrismaService) {}

  async getByEmail(email: string): Promise<TUser | null> {
    const user = await this.db.user.findUnique({ where: { email } });
    return user ? UserMapper.toDomain(user) : null;
  }

  async getAll(): Promise<TUser[]> {
    const users = await this.db.user.findMany();
    return UserMapper.toDomainArray(users);
  }

  async getOneById(id: number): Promise<TUser | null> {
    const user = await this.db.user.findUnique({ where: { id } });
    return user ? UserMapper.toDomain(user) : null;
  }

  async create(inp: TCreateUserWithPpassword): Promise<TUser> {
    const user = await this.db.user.create({ data: inp });
    return UserMapper.toDomain(user);
  }

  async updateById(id: number, inp: TUpdateUser): Promise<TUser> {
    const user = await this.db.user.update({
      where: { id },
      data: inp
    });
    return UserMapper.toDomain(user);
  }

  async deleteById(id: number): Promise<void> {
    await this.db.user.delete({ where: { id } });
  }
}
