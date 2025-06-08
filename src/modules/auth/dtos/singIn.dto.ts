import { IsString, IsEmail, MinLength, IsNotEmpty, IsOptional } from "class-validator";

export class SignInUserDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsOptional()
  @MinLength(6)
  password: string;
}
