import type { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .createTableIfNotExists('users', function (table) {
      table.increments('id');
      table.string('fullName', 255).notNullable();
      table.string('email', 255).notNullable().unique();
      table.string('phone', 255).nullable();
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    })
    .createTableIfNotExists('accounts', function (table) {
      table.increments('id');
      table.enum('account_type', [
        'GOOGLE',
        'MICROSOFT',
        'APPLE',
        'MEGA',
        'DROPBOX',
      ]);
      table.bigInteger('user_id').unsigned().notNullable();
      table
        .foreign('user_id')
        .references('id')
        .inTable('users')
        .onDelete('cascade');
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('accounts').dropTable('users');
}
