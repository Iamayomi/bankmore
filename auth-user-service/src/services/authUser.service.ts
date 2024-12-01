import AuthUserRepository  from '../repositories/auth.user.repository';

export class AuthUserService {
  private userRepository: AuthUserRepository;

  constructor() {
    this.userRepository = new AuthUserRepository();
  }

  public async getAllUsers(): Promise<User[]> {
    return this.userRepository.findAll();
  }

  public async getUserById(id: string): Promise<User | null> {
    const user = await this.userRepository.findOne(id);
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  }

  public async createUser(data: Partial<User>): Promise<User> {

    if (!data.name) {
      throw new Error('Name is required');
    }
    
    return this.userRepository.create(data); 
  }

  public async updateUser(id: string, data: Partial<User>): Promise<User | null> {
    return this.userRepository.update(id, data); 
  }

  public async deleteUser(id: string): Promise<void> {
    await this.userRepository.delete(id);
  }
}
