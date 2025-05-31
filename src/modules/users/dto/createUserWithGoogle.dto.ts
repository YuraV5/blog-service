import { IsString, IsNotEmpty, IsOptional } from "class-validator";

export class GoogleProfileDto {
  @IsString()
  @IsNotEmpty()
  providerId: string;

  @IsString()
  @IsOptional()
  displayName?: string | null;

  @IsString()
  @IsNotEmpty()
  provider: string;

  @IsString()
  @IsOptional()
  profile?: string | null;
}
