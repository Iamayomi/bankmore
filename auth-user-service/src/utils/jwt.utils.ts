import jwt from "jsonwebtoken";
import config from "config";
import UserTypes from "./types/user.type";


export default class JWTUtils {
  private readonly access_secret: string;
  private readonly access_expiresIn: string;
  private readonly refresh_secret: string;
  private readonly refresh_expiresIn: string;

  constructor() {
    this.access_secret = config.get("JWT_ACCESS_SECRET");
    this.access_expiresIn = config.get("JWT_ACCESS_EXPIRES");
    this.refresh_secret = config.get("JWT_REFRESH_SECRET");
    this.refresh_expiresIn = config.get("JWT_REFRESH_EXPIRES");
  }

  public async signAccessToken(data: Pick<UserTypes, "id" | "email">): Promise<string> {
    try {
      const token = jwt.sign(data, this.access_secret, { expiresIn: this.access_expiresIn });
      
      return token;
    } catch (error: any) {
      throw new Error('Error signing the token: ' + error.message);
    }
  }

  public async signRefreshToken(data: Pick<UserTypes, "id" | "email">): Promise<string> {
    try {
      const token = jwt.sign(data, this.refresh_secret, { expiresIn: this.refresh_expiresIn });
      
      return token;
    } catch (error: any) {
      throw new Error('Error signing the token: ' + error.message);
    }
  }

  public verifyToken(token: string): Pick<UserTypes, "id" | "email"> {
    try {
      const decoded = jwt.verify(token, this.access_secret) as Pick<UserTypes, "id" | "email">;
      return decoded;
    } catch (error: any) {
      throw new Error('Invalid token: ' + error.message);
    }
  }
  
}
