import UserModel from "../models/user.model";
import UserTypes from "../utils/types/user.type";
import { signinDto, loginDto } from "../dto/user.dto";

class UserAuthRepository {
  public async createUser(data: Partial<UserTypes>): Promise<UserTypes> {
    const userDto = Object.assign(signinDto, data);
    return await UserModel.create(userDto);
  }

  public async findByEmail(
    data: Pick<UserTypes, "email">
  ): Promise<UserTypes | null> {
    const { value } = loginDto.validate(data);
    return await UserModel.findOne(value).exec();
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
