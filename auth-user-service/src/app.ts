import express from "express";
import connectDB from "./utils/mongoose-client";
import config from "config";
import { authUserRouter } from "./routes/auth.user.route";

const app = express();

connectDB(config.get("MONGO_URL"));

app.enable('trust proxy');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/user", authUserRouter);

export default app;

// const router = express.Router();
