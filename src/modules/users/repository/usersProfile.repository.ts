import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../../database/prisma/prisma.service";
import { TProvider } from "../types/users.type";
import { UserProvider } from "../../../../prisma/generated/prisma";

@Injectable()
export class UsersProfileRepository {
  constructor(private readonly db: PrismaService) {}

  async cerateWithProvider(profile: TProvider): Promise<UserProvider> {
    return await this.db.userProvider.create({ data: profile });
  }
}
