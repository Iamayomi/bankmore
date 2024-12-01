import mongoose, { Document } from "mongoose";

export default interface UserPreferences extends Document {
  preferences: {
    language: string;
    theme: string;
  };

  user: mongoose.Types.ObjectId;
}

