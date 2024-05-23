import { Module } from '@nestjs/common';
import { DBService } from './DB.service';
import { DBUser } from './DB.user.service';

@Module({
  exports: [DBUser],
  providers: [DBService, DBUser],
})
export class DBModule {}
