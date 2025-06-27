import { pgTable, varchar, text, uuid } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: uuid().primaryKey().generatedAlwaysAs("gen_random_uuid()"),
  name: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  phone: varchar({ length: 255 }).notNull().unique(),
  password: text().notNull(),
});
