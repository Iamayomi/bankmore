import { Request, Response, NextFunction } from "express";
import config from "config";
import { AuthUserService } from "../services/authUser.service";
import UserAuthRepository from "../repositories/auth.user.repository";
import UserEntities from "../entities/user.entities";
import JWTUtils from "../utils/jwt.utils";
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

      const jwtUtils = new JWTUtils();

      const accessToken = await jwtUtils.signAccessToken({
        id: user._id,
        email: user.email,
      });

      const refreshToken = await jwtUtils.signRefreshToken({
        id: user._id,
        email: user.email,
      });

      const jwtCookiesExpires = config.get("JWT_COOKIES_EXPIRES") as number;

      res.cookie("refreshToken", refreshToken, {
        expires: new Date(Date.now() + jwtCookiesExpires * 24 * 60 * 60 * 1000),
        secure: process.env.NODE_ENV === "production",
        httpOnly: true,
        sameSite: "lax",
      });

      res.status(200).json({
        status: "success",
        message: "User Login successfully",
        accessToken: accessToken,
        refreshToken: refreshToken,
        data: user,
      });
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  };

  public authenticate = async (
    req: Request,
    res: Response,
    next: NextFunction
  )=> {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) return res.status(401).json({ error: "Token is required" });

    try {
      const decoded = new JWTUtils().verifyToken(token);
      // req.user = decoded;
      console.log(decoded)
      next();
    } catch (error: any) {
      res.status(401).json({ error: "Invalid token" });
    }
  };

 public resetRefreshToken = async ( req: Request,
    res: Response,
    next: NextFunction) => {
    try {
      const { refreshToken } = req.cookies;
      
      res.status(200).json({ accessToken: newAccessToken });
    } catch (error) {
      res.status(401).json({ error: error.message });
    }
  });
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
