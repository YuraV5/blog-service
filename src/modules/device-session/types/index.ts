import { ProvidersNamesEnum } from "../../../common/enum";

export type TCreateSession = {
  userId: number;
  provider: ProvidersNamesEnum;
  refreshToken: string;
  deviceInfo?: string;
  providerId?: string;
};

export type TDeviceSession = {
  id: string;
  userId: number;
  provider: ProvidersNamesEnum;
  providerId: string | null;
  deviceInfo: string | null;
  refreshToken: string;
  revoked: boolean;
  expiresAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
};
