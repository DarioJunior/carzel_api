import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { CarController } from "../http/controllers/Car.controller";
import { CreateCarUseCase } from "../http/usecases/CreateCar.usecase";
import { CarRepository } from "../db/repositories/Car.repository";
import { ListCarUseCase } from "../http/usecases/ListCar.usecase";


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
  configure(consumer: MiddlewareConsumer) { }
}