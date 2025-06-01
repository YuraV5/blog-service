import { Injectable } from "@nestjs/common";
import { IUsersRepository } from "../interfaces/usersRepository.interface";
import { User } from "../../../../prisma/generated/prisma";
import { PrismaService } from "../../../database/prisma/prisma.service";
import { TCreateUserWithPpassword, TUpdateUser } from "../types/users.type";

@Injectable()
export class UsersRepository implements IUsersRepository {
  constructor(private readonly db: PrismaService) {}

  async getByEmail(email: string): Promise<User | null> {
    const user = await this.db.user.findUnique({ where: { email } });

    return user ?? null;
  }

  async getAll(): Promise<User[] | []> {
    return await this.db.user.findMany();
  }

  async getOneById(id: number): Promise<User | null> {
    return await this.db.user.findUnique({ where: { id } });
  }

  async create(inp: TCreateUserWithPpassword): Promise<User> {
    return await this.db.user.create({ data: inp });
  }

  async updateById(id: number, inp: TUpdateUser): Promise<User> {
    return await this.db.user.update({
      where: { id },
      data: inp
    });
  }

  async deleteById(id: number): Promise<void> {
    await this.db.user.delete({ where: { id } });
  }
}
