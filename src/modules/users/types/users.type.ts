import { UsersRolesEnum } from "../../../common/enum";

export type TUser = {
  id: number;
  email: string;
  name?: string | null;
  password?: string | null;
  photoUrl?: string | null;
  role: UsersRolesEnum;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
};

export type TProvider = {
  provider: string;
  providerId: string;
  profile: string;
  userId: number;
};

export type TCreateUserWithPpassword = {
  name: string;
  email: string;
  password?: string;
  photoUrl?: string;
};

export type TUpdateUser = {
  name?: string;
  photoUrl?: string;
};
