import { Injectable, InternalServerErrorException, Logger } from "@nestjs/common";
import * as bcrypt from "bcrypt";
import { IHashService } from "../interfaces";

@Injectable()
export class HashService implements IHashService {
  private readonly saltRounds = 10;
  private readonly logger = new Logger(HashService.name);

  async createHash(data: string): Promise<string> {
    try {
      const salt = await bcrypt.genSalt(this.saltRounds);
      const hash = await bcrypt.hash(data, salt);
      return hash;
    } catch (error) {
      this.logger.error("Error hashing", error);
      throw new InternalServerErrorException("Error hashing");
    }
  }

  async compareHash(data: string, hash: string): Promise<boolean> {
    try {
      return await bcrypt.compare(data, hash);
    } catch (error) {
      this.logger.error("Error comparing", error);
      throw new InternalServerErrorException("Error comparing");
    }
  }
}
