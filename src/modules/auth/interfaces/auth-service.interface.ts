import { CreateUserDto } from "../../users/dto/createUserWithPassword.dto";

export interface IAuthService {
  signIn(email: string): Promise<any>;
  signUp(input: CreateUserDto): Promise<any>;
  logout(userId: number): Promise<void>;
  refreshToken(token: string): Promise<{ accessToken: string; refreshToken?: string }>;
  changePassword(userId: number, newPassword: string): Promise<void>;
}
