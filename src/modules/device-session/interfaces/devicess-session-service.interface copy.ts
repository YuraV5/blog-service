import { TCreateSession, TDeviceSession } from "../types";

export interface IDevicesSessionService {
  createSession(data: TCreateSession): Promise<TDeviceSession>;
  findByRefreshToken(refreshToken: string): Promise<TDeviceSession | null>;
  revokeSession(sessionId: string): Promise<TDeviceSession>;
  findById(sessionId: string): Promise<TDeviceSession | null>;
  deleteById(sessionId: string): Promise<TDeviceSession>;
}
