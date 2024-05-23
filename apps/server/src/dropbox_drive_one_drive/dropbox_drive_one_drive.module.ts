import { Module } from '@nestjs/common';
import { DropboxDriveService } from './dropbox_drive_one_drive.service';

@Module({
  exports: [DropboxDriveService],
  providers: [DropboxDriveService],
})
export class DropboxDriveModule {}
