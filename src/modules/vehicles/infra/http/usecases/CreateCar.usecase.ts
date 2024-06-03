import { Injectable } from "@nestjs/common";
import { UseCaseInterface } from "src/shared/domain/protocols/UseCase.protocol";
import { CarRepositoryInterface } from "../../domain/repositories/Car.repository";
import { CarRepository } from "../../db/repositories/Car.repository";

@Injectable()
export class CreateCarUseCase implements UseCaseInterface {
  constructor(
    private readonly carRepository: CarRepository
  ) { }
  async execute(): Promise<boolean> {
    const createdCar = await this.carRepository.create()

    console.log('Car created: ', createdCar)
    return true
  }
}