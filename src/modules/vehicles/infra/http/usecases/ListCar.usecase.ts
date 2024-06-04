import { Injectable } from "@nestjs/common";
import { CarRepository } from "../../db/repositories/Car.repository";
import { UseCaseInterface } from "src/shared/domain/protocols/UseCase.protocol";
import { Vehicle } from "@prisma/client";


@Injectable()
export class ListCarUseCase implements UseCaseInterface {
  constructor(
    private readonly carRepository: CarRepository
  ) { }

  async execute(): Promise<Vehicle[]> {
    const cars = await this.carRepository.getAll()
    return cars
  }
}