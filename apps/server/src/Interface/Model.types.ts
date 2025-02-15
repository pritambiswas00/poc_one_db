import { DataProvider } from './data.provider.types';

export interface IUser {
  id: number;
  fullName: string | null;
  phone: string;
  email: string;
  accounts?: IAccount[];
}

export interface IAccount {
  id: number;
  accountType: DataProvider;
  user_id: IUser;
}
