import bcrypt from "bcrypt";
import { UUID } from "crypto";

import { client } from "../configs/db";
import { User } from "../interfaces/user";

const salt = 10;

export default {
    find: async (userId: UUID): Promise<Omit<User.Me, "createdAt" | "updatedAt" | "password">> => {
        const query = "SELECT * from users WHERE id=$1";
        await client.connect();

        try {
            const res = await client.query<User.Me>(query, [userId]);
            const { createdAt, updatedAt, password, ...restUser } = res.rows[0] || {};
            return restUser;
        } finally {
            await client.end();
        }
    },
    register: async (data: User.Register.Request) => {
        const { name, email, gender, birthday, phone, address, password } = data;
        const passwordBcrypt = await bcrypt.hash(password, salt);

        const query =
            "INSERT INTO users (name, email, gender, birthday, phone, address, password) VALUES ($1, $2, $3, $4, $5, $6, $7)";

        await client.connect();

        try {
            await client.query(query, [name, email, gender, birthday, phone, address, passwordBcrypt]);
        } finally {
            await client.end();
        }
    },
    login: async (data: User.Login.Request): Promise<User.Me> => {
        const { email, password } = data;
        const passwordBcrypt = await bcrypt.hash(password, salt);
        const query = "SELECT * FROM stooges WHERE name IN ($1, $2, $3)";

        await client.connect();

        try {
            const res = await client.query<User.Me>(query, [email, passwordBcrypt]);
            return res.rows[0] || {};
        } finally {
            await client.end();
        }
    },
};
