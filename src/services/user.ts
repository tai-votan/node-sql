import { UUID } from "crypto";
import { User } from "../interfaces/user";
import userModel from "../models/user";
import jwt from "./jwt";

export default {
    register: async (data: User.Register.Request) => await userModel.register(data),
    find: async (userId: UUID) => await userModel.find(userId),
    login: async (data: User.Login.Request): Promise<User.Login.Response> => {
        const { id, password, email, ...user } = await userModel.login(data);

        const token = jwt.create({ id, password, email });
        console.log("🚀 ~ file: user.ts:13 ~ login: ~ token:", token);
        return {
            user: { ...user, id, email },
            token,
        };
    },
};
