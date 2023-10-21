import { Client, Pool } from "pg";
import ENV from "./env";

export const dbConfig = {
    host: ENV.POSTGRES_HOST,
    user: ENV.POSTGRES_USER,
    password: ENV.POSTGRES_PASSWORD,
    database: ENV.POSTGRES_DB,
    port: ENV.POSTGRES_PORT,
};

export const pool = new Pool(dbConfig);

export const client = new Client(dbConfig);
