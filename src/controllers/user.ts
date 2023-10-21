import { Request, Response } from "express";
import userServices from "../services/user";
import { User } from "../interfaces/user";
import logger from "../utils/logger";

export default {
    register: async (req: Request, res: Response) => {
        try {
            const { name, email, gender, birthday, phone, address, password } = <User.Register.Request>req.body;

            if (!name || !email || !phone || !password) {
                // TODO: validation
                return res
                    .status(400)
                    .json({ message: "Bad request params: name, email, gender, birthday, phone, address, password" });
            }

            const result = await userServices.register({ name, email, gender, birthday, phone, address, password });

            res.json(result);
        } catch (error) {
            logger({ str: "[POST] /user/login", type: "error", value: error });
            throw error;
        }
    },
    find: async (_: Request, res: Response) => {
        try {
            // TODO: parse token get userid
            const userId = "ba2c832e-a1f7-48af-810b-19a065462ae4";
            const result = await userServices.find(userId);
            console.log("🚀 ~ file: user.ts:30 ~ find: ~ result:", result);
            res.json({
                data: { user: result },
                message: "success",
            });
        } catch (error) {
            logger({ str: "[GET] /user", type: "error", value: error });
            throw error;
        }
    },
    // update: async (req: Request, res: Response) => {
    //     try {
    //         const { userName, name, phone } = <User.Update>req.body;
    //         const result = await user.update({ userName, name, phone });
    //         res.json({ user: result });
    //     } catch (error) {
    //         logger({ str: "[PUT] /user", type: "error", value: error });
    //         throw error;
    //     }
    // },
    // login: async (req: Request, res: Response) => {
    //     try {
    //         const { email, password } = <User.Login.Request>req.body;
    //         const result = await user.login({ email, password });
    //         res.json(result);
    //     } catch (error) {
    //         logger({ str: "[POST] /user/login", type: "error", value: error });
    //         throw error;
    //     }
    // },
    // logout: async (_: Request) => {
    //     try {
    //         await user.logout();
    //     } catch (error) {
    //         logger({ str: "[POST] /user/logout", type: "error", value: error });
    //         throw error;
    //     }
    // },
    // forgotPassWord: async (req: Request, res: Response) => {
    //     try {
    //         const { email } = <User.ForgotPassword>req.body;
    //         const result = await user.forgotPassWord({ email });
    //         res.json({ user: result });
    //     } catch (error) {
    //         logger({ str: "[POST] /user/forgot-password", type: "error", value: error });
    //         throw error;
    //     }
    // },
    // resetPassWord: async (req: Request, res: Response) => {
    //     try {
    //         const { email, password } = <User.ResetPassword.Request>req.body;
    //         const result = await user.resetPassWord({ email, password });
    //         res.json({ user: result });
    //     } catch (error) {
    //         logger({ str: "[POST] /user/reset-passWord", type: "error", value: error });
    //         throw error;
    //     }
    // },
};
