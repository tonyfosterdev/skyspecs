import {
  getPostgresDbClient,
  getApplicationDbClient,
} from './utils/db';

export async function setupApplicationDatabase() {
  const client = getPostgresDbClient();

  const database = process.env.DB_APP;
  const exists = await client.oneOrNone(`SELECT 1 FROM pg_database WHERE datname = $1`, [database]);
  if (!exists) {
    console.warn(`Database '${database}' does not exist, creating...`);
    await client.none(`CREATE DATABASE $1:name`, [database]);

    //  We create the database. This should have been done with something like sequelize
    const appClient = getApplicationDbClient();
    await appClient.none(`
      CREATE TABLE public.gists
      (
          gists_id character varying(64)[] COLLATE pg_catalog.default NOT NULL,
          gists_description character varying(64)[] COLLATE pg_catalog.default NOT NULL,
          gists_favorited bit(1) NOT NULL,
          CONSTRAINT gists_pkey PRIMARY KEY (gists_id)
      )
    `);
  }
}
