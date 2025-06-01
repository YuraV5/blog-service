import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { UsersRepository } from "./repository/users.repository";
import { TCreateUserWithPpassword, TProvider, TUpdateUser, TUser } from "./types/users.type";
import { IUsersService } from "./interfaces/usersService.interface";
import { UsersProfileRepository } from "./repository/usersProfile.repository";

@Injectable()
export class UsersService implements IUsersService {
  constructor(
    private readonly usersRepo: UsersRepository,
    private readonly userProfileRepo: UsersProfileRepository
  ) {}

  async createWithPassword(inp: TCreateUserWithPpassword): Promise<TUser> {
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

  async updateById(id: number, inp: TUpdateUser): Promise<TUser> {
    const existing = await this.usersRepo.getOneById(id);
    if (!existing) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    const updatedUser = await this.usersRepo.updateById(id, inp);
    return updatedUser;
  }

  async deleteById(id: number): Promise<void> {
    const existing = await this.usersRepo.getOneById(id);
    if (!existing) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    await this.usersRepo.deleteById(id);
  }

  async createWithGoogle(profile: TProvider): Promise<any> {
    const createUser = await this.userProfileRepo.cerateWithProvider(profile);
    return createUser;
  }

  async createWithFacebook(profile: TProvider): Promise<any> {
    const createUser = await this.userProfileRepo.cerateWithProvider(profile);
    return createUser;
  }
}
