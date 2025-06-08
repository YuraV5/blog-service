import { Module } from "@nestjs/common";
import { DeviceSessionService } from "./device-session.service";
import { DeviceSessionRepository } from "./repository";

@Module({
  providers: [DeviceSessionService, DeviceSessionRepository],
  exports: [DeviceSessionService]
})
export class DeviceSessionModule {}
