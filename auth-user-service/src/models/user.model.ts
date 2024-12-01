import mongoose, { Schema } from "mongoose";
import UserTypes from "../utils/types/user.type";

const UserSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    passwordHash: {
      type: String,
      required: true,
    },

    username: {
      type: String,
    },

    profilePicture: {
      type: String,
    },

    phoneNumber: {
      type: String,
      required: true,
    },

    accountNumber: {
      type: String,
      required: true,
      unique: true,
    },

    accountType: {
      type: String,
      enum: ["savings", "current", "business"],
      required: true,
    },

    balance: {
      type: Number,
      default: 0,
    },

    role: {
      type: String,
      enum: ["user", "admin", "manager"],
      default: "user",
    }, // Role added

    permissions: {
      type: [String],
      default: [],
    },

    lastLogin: {
      type: Date,
    },

    status: {
      type: String,
      enum: ["active", "pending", "suspended"],
      default: "active",
    },
    
    address: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Address",
      required: true,
    },

    preferences: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Address",
      required: true,
    },
  },

  { timestamps: true }
);

export default mongoose.model<UserTypes>("User", UserSchema);
