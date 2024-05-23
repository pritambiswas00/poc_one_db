import { Injectable } from '@nestjs/common';
import { TrpcService } from './trpc.service';
import { GoogleDriveService } from '@server/google_drive_one_drive/google_drive_one_drive.service';
import { MicrosoftDriveService } from '@server/microsoft_drive_one_drive/microsoft_drive_one_drive.service';

@Injectable()
export class TrpcRouter {
  constructor(
    private readonly trpcService: TrpcService,
    private readonly googleService: GoogleDriveService,
    private readonly microsoftService: MicrosoftDriveService,
  ) {}

  appRouter = this.trpcService.trpc.router({});
}

export type AppRouter = TrpcRouter['appRouter'];
