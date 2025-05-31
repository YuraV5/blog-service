import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { CreateUserDto } from "./dto/createUserWithPassword.dto";
import { UpdateUserDto } from "./dto/updateUser.dto";
import { UsersRepository } from "./repository/users.repository";
import { TUser } from "./types/users.type";
import { IUsersService } from "./interfaces/users.service.interface";
import { GoogleProfileDto } from "./dto/createUserWithGoogle.dto";
import { FacebookProfileDto } from "./dto/cresteUserWithFacebook.dto";

@Injectable()
export class UsersService implements IUsersService {
  constructor(private readonly usersRepo: UsersRepository) {}

  async createWithPassword(inp: CreateUserDto): Promise<TUser> {
    const existing = await this.usersRepo.getByEmail(inp.email);
    if (existing) {
      throw new BadRequestException(`User with email ${inp.email} already exists`);
    }

    const createUser = await this.usersRepo.create(inp);
    return createUser;
  }

  async getAll(): Promise<TUser[] | []> {
    const users = await this.usersRepo.getAll();
    return users;
  }

  async getOneById(id: number): Promise<TUser> {
    const user = await this.usersRepo.getOneById(id);
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }

  async updateById(id: number, updateDto: UpdateUserDto): Promise<TUser> {
    const existing = await this.usersRepo.getOneById(id);
    if (!existing) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    const updatedUser = await this.usersRepo.updateById(id, updateDto);
    return updatedUser;
  }

  async deleteById(id: number): Promise<void> {
    const existing = await this.usersRepo.getOneById(id);
    if (!existing) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    await this.usersRepo.deleteById(id);
  }

  async createWithGoogle(profile: GoogleProfileDto): Promise<any> {}

  async createWithFacebook(profile: FacebookProfileDto): Promise<any> {}
}
