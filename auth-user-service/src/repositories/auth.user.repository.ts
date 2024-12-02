import UserModel from "../models/user.model";
import UserTypes from "../utils/types/user.type";


class UserAuthRepository {

  public async createUser(data: Partial<UserTypes>): Promise<UserTypes> {
    const newUser = new UserModel(data);
    return await newUser.save();
  }

  // public async getUserById(id: string): Promise<User | null> {
  //   return await UserModel.findById(id).exec();
  // }

  // public async updateUser(id: string, data: Partial<User>): Promise<User | null> {
  //   return await UserModel.findByIdAndUpdate(id, data, { new: true }).exec();
  // }

  // public async deleteUser(id: string): Promise<void> {
  //   await UserModel.findByIdAndDelete(id).exec();
  // }

  // public async getAllUser(): Promise<User[]> {
  //   return await UserModel.find().exec();
  // }
}

export default UserAuthRepository;
