import { ProvidersNamesEnum } from "../../../common/enum";
import { TUserDeviceInfo } from "../../../common/types";
import { TUser } from "../../users/types/users.type";
import { TCreateSession, TDeviceSession } from "../types";

export interface IDevicesSessionService {
  createSession(data: TCreateSession): Promise<TDeviceSession>;
  findByRefreshToken(refreshToken: string): Promise<TDeviceSession | null>;
  revokeSession(sessionId: string): Promise<TDeviceSession>;
  findById(sessionId: string): Promise<TDeviceSession | null>;
  deleteById(sessionId: string): Promise<TDeviceSession>;
  findByUserAndDevice(userId: number, device: string): Promise<TDeviceSession | null>;
  getOrCreateSession(
    user: TUser,
    device: TUserDeviceInfo,
    provider: ProvidersNamesEnum
  ): Promise<TDeviceSession>;
}
