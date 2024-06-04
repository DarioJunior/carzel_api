import { Controller, Get, Post } from "@nestjs/common";
import { CreateCarUseCase } from "../usecases/CreateCar.usecase";
import { ListCarUseCase } from "../usecases/ListCar.usecase";

@Controller('/vehicles')
export class CarController {
  constructor(
    private createCarUseCase: CreateCarUseCase,
    private listCarUseCase: ListCarUseCase
  ) { }

  @Post('/create')
  async createCar() {
    const result = await this.createCarUseCase.execute()
    return result
  }

  @Get('')
  async listCars() {
    const cars = await this.listCarUseCase.execute()
    return cars
  }
}