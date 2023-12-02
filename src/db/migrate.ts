import { migrate } from "drizzle-orm/postgres-js/migrator";
import { db } from ".";

async function main() {
  await migrate(db, { migrationsFolder: ".drizzle/migrations" });
  process.exit(0);
}

main();
