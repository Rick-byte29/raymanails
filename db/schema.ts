import { sqliteTable, text } from 'drizzle-orm/sqlite-core';
export const requests=sqliteTable('studio_requests',{id:text('id').primaryKey(),kind:text('kind').notNull(),name:text('name').notNull(),email:text('email').notNull(),phone:text('phone'),details:text('details').notNull(),createdAt:text('created_at').notNull()});
