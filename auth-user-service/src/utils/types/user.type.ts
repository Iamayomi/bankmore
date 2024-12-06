import mongoose, { Document } from "mongoose";

export default interface UserTypes extends Document {
  id: string;
  name: string;
  email: string;
  age: Date,
  password: string;
  username?: string;
  profilePicture?: string;
  bio?: string;
  phoneNumber?: string;
  roles: string[];
  permissions: string[];
  createdAt: Date;
  updatedAt: Date;
  lastLogin?: Date;
  status: "active" | "pending" | "suspended";

  address: mongoose.Types.ObjectId[];
  preferences: mongoose.Types.ObjectId[];
  // validatePassword(password: string): Promise<boolean>;
}
