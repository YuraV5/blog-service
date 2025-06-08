import { BadRequestException, Inject, Injectable } from "@nestjs/common";
import { DeviceSessionRepository } from "./repository";
import { IDevicesSessionService } from "./interfaces/devicess-session-service.interface copy";
import { TCreateSession, TDeviceSession } from "./types";
import { EXCEPTION_HANDLER_SERVICE } from "../../common/consts";
import { ExceptionHandlerService } from "../../common/exceptions";
import { prismaToAppProvider } from "../../common/mappers";

@Injectable()
export class DeviceSessionService implements IDevicesSessionService {
  constructor(
    private readonly deviceSessionRepo: DeviceSessionRepository,
    @Inject(EXCEPTION_HANDLER_SERVICE) private readonly errorService: ExceptionHandlerService
  ) {}

  async createSession(data: TCreateSession): Promise<TDeviceSession> {
    try {
      const session = await this.deviceSessionRepo.createSession(data);
      return { ...session, provider: prismaToAppProvider(session.provider) };
    } catch (error) {
      this.errorService.handleError(error as Error);
    }
  }

  async findByRefreshToken(refreshToken: string): Promise<TDeviceSession | null> {
    try {
      const session = await this.deviceSessionRepo.findByRefreshToken(refreshToken);
      if (!session) {
        throw new BadRequestException("session not found");
      }
      return { ...session, provider: prismaToAppProvider(session.provider) };
    } catch (error) {
      this.errorService.handleError(error as Error);
    }
  }

  async revokeSession(sessionId: string): Promise<TDeviceSession> {
    try {
      const session = await this.deviceSessionRepo.revokeSession(sessionId);
      return { ...session, provider: prismaToAppProvider(session.provider) };
    } catch (error) {
      this.errorService.handleError(error as Error);
    }
  }

  async findById(sessionId: string): Promise<TDeviceSession | null> {
    try {
      const session = await this.deviceSessionRepo.findById(sessionId);
      if (!session) {
        throw new BadRequestException("session is missing");
      }
      return { ...session, provider: prismaToAppProvider(session.provider) };
    } catch (error) {
      this.errorService.handleError(error as Error);
    }
  }

  async deleteById(sessionId: string): Promise<TDeviceSession> {
    try {
      const session = await this.deviceSessionRepo.deleteById(sessionId);
      if (!session) {
        throw new BadRequestException("session is missing");
      }
      return { ...session, provider: prismaToAppProvider(session.provider) };
    } catch (error) {
      this.errorService.handleError(error as Error);
    }
  }
}
