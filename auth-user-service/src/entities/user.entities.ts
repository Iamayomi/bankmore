import bcrypt from "bcryptjs";
import UserTypes from "../utils/types/user.type";

class UserEntities {
  private user: UserTypes;

  constructor(user: UserTypes) {
    this.user = user;
  }

  public async generateAccount(): Promise<string> {
      const digits = "0123456789";
      let length: number = 10
      let accountNumber = "";
      for (let i = 0; i < length; i++) {
        accountNumber += digits[Math.floor(Math.random() * digits.length)];
      }
      return accountNumber;
  };

  // public validateAccountNumber(): boolean {
  //   return /^\d{10}$/.test(this.accountNumber);
  // }

 
}

export default UserEntities;
