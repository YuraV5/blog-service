import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";
import { UAParser } from "ua-parser-js";
import { TUserDeviceInfo } from "../types";

@Injectable()
export class DeviceInfoMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction): void {
    const ua = req.headers["user-agent"] || "";
    const parser = new UAParser(ua);

    const deviceInfo: TUserDeviceInfo = {
      ua,
      device: parser.getDevice(),
      os: parser.getOS(),
      browser: parser.getBrowser()
    };

    req["deviceInfo"] = deviceInfo;
    next();
  }
}
