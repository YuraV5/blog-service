export type TUser = {
  id: number;
  email: string;
  name?: string | null;
  password?: string | null;
  photoUrl?: string | null;
  role: "user" | "admin";
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
};

export type TUserRovider = {
  id: number;
  provider: string;
  providerId: string;
  profile: string | null;
  userId: number;
};
