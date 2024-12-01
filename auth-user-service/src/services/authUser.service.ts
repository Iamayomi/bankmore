import AuthUserRepository  from '../repositories/auth.user.repository';
import User from "../entities/user.entities"
import UserAuthRepository from '../repositories/auth.user.repository';

export class AuthUserService {
  private userRepository: AuthUserRepository;

  constructor(repository: UserAuthRepository) {
    this.userRepository = repository;
  }

  public async getAllUsers(): Promise<User[]> {
    return this.userRepository.getAllUser();
  }

  public async getUserById(id: string): Promise<User | null> {
    const user = await this.userRepository.getUserById(id);
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  }

  public async createUser(data: Partial<User>): Promise<User> {

    // if (!data.name) {
    //   throw new Error('Name is required');
    // }
    
    return this.userRepository.createUser(data); 
  }

  public async updateUser(id: string, data: Partial<User>): Promise<User | null> {
    return this.userRepository.updateUser(id, data); 
  }

  public async deleteUser(id: string): Promise<void> {
    await this.userRepository.deleteUser(id);
  }
}
