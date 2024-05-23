import { Module } from '@nestjs/common';
import { MicrosoftDriveService } from './microsoft_drive_one_drive.service';

@Module({
  exports: [MicrosoftDriveService],
  providers: [MicrosoftDriveService],
})
export class MicrosoftDriveModule {}
