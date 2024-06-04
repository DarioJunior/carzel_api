import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { CarController } from "../http/controllers/Car.controller";
import { CreateCarUseCase } from "../http/usecases/CreateCar.usecase";
import { CarRepository } from "../db/repositories/Car.repository";
import { ListCarUseCase } from "../http/usecases/ListCar.usecase";
import { AuthenticationMiddleware } from "src/modules/users/infra/http/middlewares/Auth.middleware";


@Module({
  imports: [],
  controllers: [CarController],
  providers: [
    CarRepository,
    CreateCarUseCase,
    ListCarUseCase
  ],
  exports: []
})
export class CarModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthenticationMiddleware).forRoutes(CarController)
  }
}