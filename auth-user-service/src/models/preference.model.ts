import mongoose, { Schema } from "mongoose";
import UserPreferences from "../utils/types/preferences.type";

const UserAddressSchema: Schema = new Schema(
  {

    theme: {
      type: String,
      default: "light",
    },

    language: {
      type: String,
      default: "en",
    },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model<UserPreferences>("Address", UserAddressSchema);