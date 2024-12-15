import express from "express";
import { validateRequest } from "../middleware/validation";
import { signinDto, loginDto } from "../dto/user.dto";
import { UserController } from "../controllers/auth.user.controller";

const userController = new UserController();
// console.log(userController)

const router = express.Router();

router.post(
  "/register",
  validateRequest(signinDto),
  userController.createNewUser
);

router.post(
  "/login",
  validateRequest(loginDto),
  userController.signInUser
);

router.post(
  "/refreshtoken",
  userController.resetRefreshToken
);

export { router as authUserRouter };
