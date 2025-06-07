import { Type } from "class-transformer";
import { IsNotEmpty, Min } from "class-validator";

export class ParamIdDto {
  @Type(() => Number)
  @IsNotEmpty()
  @Min(1, { message: "parameter is wrong" })
  id: number;
}
