import { Injectable } from "@nestjs/common";
import { DeviceSessionMapper } from "../../../common/mappers";
import { PrismaService } from "../../../database/prisma/prisma.service";
import { IDevicesSessionRepository } from "../interfaces";
import { TCreateSession, TDeviceSession } from "../types";

@Injectable()
export class DeviceSessionRepository implements IDevicesSessionRepository {
  constructor(private readonly db: PrismaService) {}

  async createSession(data: TCreateSession): Promise<TDeviceSession> {
    const session = await this.db.deviceSession.create({ data });
    return DeviceSessionMapper.toDomain(session);
  }

  async findByRefreshToken(refreshToken: string): Promise<TDeviceSession | null> {
    const session = await this.db.deviceSession.findFirst({
      where: { refreshToken, revoked: false }
    });
    return session ? DeviceSessionMapper.toDomain(session) : null;
  }

  async revokeSession(sessionId: string): Promise<TDeviceSession> {
    const session = await this.db.deviceSession.update({
      where: { id: sessionId },
      data: { revoked: true }
    });
    return DeviceSessionMapper.toDomain(session);
  }

  async findById(sessionId: string): Promise<TDeviceSession | null> {
    const session = await this.db.deviceSession.findUnique({
      where: { id: sessionId }
    });
    return session ? DeviceSessionMapper.toDomain(session) : null;
  }

  async deleteById(sessionId: string): Promise<TDeviceSession> {
    const session = await this.db.deviceSession.delete({
      where: { id: sessionId }
    });
    return DeviceSessionMapper.toDomain(session);
  }

  async updateSession(sessionId: string, data: Partial<TDeviceSession>): Promise<TDeviceSession> {
    const session = await this.db.deviceSession.update({
      where: { id: sessionId },
      data
    });
    return DeviceSessionMapper.toDomain(session);
  }
}
