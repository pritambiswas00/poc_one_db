import { Module } from '@nestjs/common';
import { AppleDriveService } from './apple_drive_one_drive.service';

@Module({
  providers: [AppleDriveService],
  exports: [AppleDriveService],
})
export class AppleDriveModule {}
