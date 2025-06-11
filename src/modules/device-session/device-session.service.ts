import {
  BadRequestException,
  Inject,
  Injectable,
  InternalServerErrorException,
  UnauthorizedException
} from "@nestjs/common";
import { DeviceSessionRepository } from "./repository";
import { TCreateSession, TDeviceSession } from "./types";
import { EXCEPTION_HANDLER_SERVICE } from "../../common/consts";
import { ExceptionHandlerService } from "../../common/exceptions";
import { ProvidersNamesEnum } from "../../common/enum";
import { IDevicesSessionService } from "./interfaces";
import { DEVICE_NO_NAME } from "./const";
import { TUserDeviceInfo } from "../../common/types";
import { TUser } from "../users/types/users.type";

@Injectable()
export class DeviceSessionService implements IDevicesSessionService {
  constructor(
    private readonly deviceSessionRepo: DeviceSessionRepository,
    @Inject(EXCEPTION_HANDLER_SERVICE) private readonly errorService: ExceptionHandlerService
  ) {}

  async findByUserAndDevice(userId: number, device: string): Promise<TDeviceSession | null> {
    try {
      const session = await this.deviceSessionRepo.checkDeviceSesionByUserIdDevice(
        userId,
        device.toLowerCase()
      );

      return session ?? null;
    } catch (error) {
      this.errorService.handleError(error as Error);
    }
  }

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

  async getOrCreateSession(
    user: TUser,
    device: TUserDeviceInfo,
    provider: ProvidersNamesEnum
  ): Promise<TDeviceSession> {
    const deviceName = device ? `${device.device.model}-${device.device.type}` : DEVICE_NO_NAME;
    const session = await this.findByUserAndDevice(user.id, deviceName);
    if (session) {
      return session;
    } else {
      const initSession = await this.createInitialSession(user.id, provider, deviceName);
      return initSession;
    }
  }
}
