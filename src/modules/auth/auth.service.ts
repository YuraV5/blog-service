import { ConflictException, Inject, Injectable } from "@nestjs/common";
import { TSignUp } from "./types/auth.type";
import { UsersService } from "../users/users.service";
import { EXCEPTION_HANDLER_SERVICE } from "../../common/consts";
import { TMessage, TUserDeviceInfo } from "../../common/types";
import { TUser } from "../users/types/users.type";
import { IAuthService } from "./interfaces";
import { ExceptionHandlerService } from "../../common/exceptions";
import { HashService } from "./services";
import { TokenService } from "./services/token.service";
import { TJwtTokens } from "./types";
import { DeviceSessionService } from "../device-session/device-session.service";
import { ProvidersNamesEnum } from "../../common/enum";

@Injectable()
export class AuthService implements IAuthService {
  constructor(
    private readonly userServ: UsersService,
    private readonly hash: HashService,
    private readonly tokenServ: TokenService,
    private readonly deviceSessionServ: DeviceSessionService,
    @Inject(EXCEPTION_HANDLER_SERVICE) private readonly errorService: ExceptionHandlerService
  ) {}

  async signUp(input: TSignUp): Promise<TMessage> {
    try {
      const { email, password, name } = input;
      const user = await this.checkUserByEmail(email);
      if (user) {
        throw new ConflictException("Record already exists");
      }

      const hashPassword = await this.hash.createHash(password);
      await this.userServ.createWithPassword({ email, password: hashPassword, name });

      return { message: "success" };
    } catch (error) {
      this.errorService.handleError(error as Error);
    }
  }

  async signInWithEmail(user: TUser, device: TUserDeviceInfo): Promise<TJwtTokens> {
    try {
      const session = await this.deviceSessionServ.createInitialSession(
        user.id,
        ProvidersNamesEnum.EMAIL,
        `${device.device.model}-${device.device.vendor}`
      );

      const { accessToken, refreshToken } = await this.tokenServ.generateTokens(user, session.id);

      const hashToken = await this.hash.createHash(refreshToken);
      await this.deviceSessionServ.updateSession(session.id, {
        refreshToken: hashToken
      });

      return { accessToken, refreshToken };
    } catch (error) {
      this.errorService.handleError(error as Error);
    }
  }

  async validateUser(email: string, password: string): Promise<TUser | null> {
    const user = await this.checkUserByEmail(email);
    if (!user) return null;

    const isValid = await this.hash.compareHash(user.password!, password);
    return isValid ? user : null;
  }

  logout(userId: number): Promise<void> {
    console.log(userId);
    throw new Error("Method not implemented.");
  }

  refreshToken(token: string): Promise<{ accessToken: string; refreshToken?: string }> {
    console.log(token);
    throw new Error("Method not implemented.");
  }

  changePassword(userId: number, newPassword: string): Promise<void> {
    console.log(userId, newPassword);
    throw new Error("Method not implemented.");
  }

  private async checkUserByEmail(email: string): Promise<TUser | null> {
    return await this.userServ.getByEmail(email);
  }
}
