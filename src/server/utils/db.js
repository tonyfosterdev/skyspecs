import init from 'pg-promise';
const pgp = init();

function getDbClient(database) {
  const { DB_HOST, DB_PORT, DB_USER, DB_PASS } = process.env;
  return pgp(`postgres://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${database}`);
}

export function getPostgresDbClient() {
  return getDbClient('postgres');
}

export function getApplicationDbClient() {
  return getDbClient(process.env.DB_APP);
}

