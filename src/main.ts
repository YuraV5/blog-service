import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ConfigService } from "@nestjs/config";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const conf = app.get(ConfigService);

  const port = conf.get<number>("app.port") ?? 4000;
  await app.listen(port);
}
bootstrap()
  .then(() => {
    console.log("✅ App successfully started");
  })
  .catch(error => {
    console.error("❌ Error during bootstrap", error);
  });
