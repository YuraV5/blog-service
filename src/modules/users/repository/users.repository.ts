import { CreateUserDto } from "../dto/createUserWithPassword.dto";
import { Injectable } from "@nestjs/common";
import { IUsersRepository } from "../interfaces/users.repo.interface";
import { User } from "../../../../prisma/generated/prisma";
import { UpdateUserDto } from "../dto/updateUser.dto";
import { PrismaService } from "../../../database/prisma/prisma.service";

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

  async create(inp: CreateUserDto): Promise<User> {
    return await this.db.user.create({ data: inp });
  }

  async updateById(id: number, data: UpdateUserDto): Promise<User> {
    return await this.db.user.update({ where: { id }, data });
  }

  async deleteById(id: number): Promise<void> {
    await this.db.user.delete({ where: { id } });
  }
}
