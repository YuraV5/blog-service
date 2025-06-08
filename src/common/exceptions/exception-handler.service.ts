import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
  ConflictException,
  Logger
} from "@nestjs/common";
import { PrismaClientKnownRequestError } from "../../../prisma/generated/prisma/runtime/library";

@Injectable()
export class ExceptionHandlerService {
  private readonly logger = new Logger(ExceptionHandlerService.name);

  handleError(error: Error): never {
    if (error instanceof PrismaClientKnownRequestError) {
      return this.handleDBError(error);
    }

    throw error;
  }

  private handleDBError(error: PrismaClientKnownRequestError): never {
    switch (error.code) {
      case "P2002":
        this.logger.warn(`Duplicate entry error`, error);
        throw new ConflictException("Record already exists");
      case "P2025":
        this.logger.warn(`[Record not found`, error);
        throw new NotFoundException("Record not found");
      default:
        this.logger.error(`Unhandled DB error`, error);
        throw new InternalServerErrorException("Unexpected database error");
    }
  }
}
