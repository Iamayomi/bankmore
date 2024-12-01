import mongoose, { Schema } from "mongoose";
import UserAddress from "../utils/types/address.type";

const UserAddressSchema: Schema = new Schema(
  {
    street: {
      type: String,
      required: false,
    },

    city: {
      type: String,
      required: false,
    },

    state: {
      type: String,
      required: false,
    },

    zip: {
      type: String,
      required: false,
    },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model<UserAddress>("Address", UserAddressSchema);
