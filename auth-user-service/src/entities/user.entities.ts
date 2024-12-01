class User {
  constructor(
    public id: string,
    public name: string,
    public email: string,
    public passwordHash: string,
    public username: string,
    public profilePicture: string,
    public bio: string,
    public phoneNumber: string,
    public roles: string[],
    public permissions: string[],
    public createdAt: Date,
    public updatedAt: Date,
    public lastLogin: Date,
    public status: "active" | "pending" | "suspended",
    public address: string,
    public preferences: string
  ) {}

//   public validateAccountNumber(): boolean {
//     return /^\d{10}$/.test(this.accountNumber);
//   }
}

export default User;
