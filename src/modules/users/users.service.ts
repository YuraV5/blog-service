import { BadRequestException, Inject, Injectable, NotFoundException } from "@nestjs/common";
import { TCreateUserWithPpassword, TProvider, TUpdateUser, TUser } from "./types/users.type";
import { IUsersService } from "./interfaces/users-service.interface";
import { EXCEPTION_HANDLER_SERVICE } from "../../common/consts";
import { ExceptionHandlerService } from "../../common/exceptions/exception-handler.service";
import { UsersRepository, UsersProfileRepository } from "./repository";

@Injectable()
export class UsersService implements IUsersService {
  constructor(
    private readonly usersRepo: UsersRepository,
    private readonly userProfileRepo: UsersProfileRepository,
    @Inject(EXCEPTION_HANDLER_SERVICE) private readonly errorService: ExceptionHandlerService
  ) {}

  async createWithPassword(inp: TCreateUserWithPpassword): Promise<TUser> {
    try {
      const existing = await this.usersRepo.getByEmail(inp.email);
      if (existing) {
        throw new BadRequestException(`User with email ${inp.email} already exists`);
      }

      const user = await this.usersRepo.create(inp);
      return user;
    } catch (error) {
      this.errorService.handleError(error as Error);
    }
  }

  async getAll(): Promise<TUser[]> {
    try {
      const users = await this.usersRepo.getAll();
      return users;
    } catch (error) {
      this.errorService.handleError(error as Error);
    }
  }

  async getOneById(id: number): Promise<TUser> {
    try {
      const user = await this.usersRepo.getOneById(id);
      if (!user) {
        throw new NotFoundException(`User with ID ${id} not found`);
      }
      return user;
    } catch (error) {
      this.errorService.handleError(error as Error);
    }
  }

  async updateById(id: number, inp: TUpdateUser): Promise<TUser> {
    try {
      await this.getOneById(id);

      const user = await this.usersRepo.updateById(id, inp);
      return user;
    } catch (error) {
      this.errorService.handleError(error as Error);
    }
  }

  async deleteById(id: number): Promise<void> {
    try {
      await this.getOneById(id);

      await this.usersRepo.deleteById(id);
      return;
    } catch (error) {
      this.errorService.handleError(error as Error);
    }
  }

  async createWithProvider(profile: TProvider): Promise<any> {
    try {
      const createUser = await this.userProfileRepo.cerateWithProvider(profile);
      return createUser;
    } catch (error) {
      this.errorService.handleError(error as Error);
    }
  }

  async getByEmail(email: string): Promise<TUser | null> {
    try {
      const user = await this.usersRepo.getByEmail(email);

      return user;
    } catch (error) {
      this.errorService.handleError(error as Error);
    }
  }
}
