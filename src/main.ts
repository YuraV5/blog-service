import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ConfigService } from "@nestjs/config";
import { ValidationPipe } from "@nestjs/common";
import { GlobalExceptionFilter } from "./common/filters/exceptions/global-exceptions.filter";
import { HttpExceptionFilter } from "./common/filters/exceptions/http-exception.filter";
import helmet from "helmet";
import { json, urlencoded } from "express";
import * as cookieParser from "cookie-parser";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const conf = app.get(ConfigService);

  app.use(cookieParser());
  // Enable CORS for local development
  app.enableCors({
    origin: [conf.get<string>("app.originCors")], // e.g., http://localhost:4000
    credentials: true
  });

  // Set security HTTP headers (prevents XSS, clickjacking, etc.)
  app.use(helmet());

  // Limit request body size to prevent large payload attacks
  app.use(json({ limit: "1mb" }));
  app.use(urlencoded({ extended: true, limit: "1mb" }));

  // Set global route prefix
  app.setGlobalPrefix("api");

  // Global validation pipe for DTOs
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      stopAtFirstError: true,
      validationError: { target: false, value: false }
    })
  );

  // Register global exception filters
  app.useGlobalFilters(new GlobalExceptionFilter(), new HttpExceptionFilter());

  const port = conf.get<number>("app.port");
  await app.listen(port!);
}

bootstrap()
  .then(() => {
    console.log("✅ App successfully started");
  })
  .catch(error => {
    console.error("❌ Error during bootstrap", error);
  });
