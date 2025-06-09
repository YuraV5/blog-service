import { Request } from "express";
import { TUser } from "../../modules/users/types/users.type";
import { TUserDeviceInfo, TUserGeoInfo } from "../types";

export interface AppModifyRequest extends Request {
  userDeviceInfo: TUserDeviceInfo;
  userGeoInfo: TUserGeoInfo;
  user?: TUser;
}
