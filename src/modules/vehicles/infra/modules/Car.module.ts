import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { CarController } from "../http/controllers/Car.controller";
import { CreateCarUseCase } from "../http/usecases/CreateCar.usecase";
import { CarRepository } from "../db/repositories/Car.repository";
import { ListCarUseCase } from "../http/usecases/ListCar.usecase";
import { AuthenticationMiddleware } from "src/modules/users/infra/http/middlewares/Auth.middleware";
import { JWTProvider } from "src/modules/users/providers/JWT.provider";


@Module({
  imports: [],
  controllers: [CarController],
  providers: [
    CarRepository,
    JWTProvider,
    CreateCarUseCase,
    ListCarUseCase
  ],
  exports: [],
})
export class CarModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthenticationMiddleware).forRoutes(CarController)
  }
}