import { IsString, IsEmail, MinLength, IsNotEmpty, IsOptional } from "class-validator";

export class SignUpUserDto {
  @IsString()
  @MinLength(3)
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsOptional()
  @MinLength(6)
  password: string;
}
