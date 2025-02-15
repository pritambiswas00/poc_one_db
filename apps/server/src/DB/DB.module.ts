import { Module, LoggerService, Logger } from '@nestjs/common';
import { DBService } from './DB.service';
import { KnexModule } from 'nest-knexjs';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    KnexModule.forRootAsync({
      useFactory: (config: ConfigService) => ({
        config: {
          client: 'pg',
          useNullAsDefault: true,
          debug: true,
          connection: config.get('DB_URI'),
        },
      }),
    }),
  ],
  exports: [DBService],
  providers: [DBService, Logger],
})
export class DBModule {}
