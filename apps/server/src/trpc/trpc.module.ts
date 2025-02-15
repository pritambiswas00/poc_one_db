import { Module } from '@nestjs/common';
import { TrpcService } from './trpc.service';
import { TrpcRouter } from './trpc.router';
import { GoogleDriveModule } from '@server/google_drive_one_drive/google_drive_one_drive.module';
import { MicrosoftDriveModule } from '@server/microsoft_drive_one_drive/microsoft_drive_one_drive.module';
import { AppleDriveModule } from '@server/apple_drive_one_drive/apple_drive_one_drive.module';
import { DropboxDriveModule } from '@server/dropbox_drive_one_drive/dropbox_drive_one_drive.module';
import { MegaDriveModule } from '@server/mega_drive_one_drive/mega_drive_one_drive.module';
import { DBModule } from '@server/DB/DB.module';
import { DBService } from '@server/DB/DB.service';

@Module({
  imports: [
    GoogleDriveModule,
    MicrosoftDriveModule,
    AppleDriveModule,
    DropboxDriveModule,
    MegaDriveModule,
    DBModule,
  ],
  providers: [TrpcService, TrpcRouter],
})
export class TrpcModule {}
