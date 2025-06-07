import { Controller, Get, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { CreateUserDto } from "../users/dto/createUserWithPassword.dto";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  signIn(email: string): Promise<any> {
    console.log(email);
    throw new Error("Method not implemented.");
  }

  @Post()
  signUp(input: CreateUserDto): Promise<any> {
    console.log(input);
    throw new Error("Method not implemented.");
  }

  @Get()
  logout(userId: number): Promise<void> {
    console.log(userId);
    throw new Error("Method not implemented.");
  }

  @Get()
  refreshToken(token: string): Promise<{ accessToken: string; refreshToken?: string }> {
    console.log(token);
    throw new Error("Method not implemented.");
  }

  @Post()
  changePassword(userId: number, newPassword: string): Promise<void> {
    console.log(userId, newPassword);
    throw new Error("Method not implemented.");
  }
}
