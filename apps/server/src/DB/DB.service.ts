import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { drizzle, PostgresJsDatabase } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

@Injectable()
export class DBService {
  public DB: PostgresJsDatabase;
  constructor(private readonly configService: ConfigService) {
    this.DB = drizzle(postgres(configService.get('DB_URI')));
  }
}
