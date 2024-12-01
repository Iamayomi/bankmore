import mongoose, { Document } from "mongoose";

export default interface UserPreference extends Document {
  preferences: {
    language: string;
    theme: string;
  };

  user: mongoose.Types.ObjectId;
}

