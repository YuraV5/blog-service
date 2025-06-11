import { Body, Controller, Get, Post, Req, Res, UseGuards } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { TMessage } from "../../common/types";
import { SignUpUserDto } from "./dtos";
import { LocalAuthGuard } from "./guards";
import { TUser } from "../users/types/users.type";
import { UAParser } from "ua-parser-js";
import { AppModifyRequest } from "../../common/interfaces";
import { Response } from "express";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("sign-up/email")
  async signUp(@Body() input: SignUpUserDto): Promise<TMessage> {
    return await this.authService.signUp(input);
  }

  @UseGuards(LocalAuthGuard)
  @Post("sign-in/email")
  async signIn(
    @Req() req: AppModifyRequest,
    @Res({ passthrough: true }) res: Response
  ): Promise<TMessage> {
    const user = req.user as TUser;
    const device = req.userDeviceInfo;

    const { accessToken, refreshToken } = await this.authService.signInWithEmail(user, device);

    // Встановлюємо cookie
    res.cookie("access_token", accessToken, {
      httpOnly: true,
      secure: true, // true в production (з HTTPS)
      sameSite: "lax", // або "strict"
      maxAge: 1000 * 60 * 15 // 15 хв, або як потрібно
    });

    res.cookie("refresh_token", refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      maxAge: 1000 * 60 * 60 * 24 * 7 // 7 днів або інше
    });

    // Можеш також повернути JSON-повідомлення:
    return { message: "Signed in successfully" };
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
    return device;
  }
}
