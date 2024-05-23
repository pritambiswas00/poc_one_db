import { Injectable } from '@nestjs/common';
import { DriveProvider } from '@server/Interface/provider.interface';
import { authenticate } from '@google-cloud/local-auth';
import { google } from 'googleapis';
import { ConfigService } from '@nestjs/config';
import { DBService } from '@server/DB/DB.service';

@Injectable()
export class GoogleDriveService implements DriveProvider {
  constructor(
    private readonly configService: ConfigService,
    private readonly databaseService: DBService,
  ) {}
  async authenticate(): Promise<void> {
    throw new Error('Method not implemented.');
  }
  async authorize(): Promise<void> {}
  async validate(): Promise<void> {
    throw new Error('Method not implemented.');
  }

  private getClient(): any {
    return {};
  }
}
