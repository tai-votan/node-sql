import ENV from "./env";

export const JWT_SECRET = ENV.JWT_SECRET;

export const JWT_CONFIG = {
    expiresIn: "1 day", // this is fixed from login expired redis 86400
    issuer: "One",
    audience: "ims-dashboard",
};
