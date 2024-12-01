import { Request, Response, NextFunction } from "express";
import { AuthUserService } from "../services/authUser.service";
// import { UserAuthRespository } from "../repositories/auth.user.repository";
import UserAuthRepository  from "../repositories/auth.user.repository";


export class UserBankController {

  private authUserService: AuthUserService;

  constructor() {
    const userRepository = new UserAuthRepository();
    this.authUserService = new AuthUserService(userRepository);
  }

  // Create UserBank
  createNewUser = async (req: Request, res: Response): Promise<void> => {
    const { userId, bankName, accountNumber } = req.body;

    try {
      const userBank = await this.authUserService.createUser();
      res.status(201).json(userBank);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  // Get UserBanks
  getUserBanks = async (req: Request, res: Response): Promise<void> => {
    const { userId } = req.params;

    try {
      const userBanks = await this.authUserService.getUserBankDetails(userId);
      res.status(200).json(userBanks);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  // Delete UserBank
  deleteUserBank = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;

    try {
      await this.authUserService.deleteUserBank(id);
      res.status(204).send();
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
}
