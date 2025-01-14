import bcrypt from "bcryptjs";
import AuthUserRepository from "../repositories/auth.user.repository";
import UserTypes from "../utils/types/user.type";
import UserAuthRepository from "../repositories/auth.user.repository";
import JWTUtils from "../utils/jwt.utils";


export class AuthUserService {
  private userRepository: AuthUserRepository;

  constructor(repository: UserAuthRepository) {
    this.userRepository = repository;
  }

  // public async getAllUsers(): Promise<User[]> {
  //   return this.userRepository.getAllUser();
  // }

  // public async getUserById(id: string): Promise<User | null> {
  //   const user = await this.userRepository.getUserById(id);
  //   if (!user) {
  //     throw new Error('User not found');
  //   }
  //   return user;
  // }

  public async createUser(data: Partial<UserTypes>): Promise<UserTypes> {
    try {
      return this.userRepository.createUser(data);
    } catch (err: any) {
      throw new Error(err);
    }
  }

  public async signinUser(
    data: Pick<UserTypes, "email" | "password">
  ): Promise<any> {
    const { email, password } = data;

    const user = await this.userRepository.findByEmail({ email });

    if (!user) {
      throw new Error("User not found");
    }

    const isPasswordValid = await user.comparePassword(password);

    if (!isPasswordValid) {
      throw new Error("Invalid password");
    }

    return user;
  }

  public async refresh(refreshToken: string): Promise<void> {

    const user = await this.userRepository.getUserByToken({ refreshToken: { $exists: true } });
    console.log(user)

    if (!user || !(await bcrypt.compare(refreshToken, user.refreshToken!))) {
      throw new Error('Invalid refresh token');
    };
    // Generate a new access token
    const jwtUtils = new JWTUtils;
     const accessToken = await jwtUtils.signAccessToken(user);
    console.log(accessToken)

    // const accessToken = await jwtUtils.signAccessToken({
    //   id: user._id,
    //   email: user.email,
    // });


    // return accessToken;
  }
  // public async updateUser(id: string, data: Partial<User>): Promise<User | null> {
  //   return this.userRepository.updateUser(id, data);
  // }

  // public async deleteUser(id: string): Promise<void> {
  //   await this.userRepository.deleteUser(id);
  // }
}
