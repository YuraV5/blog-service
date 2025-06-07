import { ExceptionFilter, Catch, ArgumentsHost, HttpException, Logger } from "@nestjs/common";
import { Request, Response } from "express";

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(HttpExceptionFilter.name);

  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();
    const path = request.url;
    const message: string = exception.message;
    const originErrMsg = exception.getResponse() as { message: string | string[] };

    const errorResponse = {
      statusCode: status,
      timestamp: new Date().toISOString(),
      path,
      method: request.method,
      message
    };

    this.logger.warn(
      `${request.method} ${request.url} ${status} - ${originErrMsg.message.toString()}`
    );

    response.status(status).json(errorResponse);
  }
}
