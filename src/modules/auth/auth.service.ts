import { BadRequestException, ConflictException, Inject, Injectable } from "@nestjs/common";
import { TSignIn, TSignUp } from "./types/auth.type";
import { UsersService } from "../users/users.service";
import { EXCEPTION_HANDLER_SERVICE } from "../../common/consts";
import { TMessage } from "../../common/types";
import { TUser } from "../users/types/users.type";
import { IAuthService } from "./interfaces";
import { ExceptionHandlerService } from "../../common/exceptions";
import { HashService } from "./services";
import { TokenService } from "./services/token.service";
import { TJwtTokens } from "./types";

@Injectable()
export class AuthService implements IAuthService {
  constructor(
    private readonly userServ: UsersService,
    private readonly hash: HashService,
    private readonly tokenServ: TokenService,
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

  async signIn(input: TSignIn): Promise<TJwtTokens> {
    try {
      const { email, password } = input;
      const user = await this.checkUserByEmail(email);
      if (!user) {
        throw new BadRequestException("user not found");
      }
      const checkPassword = await this.hash.compareHash(user.password!, password);
      if (!checkPassword) {
        throw new BadRequestException();
      }

      const [accessToken, refreshToken] = await Promise.all([
        this.tokenServ.generateAccessToken({ sub: user.id, role: user.role }),
        this.tokenServ.generateRefreshToken({
          sub: user.id,
          sid: "change to real sid uuid",
          sessionId: "sessionId"
        })
      ]);

      return { accessToken, refreshToken };
    } catch (error) {
      this.errorService.handleError(error as Error);
    }
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

  private async checkUserByEmail(email: string): Promise<TUser> {
    return await this.userServ.getByEmail(email);
  }
}
