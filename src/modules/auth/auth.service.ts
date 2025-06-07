import { Injectable } from "@nestjs/common";
import { IAuthService } from "./interfaces/auth-service.interface";
import { CreateUserDto } from "../users/dto/createUserWithPassword.dto";

@Injectable()
export class AuthService implements IAuthService {
  signIn(email: string): Promise<any> {
    console.log(email);
    throw new Error("Method not implemented.");
  }
  signUp(input: CreateUserDto): Promise<any> {
    console.log(input);
    throw new Error("Method not implemented.");
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
}
