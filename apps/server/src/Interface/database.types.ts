export interface IDatabase<T> {
  create(payload: Omit<T, 'id'>): Promise<boolean | Error>;
  update(payload: T): Promise<boolean | Error>;
  delete(id: number): Promise<void | Error>;
  find(id: number, showAccounts: boolean): Promise<T | Error>;
  findAll(offset: number, limit: number): Promise<T[] | Error>;
}
