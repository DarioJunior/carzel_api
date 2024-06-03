import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { CarController } from "../http/controllers/Car.controller";
import { CreateCarUseCase } from "../http/usecases/CreateCar.usecase";
import { CarRepository } from "../db/repositories/Car.repository";


@Module({
  imports: [],
  controllers: [CarController],
  providers: [
    CreateCarUseCase,
    CarRepository
  ],
  exports: []
})
export class CarModule implements NestModule {
  configure(consumer: MiddlewareConsumer) { }
}