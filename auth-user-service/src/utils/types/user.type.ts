import mongoose, { Document } from "mongoose";

export default interface UserTypes extends Document {
  id: string;
  name: string;
  email: string;
  dateOfBirth: Date,
  password: string;
  username?: string;
  profilePicture?: string;
  bio?: string;
  phoneNumber?: string;
  accountNumber: string;
  roles: string[];
  permissions: string[];
  createdAt: Date;
  updatedAt: Date;
  lastLogin?: Date;
  refreshToken: string;
  status: "active" | "pending" | "suspended";

  address: mongoose.Types.ObjectId[];
  preferences: mongoose.Types.ObjectId[];
  comparePassword(password: string): Promise<boolean>;
}
