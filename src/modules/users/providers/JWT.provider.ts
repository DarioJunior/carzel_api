import { Injectable } from "@nestjs/common";
import { JWTProviderInterface } from "../infra/http/middlewares/domain/providers/JWT.provider";
import { jwtConfig } from "../config/jwt.config";
import { authConfig } from "../config/auth.config";
import { JwtPayload, sign, verify } from "jsonwebtoken";
import { JWTProviderDTO, JWTValidateDTO } from "../infra/http/middlewares/domain/dtos/providers/JWTProvider.dto";

const { configSecret, expiresIn } = authConfig.token

@Injectable()
export class JWTProvider implements JWTProviderInterface {
  private algotithm: any = jwtConfig.algorithm;

  public generate({
    payload,
    secret = configSecret
  }: JWTProviderDTO): string {
    const token = sign(payload, secret, {
      algorithm: this.algotithm,
      expiresIn
    });

    return token
  }

  public validate({ token, secret }: JWTValidateDTO): JwtPayload | string {
    try {
      const decoded = verify(token, secret || configSecret);
      return decoded;
    } catch (error) {
      return error.message;
    }
  }

}