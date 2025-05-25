export default () => ({
  app: {
    nodeEnv: process.env.NODE_ENV,
    port: process.env.PORT,
    appName: process.env.APP_NAME
  }
});
