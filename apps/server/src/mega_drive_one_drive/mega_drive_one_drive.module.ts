import { Module } from '@nestjs/common';
import { MegaDriveService } from './mega_drive_one_drive.service';

@Module({
  exports: [MegaDriveService],
  providers: [MegaDriveService],
})
export class MegaDriveModule {}
