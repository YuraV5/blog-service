import { Request } from "express";
import { TDeviceInfo } from "../../modules/device-session/types";
import { TUser } from "../../modules/users/types/users.type";

export interface AppModifyRequest extends Request {
  deviceInfo: TDeviceInfo;
  user?: TUser;
}
