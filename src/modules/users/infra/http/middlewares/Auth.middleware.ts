import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";
import { JWTProvider } from "src/modules/users/providers/JWT.provider";

@Injectable()
export class AuthenticationMiddleware implements NestMiddleware {
  constructor(
    private readonly jwtProvider: JWTProvider
  ) { }
  use(request: Request, _response: Response, next: NextFunction) {
    const authHeader = request.headers.authorization;


    if (!authHeader) throw new Error('Token is missing');

    const [, token] = authHeader.split(' ');

    try {
      const decoded = this.jwtProvider.validate({
        token,
        secret: "secret"
      });

      const { id } = decoded as any

      request.user = {
        id
      }

      return next();
    } catch (err: any) {
      console.log("Erro na autenticação: " + err);
      throw new Error('Invalid token');
    }
  }
}