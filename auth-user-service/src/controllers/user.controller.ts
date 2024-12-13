import { Request, Response, NextFunction } from "express";
import { AuthUserService } from "../services/authUser.service";
import UserAuthRepository from "../repositories/auth.user.repository";
import UserEntities from "../entities/user.entities";
import JwtUtilities from "../utils/sign.token";
// console.log(new UserEntities())

export class UserController {
  private authUserService: AuthUserService;

  constructor() {
    const userRepository = new UserAuthRepository();
    this.authUserService = new AuthUserService(userRepository);
  }

  // Create User
  public createNewUser = async (req: Request, res: Response): Promise<void> => {
    const acctNumber = new UserEntities(req.body).generateAccount();
    const userAcctNumber = await acctNumber;

    const userData = {
      name: req.body.name,
      email: req.body.email,
      accountNumber: userAcctNumber,
      dateOfBirth: req.body.dateOfBirth,
      phoneNumber: req.body.phoneNumber,
      password: req.body.password,
    };

    try {
      const user = await this.authUserService.createUser(userData);
      res.status(201).json({
        status: "success",
        message: "User created successfully",
        data: user,
      });
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  };

  // User Login
  public signInUser = async (req: Request, res: Response): Promise<void> => {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).json({ error: "Email and password are required." });
      return;
    }

    try {
      const user = await this.authUserService.signinUser({ email, password });
      const jwtUtilities = new JwtUtilities();
      const token = await jwtUtilities.signToken({ id: user._id, email: user.email });
      res.status(200).json({
        status: "success",
        message: "User Login successfully",
        acessToken: token,
        data: user,
      });
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  };

  // Get UserBanks
  //   getUserBanks = async (req: Request, res: Response): Promise<void> => {
  //     const { userId } = req.params;

  //     try {
  //       const userBanks = await this.authUserService.getUserBankDetails(userId);
  //       res.status(200).json(userBanks);
  //     } catch (error) {
  //       res.status(400).json({ error: error.message });
  //     }
  //   };

  // Delete UserBank
  //   deleteUserBank = async (req: Request, res: Response): Promise<void> => {
  //     const { id } = req.params;

  //     try {
  //       await this.authUserService.deleteUserBank(id);
  //       res.status(204).send();
  //     } catch (error) {
  //       res.status(400).json({ error: error.message });
  //     }
  //   };
}
