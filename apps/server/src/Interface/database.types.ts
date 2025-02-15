import { IAccount, IUser } from './Model.types';

export interface IDatabase<T, R> {
  createUser(payload: Omit<T, 'id'>): Promise<boolean>;
  updateUser(payload: T): Promise<boolean>;
  deleteUser(id: number): Promise<void>;
  findUser(id: number, showAccounts: boolean): Promise<T>;
  createAccount(payload: Omit<R, 'id'>): Promise<R>;
  updateAccount(payload: R): Promise<R>;
  deleteAccount(id: number): Promise<R>;
  findAccount(id: number, user: T, showUser: boolean): Promise<R>;
  findAccounts(user: T): Promise<R[]>;
}
