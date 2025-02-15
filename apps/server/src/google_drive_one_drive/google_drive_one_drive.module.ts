import { Module } from '@nestjs/common';
import { GoogleDriveService } from './google_drive_one_drive.service';
import { DBService } from '@server/DB/DB.service';

@Module({
  exports: [GoogleDriveService],
  providers: [GoogleDriveService, DBService],
})
export class GoogleDriveModule {}
