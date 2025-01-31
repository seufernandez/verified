import { Request, Response, NextFunction } from 'express';

export const mockedAuthMiddleware = (req: Request, res: Response, next: NextFunction) => {
  // Example: Set a user object on the request
  req.user = { id: 'user-id-1' };
  next();
};


// ** Example of application in prod

// export const authMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
//   const token = req.header('Authorization')?.replace('Bearer ', '');

//   if (!token) {
//     res.status(401).json({ message: 'No token, authorization denied' });
//     return;
//   }

//   try {
//     const decoded = jwt.verify(token, config.jwtSecret) as { userId: string };
//     const user = await UserService.findUserById(decoded.userId);

//     if (!user) {
//       res.status(401).json({ message: 'User not found' });
//       return;
//     }

//     req.user = user;
//     next();
//   } catch (error) {
//     res.status(401).json({ message: 'Token is not valid' });
//   }
// };
