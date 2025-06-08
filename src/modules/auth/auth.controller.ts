import { Controller, Get, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { TMessage } from "../../common/types";
import { SignInUserDto, SignUpUserDto } from "./dtos";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("signup")
  async signUp(input: SignUpUserDto): Promise<TMessage> {
    return await this.authService.signUp(input);
  }

  @Post("signin")
  async signIn(input: SignInUserDto): Promise<any> {
    await this.authService.signIn(input);
  }

  @Get("logout")
  logout(userId: number): Promise<void> {
    console.log(userId);
    throw new Error("Method not implemented.");
  }

  @Get("refresh-token")
  refreshToken(token: string): Promise<{ accessToken: string; refreshToken?: string }> {
    console.log(token);
    throw new Error("Method not implemented.");
  }

  @Post("change-password")
  changePassword(userId: number, newPassword: string): Promise<void> {
    console.log(userId, newPassword);
    throw new Error("Method not implemented.");
  }
}
