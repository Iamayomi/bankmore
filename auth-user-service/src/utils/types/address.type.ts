import mongoose, { Document } from "mongoose";

export default interface UserAddress extends Document {
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
  user: mongoose.Types.ObjectId;
}
