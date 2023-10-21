import jwt from "jsonwebtoken";
import { JWT_SECRET, JWT_CONFIG } from "../configs/jwt";
import { JWT } from "../interfaces/jwt";

export default {
    create(payload: JWT.Payload) {
        return jwt.sign(payload, JWT_SECRET, JWT_CONFIG);
    },
    verify(token: string) {
        return jwt.verify(token, JWT_SECRET, JWT_CONFIG);
    },
};
