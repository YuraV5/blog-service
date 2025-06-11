import { DeviceSession } from "../../../../prisma/generated/prisma";
import { TCreateSession, TDeviceSession } from "../types";

export interface IDevicesSessionRepository {
  createSession(data: TCreateSession): Promise<DeviceSession>;
  findByRefreshToken(refreshToken: string): Promise<DeviceSession | null>;
  revokeSession(sessionId: string): Promise<DeviceSession>;
  findById(sessionId: string): Promise<DeviceSession | null>;
  deleteById(sessionId: string): Promise<DeviceSession>;
  checkDeviceSesionByUserIdDevice(userId: number, device: string): Promise<TDeviceSession | null>;
}
