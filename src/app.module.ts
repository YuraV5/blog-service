import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import appEnv from "./config/app/app-env";
import { validSchema } from "./config/valid-schema";
import { PrismaModule } from "./database/prisma/prisma.module";
import { AuthModule } from "./modules/auth/auth.module";
import { UsersModule } from "./modules/users/users.module";
import { minutes, ThrottlerGuard, ThrottlerModule } from "@nestjs/throttler";
import { APP_GUARD } from "@nestjs/core";
import { DeviceSessionModule } from "./modules/device-session/device-session.module";
import { DeviceInfoMiddleware } from "./common/middleware";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appEnv],
      validationSchema: validSchema,
      expandVariables: true
    }),
    ThrottlerModule.forRoot([
      {
        name: "short",
        ttl: minutes(1),
        limit: 5
      },
      {
        name: "medium",
        ttl: minutes(10),
        limit: 20
      },
      {
        name: "long",
        ttl: minutes(60),
        limit: 100
      }
    ]),
    UsersModule,
    AuthModule,
    PrismaModule,
    DeviceSessionModule
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard
    }
  ]
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(DeviceInfoMiddleware).forRoutes("*path");
  }
}
