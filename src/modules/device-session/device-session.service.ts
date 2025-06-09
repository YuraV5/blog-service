import {
  BadRequestException,
  Inject,
  Injectable,
  InternalServerErrorException,
  UnauthorizedException
} from "@nestjs/common";
import { DeviceSessionRepository } from "./repository";
import { IDevicesSessionService } from "./interfaces/devicess-session-service.interface copy";
import { TCreateSession, TDeviceSession } from "./types";
import { EXCEPTION_HANDLER_SERVICE } from "../../common/consts";
import { ExceptionHandlerService } from "../../common/exceptions";
import { ProvidersNamesEnum } from "../../common/enum";

@Injectable()
export class DeviceSessionService implements IDevicesSessionService {
  constructor(
    private readonly deviceSessionRepo: DeviceSessionRepository,
    @Inject(EXCEPTION_HANDLER_SERVICE) private readonly errorService: ExceptionHandlerService
  ) {}

  async createSession(data: TCreateSession): Promise<TDeviceSession> {
    try {
      const session = await this.deviceSessionRepo.createSession(data);
      return session;
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
      return session;
    } catch (error) {
      this.errorService.handleError(error as Error);
    }
  }

  async revokeSession(sessionId: string): Promise<TDeviceSession> {
    try {
      const session = await this.deviceSessionRepo.revokeSession(sessionId);
      return session;
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
      return session;
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
      return session;
    } catch (error) {
      this.errorService.handleError(error as Error);
    }
  }

  async updateSession(sessionId: string, data: Partial<TDeviceSession>): Promise<TDeviceSession> {
    try {
      await this.findById(sessionId);
      const session = await this.deviceSessionRepo.updateSession(sessionId, data);
      if (!session) {
        throw new InternalServerErrorException();
      }
      return session;
    } catch (error) {
      this.errorService.handleError(error as Error);
    }
  }

  async createInitialSession(
    userId: number,
    provider: ProvidersNamesEnum,
    device: string
  ): Promise<TDeviceSession> {
    const session = await this.deviceSessionRepo.createSession({
      userId,
      provider,
      refreshToken: "",
      deviceInfo: device
    });

    if (!session) {
      throw new InternalServerErrorException("failed to create session");
    }

    return session;
  }

  async validateSession(sessionId: string): Promise<TDeviceSession> {
    const session = await this.deviceSessionRepo.findById(sessionId);

    if (!session) {
      throw new UnauthorizedException("Session not found");
    }

    if (session.revoked) {
      throw new UnauthorizedException("Session revoked");
    }

    if (session.expiresAt && session.expiresAt < new Date()) {
      throw new UnauthorizedException("Session expired");
    }

    return session;
  }
}
