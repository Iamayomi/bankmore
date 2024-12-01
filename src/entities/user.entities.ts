class User {
    constructor(
        public id: string,
        public accountNumber: string
     ){}


    public validateAccountNumber(): boolean {
        return /^\d{10}$/.test(this.accountNumber);
      }
}