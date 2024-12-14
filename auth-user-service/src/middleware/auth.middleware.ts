import { Request, Response, NextFunction } from 'express';
import JWTUtils from '../utils/jwt.utils';

export const authenticate = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Token is required' });

  try {
    const decoded = new JWTUtils().verifyToken(token, process.env.JWT_ACCESS_SECRET);
    req.user = decoded; // Attach user to the request
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
};

// export const authorize = (roles: string[]) => (req: Request, res: Response, next: NextFunction) => {
//   if (!req.user || !roles.includes(req.user.role)) {
//     return res.status(403).json({ error: 'Access denied' });
//   }
//   next();
// };
