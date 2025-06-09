import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { UsersModule } from "../users/users.module";
import { HashService } from "./services";
import { TokenService } from "./services/token.service";
import { EXCEPTION_HANDLER_SERVICE } from "../../common/consts";
import { ExceptionHandlerService } from "../../common/exceptions";
import { DeviceSessionModule } from "../device-session/device-session.module";
import { JwtModule } from "@nestjs/jwt";

@Module({
  imports: [UsersModule, DeviceSessionModule, JwtModule],
  controllers: [AuthController],
  providers: [
    AuthService,
    HashService,
    TokenService,
    { provide: EXCEPTION_HANDLER_SERVICE, useClass: ExceptionHandlerService }
  ]
})
export class AuthModule {}
