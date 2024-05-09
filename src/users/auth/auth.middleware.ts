import { HttpException, HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express'

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {

    const { authorization } = req.headers

    if (!authorization) {
      throw new HttpException('No autorizado', HttpStatus.UNAUTHORIZED)
    }

    if (authorization !== "xyz123ABC") {
      throw new HttpException('No autorizado', HttpStatus.FORBIDDEN)
    }

    next();
  }
}
