import { Injectable } from '@nestjs/common';
import type { IUser } from '@server/Interface/User.types';
import { IDatabase } from '@server/Interface/database.types';
import { DBService } from './DB.service';
import { Accounts, User } from '../schema/schema';
import { eq } from 'drizzle-orm';

@Injectable()
export class DBUser implements IDatabase<IUser> {
  constructor(private readonly dbService: DBService) {}
  async create(payload: Omit<IUser, 'id'>): Promise<boolean | Error> {
    try {
      const [newUserId] = await this.dbService.DB.insert(User)
        .values({
          email: payload.email,
          phone: payload.phone,
          fullName: payload.fullName,
        })
        .returning({ id: User.id });
      if (newUserId.id) return true;
      return false;
    } catch (error: unknown) {
      return new Error('Error Occured While Create User');
    }
  }
  async update(payload: IUser): Promise<boolean | Error> {
    try {
      const result = await this.dbService.DB.update(User)
        .set({
          fullName: payload.fullName,
          phone: payload.phone,
          email: payload.email,
        })
        .where(eq(User.id, payload.id));
      if (result) return true;
      return false;
    } catch (error: unknown) {
      return new Error('Error Occured While Update User');
    }
  }
  async delete(id: number): Promise<void | Error> {
    try {
      await this.dbService.DB.delete(User).where(eq(User.id, id));
      return;
    } catch (error: unknown) {
      return new Error('Error Occured While Delete User');
    }
  }
  async find(id: number, showAccounts: boolean): Promise<IUser | Error> {
    try {
      let query: IUser | null = null;
      if (showAccounts) {
        const [data] = await this.dbService.DB.selectDistinct({
          fullName: User.fullName,
          email: User.email,
          phone: User.phone,
          id: User.id,
        })
          .from(User)
          .leftJoin(Accounts, eq(User.id, Accounts.userId))
          .where(eq(User.id, id));
        query = data;
      } else {
        const [data] = await this.dbService.DB.selectDistinct({
          fullName: User.fullName,
          email: User.email,
          phone: User.phone,
          id: User.id,
        })
          .from(User)
          .where(eq(User.id, id));
        query = data;
      }

      if (query) return query;
      return new Error('User not found');
    } catch (error: unknown) {
      return new Error('Error Occured While Finding User');
    }
  }
  async findAll(offset: number, limit: number): Promise<Error | IUser[]> {
    try {
      const users = await this.dbService.DB.select()
        .from(User)
        .limit(limit ?? 10)
        .offset(offset || 0);
      return users;
    } catch (error: unknown) {
      return new Error('Error Occured While Find All Users');
    }
  }
}
