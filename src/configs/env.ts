import dotenv from "dotenv";

dotenv.config();

const ENV = {
    PORT: process.env.PORT || 5000,
    NODE_ENV: process.env.NODE_ENV,

    // DB env
    POSTGRES_HOST: process.env.POSTGRES_HOST,
    POSTGRES_USER: process.env.POSTGRES_USER,
    POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD,
    POSTGRES_DB: process.env.POSTGRES_DB,
    POSTGRES_PORT: (process.env.POSTGRES_PORT || 5435) as number,

    // JWT
    JWT_SECRET: process.env.JWT_SECRET as string,
};

export default ENV;
