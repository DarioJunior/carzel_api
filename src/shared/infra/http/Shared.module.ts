import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { JWTProvider } from "src/modules/users/providers/JWT.provider";

@Module({
  imports: [],
  controllers: [],
  providers: [
    JWTProvider
  ],
  exports: [
    JWTProvider
  ]
})
export class SharedModule implements NestModule {
  configure(consumer: MiddlewareConsumer) { }
}