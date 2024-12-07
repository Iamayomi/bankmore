import bcrypt from "bcryptjs";
import UserTypes from "../utils/types/user.type";

class UserEntities {

  private user: UserTypes;

  constructor(user: UserTypes) {
    this.user = user;
  }

  public async generateAccount(): Promise<string> {
    const generateAccountNumber = (length = 10): string => {
        const digits = '0123456789';
        let accountNumber = '';
        for (let i = 0; i < length; i++) {
          accountNumber += digits[Math.floor(Math.random() * digits.length)];
        }
        return accountNumber;
      };
    
      return generateAccountNumber();
    }

    // public validateAccountNumber(): boolean {
    //   return /^\d{10}$/.test(this.accountNumber);
    // }

  // user password Validation
  public async validatePassword(userPassword: string): Promise<boolean> {
    return bcrypt.compare(userPassword, this.user.password); 
  }
}

export default UserEntities;
