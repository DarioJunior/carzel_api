import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CarController } from 'src/modules/vehicles/infra/http/controllers/Car.controller';
import { CarModule } from 'src/modules/vehicles/infra/modules/Car.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    CarModule
  ],
})
export class AppModule { }
