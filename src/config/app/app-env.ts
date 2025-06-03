export default () => ({
  app: {
    nodeEnv: process.env.NODE_ENV,
    port: parseInt(process.env.PORT ?? "4000", 10),
    appName: process.env.APP_NAME,
    originCors: process.env.ORIGIN_CORS
  }
});
