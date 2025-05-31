import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ConfigService } from "@nestjs/config";
import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const conf = app.get(ConfigService);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      stopAtFirstError: true,
      validationError: { target: false, value: false }
    })
  );

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
