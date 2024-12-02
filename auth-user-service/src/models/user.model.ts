import mongoose, { Schema } from "mongoose";
import bcrypt from "bcryptjs";
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

    password: {
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
      // required: true,
      unique: true,
    },

    accountType: {
      type: String,
      enum: ["savings", "current", "business"],
      // required: true,
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
      // required: true,
    },

    preferences: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Address",
      // required: true,
    },
  },

  { timestamps: true }
);

// hash user password bebofore save
UserSchema.pre<UserTypes>("save", async function (next) {
  if (!this.isModified("password")) return next();

  const hashPassword = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, hashPassword)
  next();
});

export default mongoose.model<UserTypes>("User", UserSchema);
