import * as Joi from "joi";

export const validSchema = Joi.object({
  NODE_ENV: Joi.string().valid("dev", "prod").default("dev"),
  PORT: Joi.number().port().default(4000),
  APP_NAME: Joi.string().required()
});
