import { pgTable, varchar, text, uuid, boolean, timestamp } from "drizzle-orm/pg-core";


const baseSchema = {
  id: uuid().primaryKey().defaultRandom(),
  updatedAt: timestamp().defaultNow().notNull(),
  createdAt: timestamp().defaultNow().notNull(),
}

export const usersTable = pgTable("users", {
  ...baseSchema,
  name: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  phoneNumber: varchar({ length: 255 }).notNull().unique(),
  phoneNumberVerified: boolean().default(false),
  password: text().notNull(),
});


export const verifications = pgTable("verifications", {
  id: text().primaryKey(),
  identifier: varchar({ length: 255 }).notNull(),
  value: varchar({ length: 255 }).notNull(),
  expiresAt: timestamp().notNull(),
  updatedAt: timestamp().defaultNow().notNull(),
  createdAt: timestamp().defaultNow().notNull(),
});