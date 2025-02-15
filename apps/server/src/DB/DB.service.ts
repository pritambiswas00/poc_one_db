import { Injectable, Logger } from '@nestjs/common';
import { IAccount, IUser } from '@server/Interface/Model.types';
import { IDatabase } from '@server/Interface/database.types';
import { Knex } from 'knex';
import { InjectModel } from 'nest-knexjs';

@Injectable()
export class DBService implements IDatabase<IUser, IAccount> {
  constructor(
    @InjectModel() private readonly knex: Knex<IUser | IAccount>,
    private readonly logger: Logger,
  ) {}
  async createUser(payload: Omit<IUser, 'id'>): Promise<boolean> {
    try {
      const [newUser] = await this.knex<IUser>('users')
        .insert(payload)
        .returning('*');
      if (newUser.id) return true;
      else return false;
    } catch (error: unknown) {
      throw new Error('Error Occured while creating New User');
    }
  }
  async updateUser(payload: IUser): Promise<boolean> {
    try {
      const [updatedUser] = await this.knex<IUser>()
        .from('users')
        .update({
          fullName: payload.fullName,
          phone: payload.phone,
          email: payload.email,
        })
        .where({ id: payload.id })
        .returning('*');
      if (updatedUser.id) return true;
      else return false;
    } catch (error: unknown) {
      throw new Error('Error Occured while Update the User');
    }
  }
  async deleteUser(id: number): Promise<void> {
    try {
      await this.knex<IUser>()
        .from('users')
        .delete()
        .where({ id: id })
        .returning('*');
    } catch (error: unknown) {
      throw new Error('Error Occured while delete User');
    }
  }
  async findUser(id: number, showAccounts: boolean): Promise<IUser> {
    try {
      let query: IUser | null = null;
      if (showAccounts) {
        query = await this.knex<IUser>()
          .from('users')
          .leftJoin<IAccount>('accounts', 'users.id', 'accounts.user_id')
          .select(
            'users.id as user_id',
            'fullName',
            'phone',
            'email',
            this.knex.raw(
              "COALESCE(json_agg(accounts.*) FILTER (WHERE accounts.id IS NOT NULL), '[]')) as accounts",
            ),
          )
          .where('users.id', id)
          .groupBy('users.id');
      } else {
        query = await this.knex().select<IUser>('*').where({ id: id });
      }
      if (query) return query;
      else throw new Error("Couldn't find the user");
    } catch (error: unknown) {
      throw new Error('Error Occured while Find User');
    }
  }
  async createAccount(payload: Omit<IAccount, 'id'>): Promise<IAccount> {
    try {
      const newAccount = await this.knex.transaction(async (trans) => {
        const [insertedAccount] = await trans<IAccount>('accounts')
          .insert(payload)
          .returning('*');
        return insertedAccount;
      });
      if (newAccount.id) return newAccount;
      else throw new Error("Couldn't Create new Account");
    } catch (error: unknown) {
      this.logger.debug('Error Occured in the Create Account');
      throw new Error('Error Occured while Create Account');
    }
  }
  async updateAccount(payload: IAccount): Promise<IAccount> {
    try {
      const updatedAccount = await this.knex.transaction(async (trans) => {
        const [updatedAccount] = await trans<IAccount>('accounts')
          .update({})
          .where({ id: payload.id, user_id: payload.user_id })
          .returning('*');
        return updatedAccount;
      });
      if (updatedAccount.id) return updatedAccount;
      else throw new Error("Couldn't update Account");
    } catch (error: unknown) {
      throw new Error('Error Occured while Update Account');
    }
  }
  async deleteAccount(id: number): Promise<IAccount> {
    try {
      const [deletedAccount] = await this.knex<IAccount>('accounts')
        .delete()
        .where({ id: id })
        .returning('*');
      if (deletedAccount) return deletedAccount;
      else throw new Error("Couldn't delete Account");
    } catch (error: unknown) {
      throw new Error('Error occured while Delete Account');
    }
  }
  async findAccount(
    id: number,
    user: Pick<IUser, 'id'>,
    showUser: boolean,
  ): Promise<IAccount> {
    try {
      const account = await this.knex<IAccount>('accounts')
        .select('*')
        .where({ id: id })
        .first();
      if (account) return account;
      else throw new Error("Couldn't find the Account");
    } catch (error: unknown) {
      throw new Error('Error occured while Find Account');
    }
  }
  async findAccounts(user: IUser): Promise<IAccount[]> {
    try {
      const accounts = await this.knex<IAccount>('accounts')
        .select('*')
        .where({ user_id: user });
      if (Array.isArray(accounts)) return accounts;
      else throw new Error("Couldn't find Accounts");
    } catch (error: unknown) {
      throw new Error('Error Occured while Find Accounts');
    }
  }
}
