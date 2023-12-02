import { pgTable, serial, text } from "drizzle-orm/pg-core";

export const user = pgTable("users", {
  id: serial("id").notNull().primaryKey(),
  name: text("name"),
});
