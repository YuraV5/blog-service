import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
import { TJwtAccessPayload, TJwtPayload, TJwtTokens } from "../types";
import { TUser } from "../../users/types/users.type";

@Injectable()
export class TokenService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly config: ConfigService
  ) {}

  async generateAccessToken(payload: TJwtAccessPayload): Promise<string> {
    return this.jwtService.signAsync(payload, {
      secret: this.config.get<string>("JWT_ACCESS_SECRET"),
      expiresIn: "15m"
    });
  }

  async generateRefreshToken(payload: TJwtPayload): Promise<string> {
    return this.jwtService.signAsync(payload, {
      secret: this.config.get<string>("JWT_REFRESH_SECRET"),
      expiresIn: "7d"
    });
  }

  async verifyAccessToken(token: string): Promise<TJwtAccessPayload> {
    return this.jwtService.verifyAsync(token, {
      secret: this.config.get<string>("JWT_ACCESS_SECRET")
    });
  }

  async verifyRefreshToken(token: string): Promise<TJwtPayload> {
    return this.jwtService.verifyAsync(token, {
      secret: this.config.get<string>("JWT_REFRESH_SECRET")
    });
  }

  async generateTokens(user: TUser, sessionId: string): Promise<TJwtTokens> {
    const [accessToken, refreshToken] = await Promise.all([
      this.generateAccessToken({ sub: user.id, role: user.role }),
      this.generateRefreshToken({
        sub: user.id,
        sid: sessionId
      })
    ]);
    return { accessToken, refreshToken };
  }

  decodeToken<T>(token: string): T {
    return this.jwtService.decode(token);
  }
}
