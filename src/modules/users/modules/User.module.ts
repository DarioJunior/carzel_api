import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";


@Module({
  imports: [],
  controllers: [],
  providers: [],
  exports: []
})
export class UserModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply().forRoutes('')
  }
}