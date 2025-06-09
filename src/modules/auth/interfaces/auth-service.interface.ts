import { TMessage, TUserDeviceInfo } from "../../../common/types";
import { CreateUserDto } from "../../users/dto";
import { TUser } from "../../users/types/users.type";
import { TJwtTokens } from "../types";

export interface IAuthService {
  signInWithEmail(user: TUser, device: TUserDeviceInfo): Promise<TJwtTokens>;
  signUp(input: CreateUserDto): Promise<TMessage>;
  logout(userId: number): Promise<void>;
  refreshToken(token: string): Promise<{ accessToken: string; refreshToken?: string }>;
  changePassword(userId: number, newPassword: string): Promise<void>;
}
