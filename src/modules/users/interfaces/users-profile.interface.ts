import { UserProvider } from "../../../../prisma/generated/prisma";
import { TProvider } from "../types/users.type";

export interface IUsersProfile {
  cerateWithProvider(profile: TProvider): Promise<UserProvider>;
}
