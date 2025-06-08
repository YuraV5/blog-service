import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../../database/prisma/prisma.service";
import { DeviceSession } from "../../../../prisma/generated/prisma";
import { TCreateSession } from "../types";
import { IDevicesSessionRepository } from "../interfaces";

@Injectable()
export class DeviceSessionRepository implements IDevicesSessionRepository {
  constructor(private readonly db: PrismaService) {}

  async createSession(data: TCreateSession): Promise<DeviceSession> {
    return this.db.deviceSession.create({
      data
    });
  }

  async findByRefreshToken(refreshToken: string): Promise<DeviceSession | null> {
    return this.db.deviceSession.findFirst({
      where: { refreshToken, revoked: false }
    });
  }

  async revokeSession(sessionId: string): Promise<DeviceSession> {
    return this.db.deviceSession.update({
      where: { id: sessionId },
      data: { revoked: true }
    });
  }

  async findById(sessionId: string): Promise<DeviceSession | null> {
    return this.db.deviceSession.findUnique({
      where: { id: sessionId }
    });
  }

  async deleteById(sessionId: string): Promise<DeviceSession> {
    return this.db.deviceSession.delete({
      where: { id: sessionId }
    });
  }
}
