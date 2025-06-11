import { Injectable, Logger, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";
import { UAParser } from "ua-parser-js";
import { TUserDeviceInfo } from "../types";

@Injectable()
export class DeviceInfoMiddleware implements NestMiddleware {
  private logger = new Logger(DeviceInfoMiddleware.name);

  use(req: Request, res: Response, next: NextFunction): void {
    const ua = req.headers["user-agent"] || "";
    const parser = new UAParser(ua);

    const deviceName: TUserDeviceInfo = {
      ua,
      device: parser.getDevice(),
      os: parser.getOS(),
      browser: parser.getBrowser()
    };

    this.logger.log("DeviceInfoMiddleware", deviceName);
    req["userDeviceInfo"] = deviceName;
    next();
  }
}
