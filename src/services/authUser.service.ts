// // userService.ts

// import { AuthUserRepository } from '../repositories/authUser.repository';
// import { User } from '.';

// export class AuthUserService {
//   private userRepository: AuthUserRepository;

//   constructor() {
//     this.userRepository = new AuthUserRepository();
//   }

//   async getAllUsers(): Promise<User[]> {
//     return this.userRepository.findAll();
//   }

//   async getUserById(id: string): Promise<User | null> {
//     const user = await this.userRepository.findOne(id);
//     if (!user) {
//       throw new Error('User not found');
//     }
//     return user;
//   }

//   async createUser(data: Partial<User>): Promise<User> {

//     if (!data.name) {
//       throw new Error('Name is required');
//     }
    
//     return this.userRepository.create(data); 
//   }

//   async updateUser(id: string, data: Partial<User>): Promise<User | null> {
//     return this.userRepository.update(id, data); 
//   }

//   async deleteUser(id: string): Promise<void> {
//     await this.userRepository.delete(id);
//   }
// }
