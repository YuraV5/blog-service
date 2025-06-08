export default () => ({
  app: {
    nodeEnv: process.env.NODE_ENV,
    port: parseInt(process.env.PORT ?? "4000", 10),
    appName: process.env.APP_NAME,
    originCors: process.env.ORIGIN_CORS
  },
  jwt: {
    accessToken: process.env.JWT_ACCESS_SECRET,
    refreshToken: process.env.JWT_REFRESH_SECRET
  }
});
