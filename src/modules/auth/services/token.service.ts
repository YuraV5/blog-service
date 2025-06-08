import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
import { TJwtAccessPayload, TJwtPayload } from "../types";

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

  decodeToken<T>(token: string): T {
    return this.jwtService.decode(token);
  }
}
