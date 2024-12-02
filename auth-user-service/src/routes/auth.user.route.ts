import express from "express";
import { UserController } from "../controllers/user.controller";

const userController = new UserController();
// console.log(userController)

const router = express.Router();


router.post("/register", userController.createNewUser)


export { router as authUserRouter};