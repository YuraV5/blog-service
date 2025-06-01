import { IsString, IsEmail, MinLength, IsNotEmpty, IsOptional } from "class-validator";

export class CreateUserDto {
  @IsString()
  @MinLength(3)
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsOptional() // Додано, бо пароль не завжди обов’язковий (наприклад, OAuth)
  @MinLength(6)
  password: string;
}
