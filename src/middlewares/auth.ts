import { NextFunction, Request, Response } from "express";
import ENV from "../configs/env";

function auth(req: Request, res: Response, next: NextFunction) {
    const cookies = req.cookies;
    if (cookies.Authorization) {
        const secret = ENV.JWT_SECRET;
    } else {
        next();
    }
}
