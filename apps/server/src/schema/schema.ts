import { DataProvider } from '@server/Interface/data.provider.types';
import {
  pgTable,
  serial,
  text,
  varchar,
  pgEnum,
  integer,
} from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

export const User = pgTable('users', {
  id: serial('id').primaryKey(),
  fullName: text('full_name'),
  phone: varchar('phone', { length: 256 }).notNull(),
  email: varchar('email', { length: 256 }).notNull().unique(),
});

export const usersRelations = relations(User, ({ many }) => ({
  accounts: many(Accounts),
}));
const accountTypeEnum = pgEnum('account_type', [DataProvider.GOOGLE]);

export const Accounts = pgTable('accounts', {
  id: serial('id').primaryKey(),
  accountType: accountTypeEnum('account_type').notNull(),
  userId: integer('user_id').references(() => User.id, { onDelete: 'cascade' }),
});

export const accountRelations = relations(Accounts, ({ one }) => ({
  user: one(User, {
    fields: [Accounts.userId],
    references: [User.id],
    relationName: 'user',
  }),
}));
