import { Module } from "@nestjs/common";
import { UsersService } from "./users.service";
import { UsersController } from "./users.controller";
import { EXCEPTION_HANDLER_SERVICE } from "../../common/consts";
import { ExceptionHandlerService } from "../../common/exceptions/exception-handler.service";
import { PrismaModule } from "../../database/prisma/prisma.module";
import { UsersRepository, UsersProfileRepository } from "./repository";

@Module({
  imports: [PrismaModule],
  controllers: [UsersController],
  providers: [
    UsersService,
    UsersRepository,
    UsersProfileRepository,
    { provide: EXCEPTION_HANDLER_SERVICE, useClass: ExceptionHandlerService }
  ],
  exports: [UsersService]
})
export class UsersModule {}
