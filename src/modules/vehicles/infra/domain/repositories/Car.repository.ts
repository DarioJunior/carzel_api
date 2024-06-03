import { Vehicle } from "@prisma/client";

export interface CarRepositoryInterface {
  create(): Promise<Vehicle>
}