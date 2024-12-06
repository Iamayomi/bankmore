import express from "express";
import { validateRequest } from "../middleware/validation";
import { userDto } from "../dto/user.dto";
import { UserController } from "../controllers/user.controller";

const userController = new UserController();
// console.log(userController)

const router = express.Router();

router.post(
  "/register",
  validateRequest(userDto),
  userController.createNewUser
);

export { router as authUserRouter };
