import { Module } from '@nestjs/common';
import { GoogleDriveService } from './google_drive_one_drive.service';

@Module({
  exports: [GoogleDriveService],
  providers: [GoogleDriveService],
})
export class GoogleDriveModule {}
