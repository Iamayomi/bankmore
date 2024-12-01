// import User from ''; // Assume User is a Mongoose or Sequelize model

// export class AuthUserRepository {
//   async findAll(): Promise<User[]> {
//     return User.find(); // Example using Mongoose
//   }

//   async findOne(id: string): Promise<User | null> {
//     return User.findById(id); // Example using Mongoose
//   }

//   async create(data: Partial<User>): Promise<User> {
//     const user = new User(data);
//     return user.save();
//   }

//   async update(id: string, data: Partial<User>): Promise<User | null> {
//     return User.findByIdAndUpdate(id, data, { new: true }); 
//   }

//   async delete(id: string): Promise<void> {
//     await User.findByIdAndDelete(id); 
//   }
// }
