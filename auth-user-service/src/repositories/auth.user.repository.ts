import UserModel from "../models/user.model";
import User from "../entities/user.entities";

class UserAuthRespository {
  async createUserBank(data: Partial<User>): Promise<User> {
    const newUserBank = new UserModel(data);
    return await newUserBank.save();
  }

  async getUserBankById(id: string): Promise<User | null> {
    return await UserModel.findById(id).exec();
  }

  async updateUserBank(id: string, data: Partial<User>): Promise<User | null> {
    return await UserModel.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  async deleteUserBank(id: string): Promise<void> {
    await UserModel.findByIdAndDelete(id).exec();
  }

  async getUserBanksByUserId(userId: string): Promise<User[]> {
    return await UserModel.find({ userId }).exec();
  }
}

export default UserAuthRespository;
