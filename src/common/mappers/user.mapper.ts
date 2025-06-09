import { User, UsersRoles } from "../../../prisma/generated/prisma";
import { TUser } from "../../modules/users/types/users.type";
import { UsersRolesEnum } from "../enum";

export function prismaToAppUserRole(role: UsersRoles): UsersRolesEnum {
  switch (role) {
    case UsersRoles.USER:
      return UsersRolesEnum.USER;
    case UsersRoles.ADMIN:
      return UsersRolesEnum.ADMIN;
    default:
      throw new Error(`Unknown Prisma role: ${String(role)}`);
  }
}

export class UserMapper {
  static toDomain(this: void, user: User): TUser {
    return {
      id: user.id,
      email: user.email,
      name: user.name,
      photoUrl: user.photoUrl,
      role: prismaToAppUserRole(user.role),
      active: user.active,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt
    };
  }

  static toDomainArray(users: User[]): TUser[] {
    return users.map(UserMapper.toDomain);
  }
}
