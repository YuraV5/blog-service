export type TJwtPayload = {
  sub: number;
  sid: string;
  sessionId: string;
};

export type TJwtAccessPayload = {
  sub: number;
  role: string;
};

export type TJwtTokens = {
  accessToken: string;
  refreshToken: string;
};
