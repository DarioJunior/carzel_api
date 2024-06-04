import { Injectable } from "@nestjs/common";
import { CarRepositoryInterface } from "../../domain/repositories/Car.repository";
import { prisma } from "src/shared/infra/db/prisma";
import { Vehicle } from "@prisma/client";

@Injectable()
export class CarRepository implements CarRepositoryInterface {
  async getAll(): Promise<Vehicle[]> {
    const cars = await prisma.vehicle.findMany({
      include: {
        MediaVehicle: {
          include: {
            media: true
          }
        }
      }
    })
    return cars
  }

  async create(): Promise<Vehicle> {
    const car = await prisma.vehicle.create({
      data: {
        brandId: 1,
        model: 'Ford KA',
        description: 'Veículo de repasse, garantia 3 meses',
        value: 20.999,
        mileage: 99999,
        year: 2014,
        isManualGear: true,
        isSold: false
      }
    })
    return car
  }
}