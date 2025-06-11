import { Strategy } from "passport-local";
import { PassportStrategy } from "@nestjs/passport";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { AuthService } from "../auth.service";
import { TUser } from "../../users/types/users.type";
import { plainToInstance } from "class-transformer";
import { validateOrReject } from "class-validator";
import { SignInUserDto } from "../dtos";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({ usernameField: "email" }); // по дефолту username — змінюємо
  }

  async validate(email: string, password: string): Promise<TUser> {
    const dto = plainToInstance(SignInUserDto, { email, password });
    await validateOrReject(dto).catch(() => {
      throw new UnauthorizedException("Invalid email or password");
    });

    const user = await this.authService.validateUser(email, password);
    if (!user) {
      throw new UnauthorizedException("Invalid credentials");
    }
    return user;
  }
}
