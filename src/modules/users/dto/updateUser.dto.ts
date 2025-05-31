import { PartialType } from "@nestjs/mapped-types";
import { CreateUserDto } from "./createUserWithPassword.dto";
import { IsOptional, IsString, IsUrl } from "class-validator";

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsOptional()
  @IsString()
  @IsUrl()
  photoLink?: string;
}
