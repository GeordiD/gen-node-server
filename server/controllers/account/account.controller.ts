import { User } from '@/models/user';
import { _jwtService } from '@/services/jwt.service';
import { Request, Response, NextFunction } from 'express';

export interface LoginRequest extends Request {
  user: User;
}

export class AccountController {
  login(_req: Request, res: Response, next: NextFunction): void {
    try {
      const user = _req['user'] as User;

      const payload = {
        user: user.buildJwtUser(),
      };

      const token = _jwtService.signJwt(payload);
      const refreshToken = _jwtService.signRefreshToken(payload);

      res.json({
        token,
        refreshToken,
        user,
      });
    } catch (err) {
      next(err);
    }
  }

  refresh(_req: Request, res: Response, _next: NextFunction): void {
    try {
      const user = _req['user'] as User;

      const payload = {
        user: user.buildJwtUser(),
      };

      const token = _jwtService.signJwt(payload);

      res.json({
        token,
        user,
      });
    } catch (err) {
      _next(err);
    }
  }
}

export const _accountController = new AccountController();
