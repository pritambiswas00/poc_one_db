import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TrpcRouter } from './trpc/trpc.router';
import { ConfigService } from '@nestjs/config';
import * as trpcExpress from '@trpc/server/adapters/express';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const trpcRouter = app.get(TrpcRouter);
  const configService = app.get(ConfigService);
  app.use('/api/trpc', trpcExpress.createExpressMiddleware({ router: trpcRouter.appRouter }))
  await app.listen(configService.getOrThrow('PORT'));
}
bootstrap();
