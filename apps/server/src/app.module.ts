import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TrpcModule } from './trpc/trpc.module';
import { DBModule } from './DB/DB.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: 'dev.env' }),
    TrpcModule,
    DBModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
