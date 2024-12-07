import mongoose, { Schema, Types } from "mongoose";
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
      required: [true, "please provide an email"],
      trim: true,
      // validate: [validator.isEmail, "Please provide a valid email"],
      unique: true,
    },

    age: {
      type: Date,
      required: true,
    },

    password: {
      type: String,
      minLength: [6, "password must be greater than {VALUE}"],
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
      required: [true, "User phone number required"],
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

// UserSchema.pre(/^find/, function (next) {
//   this.find({ active: { $ne: false } });
//   next();
// });

// hash user password bebofore save
UserSchema.pre<UserTypes>("save", async function (next) {
  if (!this.isModified("password")) return next();
  try {
    const hashPassword = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, hashPassword);
    next();
  } catch (err: any) {
    next(err);
  }
});

export default mongoose.model<UserTypes>("User", UserSchema);
