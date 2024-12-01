import mongoose, { Document } from "mongoose";

export default interface UserTypes extends Document {
  id: string;
  name: string;
  email: string;
  passwordHash: string;
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
}
