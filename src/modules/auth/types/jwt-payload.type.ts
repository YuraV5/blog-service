export type TJwtPayload = {
  sub: number;
  sid: string;
};

export type TJwtAccessPayload = {
  sub: number;
  role: string;
};

export type TJwtTokens = {
  accessToken: string;
  refreshToken: string;
};
