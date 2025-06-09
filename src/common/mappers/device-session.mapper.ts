import { DeviceSession, ProviderName } from "../../../prisma/generated/prisma";
import { TDeviceSession } from "../../modules/device-session/types";
import { ProvidersNamesEnum } from "../enum";

const prismaToAppProvider = (provider: ProviderName): ProvidersNamesEnum => {
  switch (provider) {
    case ProviderName.EMAIL:
      return ProvidersNamesEnum.EMAIL;
    case ProviderName.GOOGLE:
      return ProvidersNamesEnum.GOOGLE;
    case ProviderName.FACEBOOK:
      return ProvidersNamesEnum.FACEBOOK;
    default:
      throw new Error(`Unknown provider: ${String(provider)}`);
  }
};

export class DeviceSessionMapper {
  static toDomain(this: void, session: DeviceSession): TDeviceSession {
    return {
      id: session.id,
      userId: session.userId,
      provider: prismaToAppProvider(session.provider),
      providerId: session.providerId ?? null,
      deviceInfo: session.deviceInfo ?? null,
      refreshToken: session.refreshToken,
      revoked: session.revoked,
      expiresAt: (session.expiresAt ?? null) as Date | null,
      createdAt: session.createdAt,
      updatedAt: session.updatedAt
    };
  }

  static toDomainArray(sessions: DeviceSession[]): TDeviceSession[] {
    return sessions.map(DeviceSessionMapper.toDomain);
  }
}
