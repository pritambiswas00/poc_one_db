import { Injectable } from '@nestjs/common';
import { DriveProvider } from '@server/Interface/provider.interface';

@Injectable()
export class MicrosoftDriveService implements DriveProvider {
  authenticate(): Promise<void> {
    throw new Error('Method not implemented.');
  }
  authorize(): Promise<void> {
    throw new Error('Method not implemented.');
  }
  validate(): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
