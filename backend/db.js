import pg from "pg";

const {Pool} = pg;
const pool = new Pool({
    user: process.env.POSTGRES_USER || 'postgres',
    host: process.env.POSTGRES_HOST || 'localhost',
    database: process.env.POSTGRES_DB || 'perental-center',
    password: process.env.POSTGRES_PASSWORD || 'root',
    port: process.env.POSTGRES_PORT || 5432,
});
export default pool;