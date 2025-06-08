import * as Joi from "joi";

export const validSchema = Joi.object({
  NODE_ENV: Joi.string().valid("dev", "prod").default("dev"),
  PORT: Joi.number().port().required(),
  APP_NAME: Joi.string().default("MyApp"),
  ORIGIN_CORS: Joi.string().required(),
  PG_PROVIDER: Joi.string().valid("postgresql").required(),
  PG_USERNAME: Joi.string().required(),
  PG_PASSWORD: Joi.string().required(),
  PG_HOST: Joi.string().required(),
  PG_PORT: Joi.number().port().required(),
  PG_NAME: Joi.string().required(),
  PG_SCHEMA: Joi.string().required(),
  POSTGRES_URL: Joi.string().uri().required(),
  JWT_REFRESH_SECRET: Joi.string().required(),
  JWT_ACCESS_SECRET: Joi.string().required()
});
