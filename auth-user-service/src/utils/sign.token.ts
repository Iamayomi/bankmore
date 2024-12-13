import jwt from "jsonwebtoken";
import config from "config";
import UserTypes from "../utils/types/user.type";


export default class JwtUtilities {
  private readonly secret: string;
  private readonly expiresIn: string;

  constructor() {
    this.secret = config.get("JWT_SECRET");
    this.expiresIn = config.get("JWT_EXPIRES");
  }

  public async signToken(data: Pick<UserTypes, "id" | "email">): Promise<string> {
    try {
      const token = jwt.sign(data, this.secret, { expiresIn: this.expiresIn });
      
      return token;
    } catch (error: any) {
      throw new Error('Error signing the token: ' + error.message);
    }
  }

  public verifyToken(token: string): Pick<UserTypes, "id" | "email"> {
    try {
      const decoded = jwt.verify(token, this.secret) as Pick<UserTypes, "id" | "email">;
      return decoded;
    } catch (error: any) {
      throw new Error('Invalid token: ' + error.message);
    }
  }
  
}

// Usage Example
// const jwtService = new JwtService();
// const token = jwtService.signToken({ id: '12345', email: 'user@example.com' });
// console.log('Signed Token:', token);
