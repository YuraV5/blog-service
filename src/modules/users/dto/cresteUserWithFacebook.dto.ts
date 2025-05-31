import { IsString, IsNotEmpty, IsOptional } from "class-validator";

export class FacebookProfileDto {
  @IsString()
  @IsNotEmpty()
  providerId: string;

  @IsString()
  @IsOptional()
  name?: string | null;

  @IsString()
  @IsNotEmpty()
  provider: string;

  @IsString()
  @IsOptional()
  profile?: string | null;
}
