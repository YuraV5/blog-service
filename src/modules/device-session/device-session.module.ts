import { Module } from "@nestjs/common";
import { DeviceSessionService } from "./device-session.service";
import { DeviceSessionRepository } from "./repository";
import { PrismaModule } from "../../database/prisma/prisma.module";
import { EXCEPTION_HANDLER_SERVICE } from "../../common/consts";
import { ExceptionHandlerService } from "../../common/exceptions";

@Module({
  imports: [PrismaModule],
  providers: [
    DeviceSessionService,
    DeviceSessionRepository,
    { provide: EXCEPTION_HANDLER_SERVICE, useClass: ExceptionHandlerService }
  ],
  exports: [DeviceSessionService]
})
export class DeviceSessionModule {}
