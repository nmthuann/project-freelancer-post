import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class CategoryMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization;

    if (token) {
      // kiểm tra token xác thực
      // nếu hợp lệ, gọi hàm next để chuyển đến controller tiếp theo
      next();
    } else {
      // nếu token không hợp lệ, trả về lỗi 401 Unauthorized
      res.status(401).send('Unauthorized');
    }
  }
}
