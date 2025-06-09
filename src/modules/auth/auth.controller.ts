import { Body, Controller, Get, Post, Req, UseGuards } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { TMessage } from "../../common/types";
import { SignUpUserDto } from "./dtos";
import { LocalAuthGuard } from "./guards";
import { Request } from "express";
import { TJwtTokens } from "./types";
import { TUser } from "../users/types/users.type";
import { UAParser } from "ua-parser-js";
import { AppModifyRequest } from "../../common/interfaces";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("sign-up/email")
  async signUp(@Body() input: SignUpUserDto): Promise<TMessage> {
    return await this.authService.signUp(input);
  }

  @UseGuards(LocalAuthGuard)
  @Post("sign-in/email")
  async signIn(@Req() req: AppModifyRequest): Promise<TJwtTokens> {
    const user = req.user as TUser;
    const device = req.deviceInfo;
    return await this.authService.signInWithEmail(user, device);
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

  @Get("device")
  device(@Req() req: AppModifyRequest): any {
    const ua = req.headers["user-agent"] || "";
    const parser = new UAParser(ua);
    const device = parser.getDevice();
    console.log(req.deviceInfo);
    return device;
  }
}
