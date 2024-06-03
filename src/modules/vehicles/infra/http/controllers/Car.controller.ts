import { Controller, Get } from "@nestjs/common";
import { CreateCarUseCase } from "../usecases/CreateCar.usecase";

@Controller('/vehicles')
export class CarController {
  constructor(
    private createCarUseCase: CreateCarUseCase
  ) { }

  @Get('/create')
  async createCar() {
    const result = await this.createCarUseCase.execute()
    return result
  }
}