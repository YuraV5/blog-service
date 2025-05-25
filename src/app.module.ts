import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import appEnv from "./config/app/app-env";
import { validSchema } from "./config/valid-schema";
import { PrismaModule } from "./database/prisma/prisma.module";
import { AuthModule } from "./modules/auth/auth.module";
import { UsersModule } from "./modules/users/users.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appEnv],
      validationSchema: validSchema,
      expandVariables: true,
      envFilePath: `.env.${process.env.NODE_ENV}`
    }),
    UsersModule,
    AuthModule,
    PrismaModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
