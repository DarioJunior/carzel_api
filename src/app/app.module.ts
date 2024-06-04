import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from 'src/modules/users/modules/User.module';
import { CarModule } from 'src/modules/vehicles/infra/modules/Car.module';
import { SharedModule } from 'src/shared/infra/http/Shared.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    CarModule,
    UserModule,
    SharedModule
  ],
})
export class AppModule { }
