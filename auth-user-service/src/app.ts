import express from "express";
import cookieParser from "cookie-parser";
import connectDB from "./utils/mongoose";
import config from "config";
import { authUserRouter } from "./routes/auth.user.route";

const app = express();

connectDB(config.get("MONGO_URL"));

app.enable('trust proxy');

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

app.use("api/auth", authUserRouter);

export default app;

// const router = express.Router();
