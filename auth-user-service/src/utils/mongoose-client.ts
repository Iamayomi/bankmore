import mongoose from "mongoose";

export default async (url: string): Promise<void> => {
  try {
    await mongoose.connect(url);
    console.log("MongoDB Connected........");
  } catch (err) {
    console.error("MongoDB Connection Error:", err);
    process.exit(1);
  }
};


