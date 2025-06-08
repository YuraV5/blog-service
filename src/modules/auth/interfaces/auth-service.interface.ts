import { TMessage } from "../../../common/types";
import { CreateUserDto } from "../../users/dto";
import { TJwtTokens } from "../types";
import { TSignIn } from "../types/auth.type";

export interface IAuthService {
  signIn(input: TSignIn): Promise<TJwtTokens>;
  signUp(input: CreateUserDto): Promise<TMessage>;
  logout(userId: number): Promise<void>;
  refreshToken(token: string): Promise<{ accessToken: string; refreshToken?: string }>;
  changePassword(userId: number, newPassword: string): Promise<void>;
}
