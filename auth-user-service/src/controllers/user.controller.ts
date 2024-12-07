import { Request, Response, NextFunction } from "express";
import { AuthUserService } from "../services/authUser.service";
// import { UserAuthRespository } from "../repositories/auth.user.repository";
import UserAuthRepository from "../repositories/auth.user.repository";
import UserEntities from "../entities/user.entities";
// console.log(new UserEntities())

export class UserController {
  private authUserService: AuthUserService;

  constructor() {
    const userRepository = new UserAuthRepository();
    this.authUserService = new AuthUserService(userRepository);
    // this.userAcctNumber = new UserEntities
    // this.userAcctNumber =  new UserEntities(userRepository);

  }

  // Create UserBank
  public createNewUser = async (req: Request, res: Response): Promise<void> => {
    // const { userId, bankName, accountNumber } = req.body;
    const userAcctNumber =  new UserEntities(req.body).generateAccount;
    console.log(userAcctNumber)

    const userData = {name: req.body.name, email: req.body.email, accountNumber: userAcctNumber, age: req.body.password, phoneNumber: req.body.phoneNumber};

    try {
      const user = await this.authUserService.createUser(req.body);
      res
        .status(201)
        .json({
          status: "success",
          message: "User created successfully",
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
