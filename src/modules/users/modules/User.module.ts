import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";


@Module({
  imports: [],
  controllers: [],
  providers: [],
  exports: []
})
export class CarModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply().forRoutes('')
  }
}