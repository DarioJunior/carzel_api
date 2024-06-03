import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";

@Module({
  imports: [],
  controllers: [],
  providers: [],
  exports: []
})
export class SharedModule implements NestModule {
  configure(consumer: MiddlewareConsumer) { }
}