export interface IHashService {
  createHash(data: string): Promise<string>;
  compareHash(data: string, hash: string): Promise<boolean>;
}
